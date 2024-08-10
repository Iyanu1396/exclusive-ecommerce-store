import { useFlashSales } from "../features/account/useFlashSales";
import BenefitsSection from "../ui/BenefitsSection";
import BestSellingSection from "../ui/BestSellingSection";
import CategoriesSection from "../ui/CategoriesSection";
import FlashSalesSection from "../ui/FlashSalesSection";
import IphoneBanner from "../ui/IphoneBanner";
import NewArrivalSection from "../ui/NewArrivalSection";
import OurProductsSection from "../ui/OurProductsSection";

function Store() {

  const {flashSales} = useFlashSales()
  console.log(flashSales)
  return (
    <section className="m-auto w-[90%] pb-[7rem] pt-[10rem]">
      <IphoneBanner />
      <FlashSalesSection />
      <CategoriesSection />
      <BestSellingSection />
      <OurProductsSection />
      <NewArrivalSection />
      <BenefitsSection />
    </section>
  );
}

export default Store;
