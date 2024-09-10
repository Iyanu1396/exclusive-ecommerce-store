import { useBestSelling } from "../features/products/useBestSellingProducts";
import ProductsCarousel from "./ProductsCarousel";
import SectionTitle from "./SectionTitle";

function BestSellingSection() {
  const { bestSelling, isLoading } = useBestSelling();
  const rows = 1
  return (
    <section className="mt-14">
      <SectionTitle title="This Month" />
      <h2 className="mt-6 font-inter text-lg font-semibold sm:mb-0">
        Best Selling Products
      </h2>
      <ProductsCarousel products={bestSelling} isLoading={isLoading} rows={rows}/>
    </section>
  );
}

export default BestSellingSection;
