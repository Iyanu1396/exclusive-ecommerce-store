import { addToCart, removeFromCart } from "../products/productsSlice";
import { useDispatch, useSelector } from "react-redux";

function AddToCartBtn({ product, displayCartBtn }) {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  function handleAddToCart(product) {
    const item = {
      id:product.id,
      name:product.name,
      price:product.price,
      img:product.image,
      quantity:0
      
    }
    dispatch(addToCart(item));
  }
  function handleRemoveFromCart(product) {
    const item = {
      id:product.id,
      name:product.name,
      price:product.price,
      img:product.image,
      quantity:0
      
    }
    dispatch(removeFromCart(item));
  }

  const productExists = cart?.find((products) => products.id === product.id);

  return (
    <div>
      {!productExists ? (
        <button
          className={`w-full cursor-pointer rounded-b-sm bg-slate-900 py-2 text-center text-xs text-slate-50 sm:text-base ${!displayCartBtn ? "hidden" : "block"}`}
          onClick={() => handleAddToCart(product)}
        >
          Add To Cart
        </button>
      ) : (
        <button
          className={`w-full cursor-pointer rounded-b-sm bg-red-700 py-2 text-center text-xs text-slate-50 sm:text-base ${!displayCartBtn ? "hidden" : "block"}`}
          onClick={() => handleRemoveFromCart(product)}
        >
          Remove From Cart
        </button>
      )}
    </div>
  );
}

export default AddToCartBtn;
