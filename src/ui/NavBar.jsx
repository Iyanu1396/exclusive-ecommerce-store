import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import Logo from "./Logo";
import TopHeader from "./TopHeader";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

function NavBar() {
  const [navOpen, setNavOpen] = useState(true);
  const handleNavState = () => setNavOpen((isOpen) => !isOpen);
  const cart = useSelector((state) => state.products.cart);

  return (
    <div className="fixed z-50 w-full border-b-2 bg-slate-50">
      <TopHeader />

      <div className="m-auto w-[80%] md:w-[95%]">
        <nav
          className={`pb-3 pt-5 text-center ${
            !navOpen ? "h-[100vh]" : ""
          } md:flex md:h-full md:items-center md:justify-around`}
        >
          <div className="flex justify-between">
            <Logo />
            <button className="text-3xl md:hidden" onClick={handleNavState}>
              {navOpen ? <HiMenu /> : <IoCloseSharp />}
            </button>
          </div>

          <div className={`${navOpen ? "hidden" : ""} font-inter md:block`}>
            <ul className="flex flex-col items-center justify-center space-y-6 pt-8 text-sm font-medium md:flex-row md:space-x-2 md:space-y-0 md:pt-0 lg:space-x-4 lg:text-base">
              <Link to="/">
                <button onClick={handleNavState} className="hover:underline">
                  Home
                </button>
              </Link>
              <Link to="/contact">
                <button onClick={handleNavState} className="hover:underline">
                  Contact
                </button>
              </Link>
              <Link to="about">
                <button onClick={handleNavState} className="hover:underline">
                  About
                </button>
              </Link>
              <Link to="/signup">
                <button onClick={handleNavState} className="hover:underline">
                  SignUp
                </button>
              </Link>
            </ul>
          </div>
          <div className={`${navOpen ? "hidden" : ""} mt-4 md:mt-0 md:flex`}>
            <SearchBox />
            <div className="mt-4 flex flex-col items-center gap-4 text-xl md:mt-0 md:flex-row md:pl-2">
              <div>
                <FaRegHeart />
              </div>

              <div className="relative">
                <Link to="/cart">
                  <MdOutlineShoppingCart
                    onClick={handleNavState}
                    className="text-2xl"
                  />
                  {/* Cart item count */}
                  <div className="absolute -right-2 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-600 font-inter text-xs font-bold text-slate-50">
                    {cart.length}
                  </div>
                </Link>
              </div>

              <Link to="/account">
                <FiUser onClick={handleNavState} />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
