import Slider from "react-slick";
import { NextArrowBtn, PrevArrowBtn } from "./CarouselButtons";

function CategoriesCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrowBtn />,
    prevArrow: <PrevArrowBtn />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <span>Phones</span>
        </div>
        <div>
          <span>Computers</span>
        </div>
        <div>
          <span>SmartWatch</span>
        </div>
        <div>
          <span>Camera</span>
        </div>
        <div>
          <span>HeadPhones</span>
        </div>
        <div>
          <span>Gaming</span>
        </div>
      </Slider>
    </div>
  );
}

export default CategoriesCarousel;
