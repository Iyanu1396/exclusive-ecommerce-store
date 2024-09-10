import { useOurProducts } from "../features/products/useOurProducts";
import ProductsCarousel from "./ProductsCarousel"
import SectionTitle from "./SectionTitle"
import ViewProductsBtn from "./ViewProductsBtn";


function OurProductsSection() {
  const { products, isLoading } = useOurProducts();
  const rows = 2
  return (
    <section className="">
    <SectionTitle title="Our Products" />
    <h2 className="mt-6 font-inter text-lg font-semibold sm:mb-0">
      Explore Our Products
      </h2>
      <ProductsCarousel products={products} isLoading={isLoading} rows={rows}/>
      <ViewProductsBtn/>
  
  </section>
  )
}

export default OurProductsSection
