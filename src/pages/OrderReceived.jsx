import React, { useState } from 'react';
import Confetti from 'react-confetti';
import {useUser} from "../features/authentication/useUser"
import { Link } from 'react-router-dom';

function OrderReceived() {
  let {user} = useUser()
 const userData = user?.user_metadata


  return (
    <div className="flex flex-col items-center justify-center h-screen font-inter bg-gray-100">
      <Confetti />
      <h1 className="text-4xl font-bold text-green-600">Order Received!</h1>
      <p className="mt-4 text-lg text-gray-800">Thank you for your order, {userData.fullName}!</p>

<Link to="/">
      <button className="bg-blue-500 text-white font-semibold  w-full mt-4  py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        
          Continue Shopping
       
      </button> 
 </Link>

    </div>
  )
}

export default OrderReceived
