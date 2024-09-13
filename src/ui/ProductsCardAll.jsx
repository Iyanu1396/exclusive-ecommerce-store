function ProductsCardAll({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products?.map((product) => (
        <div key={product.id} className="mt-8 px-2 pb-4 font-inter">
          <div>
            <img
              className="m-auto block h-[120px] w-[120px] rounded-t-sm sm:h-[150px] sm:w-[150px] md:h-[1] md:w-[1]"
              src={product?.image}
              alt={product?.title}
            />
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
