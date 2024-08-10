import ProductsCarousel from "./ProductsCarousel"
import SectionTitle from "./SectionTitle"

function OurProductsSection() {
  return (
    <section className="mt-14">
    <SectionTitle title="Our Products" />
    <h2 className="mt-6 font-inter text-lg font-semibold sm:mb-0">
      Explore Our Products
      </h2>
      <ProductsCarousel/>
  
  </section>
  )
}

export default OurProductsSection
