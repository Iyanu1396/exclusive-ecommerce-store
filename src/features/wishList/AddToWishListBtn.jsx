import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, removeFromWishList } from "../products/productsSlice";

function AddToWishListBtn({ product }) {
  const wishList = useSelector((state) => state.products.wishList);
  const dispatch = useDispatch();
  const wishListExists = wishList?.find(
    (products) => products.id === product.id,
  );
  function handleAddToWishList(product) {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.image,
    };
    dispatch(addToWishList(item));
  }

  function handleRemoveFromWishList(product) {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.image,
    };
    dispatch(removeFromWishList(item));
  }
  return (
    <>
      {wishListExists ? (
        <div
          className="cursor-pointer text-red-600"
          onClick={() => handleRemoveFromWishList(product)}
        >
          <FaHeart />
        </div>
      ) : (
        <div
          className="cursor-pointer text-slate-900"
          onClick={() => handleAddToWishList(product)}
        >
          <FaRegHeart />
        </div>
      )}
    </>
  );
}

export default AddToWishListBtn;
