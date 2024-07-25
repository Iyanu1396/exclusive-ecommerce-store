import { AiOutlineSend } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="mt-auto bg-slate-950 pb-6 pt-12 font-inter text-[13px] text-slate-100 sm:text-sm md:text-base">
      <div className="m-auto grid w-[80%] grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div className="flex flex-col space-y-2">
          <small className="text-lg font-semibold font-eczar">Exclusive</small>
          <small>Subscribe</small>
          <small>Get 10% off your first order</small>
          <small className="flex w-[120px] items-center rounded-sm border-2">
            <input
              className="h-8 w-[100px] bg-slate-950 pl-2 font-mont outline-none placeholder:text-[10px] placeholder:font-medium"
              placeholder="Enter your email"
              type="text"
            />
            <button>
              <AiOutlineSend className="text-slate-100" />
            </button>
          </small>
        </div>

        <div className="flex flex-col space-y-2">
          <small className="text-base font-semibold">Support</small>
          <small className="lg:w-[80%]">
            111 Bijoy sarani, Dhaka, DH 1515, <span>Bangladesh.</span>{" "}
          </small>
          <small>exclusive@gmail.com</small>
          <small>+88015-88888-9999</small>
        </div>

        <div className="flex flex-col space-y-2">
          <small className="text-base font-semibold">Account</small>
          <small>My Account</small>
          <small>Wishlist</small>
          <small>Shop</small>
        </div>

        <div className="flex flex-col space-y-2">
          <small className="text-base font-semibold">Quick Link</small>
          <small>Privacy Policy</small>
          <small>Terms Of Use</small>
          <small>FAQ</small>
          <small>Contact</small>
        </div>

        <div className="flex flex-col space-y-2">
          <small className="text-base font-semibold">Download App</small>
          <small>Save $3 with App New User Only</small>
          <img src="/qrcode.svg" alt="" />
          <div>
            <div className="mt-2 flex gap-2">
              <FaFacebookF />
              <RiTwitterLine />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
