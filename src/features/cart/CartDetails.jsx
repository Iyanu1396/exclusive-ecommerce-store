import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../products/productsSlice";
import { useGetCart } from "../../helpers/useGetCart";

function CartDetails() {
  const cart = useGetCart()
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0 ) {
      dispatch(updateCartQuantity({ id, quantity: newQuantity }));
    }
  };


  return (
    <>
      {cart.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-4 items-center rounded-md py-4 text-center shadow-md shadow-slate-200"
        >
          <img
            className="m-auto block h-[39px] w-[50px]"
            src={product.img}
            alt=""
          />
          <p>${product.price}</p>

          <div className="flex items-center justify-center">
            <button
              className="px-2 py-1 bg-gray-200 rounded-l-md"
              onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
            >
              -
            </button>
            <span className="px-4 py-1 bg-white border-t border-b border-gray-300">
              {product.quantity}
            </span>
            <button
              className="px-2 py-1 bg-gray-200 rounded-r-md"
              onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
            >
              +
            </button>
          </div>

          <p>${(product.price * product.quantity).toFixed(2)}</p>
        </div>
      ))}
    </>
  );
}

export default CartDetails;
