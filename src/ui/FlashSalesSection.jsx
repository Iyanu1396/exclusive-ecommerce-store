import { useFlashSales } from "../features/products/useFlashSales";
import ProductsCarousel from "./ProductsCarousel";
import SectionTitle from "./SectionTitle";
import CountdownTimer from "./Timer";
import ViewProductsBtn from "./ViewProductsBtn";

function FlashSalesSection() {
  const targetDate = Date.now() + 3 * 24 * 60 * 60 * 1000;
  const { flashSales, isLoading } = useFlashSales();
  const rows = 1

  return (
    <section className="mt-14">
      <SectionTitle title="Today's" />
      <div className="j mb-4 mt-6 sm:flex sm:gap-10">
        <h2 className="mb-2 font-inter text-lg font-semibold sm:mb-0">
          Flash Sales
        </h2>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <ProductsCarousel products={flashSales} isLoading={isLoading} rows={rows}/>
   <ViewProductsBtn/>
    </section>
  );
}

export default FlashSalesSection;
