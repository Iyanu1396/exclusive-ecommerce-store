import { useBestSelling } from "../features/products/useBestSellingProducts";
import ProductsCarousel from "./ProductsCarousel";
import SectionTitle from "./SectionTitle";

function BestSellingSection() {
  const { flashSales, isLoading } = useBestSelling();
  return (
    <section className="mt-14">
      <SectionTitle title="This Month" />
      <h2 className="mt-6 font-inter text-lg font-semibold sm:mb-0">
        Best Selling Products
      </h2>
      <ProductsCarousel products={flashSales} isLoading={isLoading}/>
    </section>
  );
}

export default BestSellingSection;
