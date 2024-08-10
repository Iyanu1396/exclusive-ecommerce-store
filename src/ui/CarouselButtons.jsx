import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const NextArrowBtn = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-0 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F5F5F5]"
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
};

export const PrevArrowBtn = (props) => {
  const { onClick } = props;
  return (
    <div className="mr-12 flex justify-end" onClick={onClick}>
      <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F5F5F5]">
        <BsArrowLeft />
      </span>
    </div>
  );
};