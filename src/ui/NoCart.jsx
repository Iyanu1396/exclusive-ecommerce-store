import { Link } from "react-router-dom"

function NoCart() {
  return (
    <div className="flex justify-center flex-col items-center">
    <h1>Your Cart is Empty</h1>
    <p>It seems you have not added any items to your cart.</p> 
    <button onClick={() => {}}>
      <Link to="/">
        Continue Shopping
      </Link>
    
    </button> 
  </div>
  )
}

export default NoCart
