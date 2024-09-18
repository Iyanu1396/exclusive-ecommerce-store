import { useState } from "react";
import AddToCartBtn from "../features/cart/AddToCartBtn";
import AddToWishListBtn from "../features/wishList/AddToWishListBtn";
import { FiEye } from "react-icons/fi";

function ProductCard({ product }) {
  const [displayCartBtn, setDisplayCartBtn] = useState(false);

  return (
    <div
      className="mt-8 px-2 pb-4 font-inter"
      onMouseEnter={() => setDisplayCartBtn(true)}
      onMouseLeave={() => setDisplayCartBtn(false)}
    >
      <div>
        <div className="relative">
          <img
            className="m-auto flex h-[120px] w-[120px] rounded-t-sm p-2 md:h-[170] md:w-[170]"
            src={product?.image}
            alt={product?.title}
          />
          <div className="absolute bottom-0 right-0 top-0 flex flex-col gap-2">
            <AddToWishListBtn product={product} />
            <div className="cursor-pointer">
              <FiEye />
            </div>
          </div>
        </div>
        <AddToCartBtn product={product} displayCartBtn={displayCartBtn} />
      </div>
      <h3 className="mb-2 font-mont text-sm font-semibold">{product?.title}</h3>
      <p className="font-mont font-medium text-red-700">${product?.price}</p>
    </div>
  );
}

export default ProductCard;
