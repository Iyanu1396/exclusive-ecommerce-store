import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { NextArrowBtn, PrevArrowBtn } from "./CarouselButtons";
import ProductCard from "./ProductCard";

function ProductsCarousel({ products, isLoading , rows}) {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    rows,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrowBtn />,
    prevArrow: <PrevArrowBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) return <p>loading</p>;


  return (
    <div className="App">
      <Slider {...settings}>
        {products?.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </Slider>
    </div>
  );
}

export default ProductsCarousel;
