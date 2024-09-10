function ProductCard({ product }) {
  return (
    <div className="mt-8 pb-4 px-2 font-inter">
      <div>
        <img
          className=" m-auto block h-[120px] w-[120px] rounded-t-sm sm:h-[150px] sm:w-[150px] md:h-[1] md:w-[1]"
          src={product.image}
          alt={product.title}
        />
        <div className="rounded-b-sm bg-slate-900 py-2 text-center text-xs text-slate-50 sm:text-base">
          Add To Cart
        </div>
      </div>
      <h3 className="font-mont mb-2 text-sm font-semibold">{product.title}</h3>
      <p className="font-mont font-medium text-red-700">${product.price}</p>
    </div>
  );
}

export default ProductCard;
