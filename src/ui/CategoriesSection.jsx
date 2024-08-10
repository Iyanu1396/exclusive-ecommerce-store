import CategoriesCarousel from "./CategoriesCarousel"
import SectionTitle from "./SectionTitle"

function CategoriesSection() {
  return (
    <section className="mt-14">
      <SectionTitle title="Categories" />
      <h2 className="mt-6 font-inter text-lg font-semibold sm:mb-0">
         Browse By Categories
        </h2>
        <CategoriesCarousel/>
    
    </section>
  )
}

export default CategoriesSection
