import { useGetAllProducts } from "../features/products/useGetAllProducts";
import ProductsCardAll from "../ui/ProductsCardAll";

function Products() {
  const { isLoading, products } = useGetAllProducts();

  return (
    <section className="m-auto w-[90%] pb-[7rem] pt-[10rem] font-inter">
      <ProductsCardAll products={products} />
    </section>
  );
}

export default Products;
