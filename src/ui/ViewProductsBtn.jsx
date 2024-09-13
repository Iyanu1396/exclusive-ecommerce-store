import { Link } from "react-router-dom";

function ViewProductsBtn() {

  return (
    <button className="m-auto mt-6 block rounded-sm bg-red-600 px-6 py-2 font-inter text-slate-50">
  <Link to="/products"> View All Products</Link>
  </button>
  )
}

export default ViewProductsBtn
