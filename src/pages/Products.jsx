import { useGetAllProducts } from "../features/products/useGetAllProducts";
import ProductsCardAll from "../ui/ProductsCardAll";

function Products() {
  const { isLoading, products } = useGetAllProducts();

  return (
    <section className="m-auto w-[90%] pb-[7rem] pt-[10rem] font-inter grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {
        products?.map(product=> <ProductsCardAll key={product.id} product={product} isLoading={isLoading} />)
      }
      
    </section>
  );
}

export default Products;
