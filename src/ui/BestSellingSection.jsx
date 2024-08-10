import ProductsCarousel from "./ProductsCarousel"
import SectionTitle from "./SectionTitle"

function BestSellingSection() {
  return (
    <section className="mt-14">
    <SectionTitle title="This Month" />
    <h2 className="mt-6 font-inter text-lg font-semibold sm:mb-0">
      Best Selling Products
      </h2>
      <ProductsCarousel/>
  
  </section>
  )
}

export default BestSellingSection
