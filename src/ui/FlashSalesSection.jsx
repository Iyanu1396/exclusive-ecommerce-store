import { useFlashSales } from "../features/products/useFlashSales";
import ProductsCarousel from "./ProductsCarousel";
import SectionTitle from "./SectionTitle";
import CountdownTimer from "./Timer";

function FlashSalesSection() {
  const targetDate = Date.now() + 3 * 24 * 60 * 60 * 1000;
  const { flashSales, isLoading } = useFlashSales();

  return (
    <section className="mt-14">
      <SectionTitle title="Today's" />
      <div className="j mb-4 mt-6 sm:flex sm:gap-10">
        <h2 className="mb-2 font-inter text-lg font-semibold sm:mb-0">
          Flash Sales
        </h2>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <ProductsCarousel products={flashSales} isLoading={isLoading}/>
      <button className="m-auto mt-6 block rounded-sm bg-red-600 px-6 py-2 font-inter text-slate-50">
        View All Products
      </button>
    </section>
  );
}

export default FlashSalesSection;
