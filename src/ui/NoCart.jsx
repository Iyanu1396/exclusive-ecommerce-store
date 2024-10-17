import { Link } from "react-router-dom"

function NoCart() {
  return (
    <div className="flex justify-center flex-col items-center font-mont ">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 font-inter">Your Cart is Empty</h1>
      <p className="text-lg text-gray-600 mb-6">It seems you have not added any items to your cart.</p> 
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        <Link to="/">
          Continue Shopping
        </Link>
      </button> 
    </div>
  )
}

export default NoCart
