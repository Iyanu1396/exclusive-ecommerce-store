import Slider from "react-slick";
import { NextArrowBtn, PrevArrowBtn } from "./CarouselButtons";
import {
  IoCameraReverseOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { FiHeadphones, FiMonitor } from "react-icons/fi";
import { BsSmartwatch } from "react-icons/bs";
import { VscGame } from "react-icons/vsc";

function CategoriesCarousel() {
  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-center font-inter text-sm xl:text-base">
      <div className= " py-6 hover:bg-red-600 hover:text-slate-50 border-2  ">
        <div className="flex justify-center text-xl mb-3">
          <IoPhonePortraitOutline />
        </div>

        <span>Phones</span>
      </div>
      <div className= " py-6 hover:bg-red-600 hover:text-slate-50 border-2">
        <div className="flex justify-center text-xl mb-3">
          <FiMonitor />
        </div>
        <span>Computers</span>
      </div>
      <div className= " py-6 hover:bg-red-600 hover:text-slate-50 border-2">
        <div className="flex justify-center text-xl mb-3">
          <BsSmartwatch />
        </div>
        <span>SmartWatch</span>
      </div>
      <div className= " py-6 hover:bg-red-600 hover:text-slate-50 border-2">
        <div className="flex justify-center text-xl mb-3">
          <IoCameraReverseOutline />
        </div>
        <span>Camera</span>
      </div>
      <div className= " py-6 hover:bg-red-600 hover:text-slate-50 border-2">
        <div className="flex justify-center text-xl mb-3">
          <FiHeadphones />
        </div>
        <span>HeadPhones</span>
      </div>
      <div className= " py-6 hover:bg-red-600 hover:text-slate-50 border-2">
        <div className="flex justify-center text-xl mb-3">
          <VscGame />
        </div>
        <span>Gaming</span>
      </div>
    </div>
  );
}

export default CategoriesCarousel;
