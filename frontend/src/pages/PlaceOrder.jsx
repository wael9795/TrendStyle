import React, { useState, useContext } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";


const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(backendUrl + "/api/order/place", orderData, {
            headers: {
              token
            }
          });
          if (response.data.success) {
            setCartItems({})
            navigate("/orders")
          } else {
            toast.error(response.data.message)
          }
          break;
        case "stripe":
          const responseStripe = await axios.post(backendUrl + "/api/order/stripe", orderData, {
            headers: {
              token
            }
          });
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message)
          }
          break;

        default:
          break;

      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="Delivery" text2="Information" />
        </div>
        <div className="flex gap-3">
          <input required name="firstName" value={formData.firstName} className="border border-gray-300 px-2 py-1 rounded-md w-full" type="text" placeholder="First Name" onChange={onChangeHandler} />
          <input required name="lastName" value={formData.lastName} className="border border-gray-300 px-2 py-1 rounded-md w-full" type="text" placeholder="Last Name" onChange={onChangeHandler} />
        </div>
        <input required name="email" value={formData.email} className="border border-gray-300 px-2 py-1 rounded-md w-full" type="email" placeholder="Email" onChange={onChangeHandler} />

        <input required name="street" value={formData.street} onChange={onChangeHandler} className="border border-gray-300 px-2 py-1 rounded-md w-full" type="text" placeholder="Street" />
        <div className="flex gap-3">
          <input required name="city" value={formData.city} onChange={onChangeHandler} className="border border-gray-300 px-2 py-1 rounded-md w-full" type="text" placeholder="City" />
          <input required name="state" value={formData.state} onChange={onChangeHandler} className="border border-gray-300 px-2 py-1 rounded-md w-full" type="text" placeholder="State" />
        </div>
        <div className="flex gap-3">
          <input required name="zipCode" value={formData.zipCode} onChange={onChangeHandler} className="border border-gray-300 px-2 py-1 rounded-md w-full" type="number" placeholder="Zip Code" />
          <input required name="country" value={formData.country} onChange={onChangeHandler} className="border border-gray-300 px-2 py-1 rounded-md w-full" type="text" placeholder="Country" />
        </div>
        <input required name="phoneNumber" value={formData.phoneNumber} onChange={onChangeHandler} className="border border-gray-300 px-2 py-1 rounded-md w-full" type="number" placeholder="Phone Number" />
      </div>

      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1="Payment" text2="Method" />
          {/* payment method */}
          <div className="flex flex-col gap-4 lg:flex-row">
            <div onClick={() => setMethod("stripe")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            {/* <div onClick={() => setMethod("razorpay")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div> */}
            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
              <p className="mx-4 text-gray-600 text-sm font-medium">Cash On Delivery</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-blue-600 text-white text-sm sm:text-base px-8 my-8 py-2 rounded-md hover:bg-blue-800 transition-all duration-300">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
