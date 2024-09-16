import { CiHeart } from "react-icons/ci";
import { GoEye } from "react-icons/go";

function ProductsCardAll({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products?.map((product) => (
        <div key={product.id} className="mt-8 px-2 pb-4 font-inter">
          <div>
          <div className="relative">
          <img
            className=" h-[120px] m-auto flex w-[120px] rounded-t-sm p-2 md:h-[170] md:w-[170]"
            src={product?.image}
            alt={product?.title}
          />
          <div className="absolute bottom-0 right-0 top-0 flex flex-col gap-2">
            <div >
              <CiHeart />
            </div>
            <div >
              <GoEye />
            </div>
          </div>
        </div>
            <div className="rounded-b-sm bg-slate-900 py-2 text-center text-xs cursor-pointer text-slate-50 sm:text-base">
              Add To Cart
            </div>
          </div>
          <h3 className="mb-2 font-mont text-sm font-semibold">
            {product?.title}
          </h3>
          <p className="font-mont font-medium text-red-700">
            ${product?.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductsCardAll;
