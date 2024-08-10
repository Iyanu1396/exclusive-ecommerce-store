import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { NextArrowBtn, PrevArrowBtn } from "./CarouselButtons";

const products = [
  { id: 1, name: "Product 1", image: "image1.jpg" },
  { id: 2, name: "Product 2", image: "image2.jpg" },
  { id: 3, name: "Product 3", image: "image3.jpg" },
];

function ProductsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrowBtn/>,
    prevArrow: <PrevArrowBtn/>,
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product mt-8">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}



export default ProductsCarousel;
