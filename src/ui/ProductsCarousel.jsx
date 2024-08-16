import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { NextArrowBtn, PrevArrowBtn } from "./CarouselButtons";

function ProductsCarousel({ products, isLoading }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) return <p>loading</p>;

  return (
    <div className="App">
      <Slider className="grid grid-cols-1" {...settings}>
        {products?.map((product) => (
          <div key={product.id} className="mt-8 px-2 ">
            <img src={product.images[0]} alt={product.title} />
            <h3 className="text-sm">{product.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductsCarousel;
