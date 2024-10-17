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
    <div className="fixed z-50 w-full border-b-2 bg-white shadow-md">
      <TopHeader />

      <div className="m-auto w-[80%] md:w-[95%]">
        <nav
          className={`pb-3 pt-5 text-center ${
            !navOpen ? "h-[100vh]" : ""
          } md:flex md:h-full md:items-center md:justify-around`}
        >
          <div className="flex justify-between items-center">
            <Logo />
            <button className="text-3xl md:hidden  relative" onClick={handleNavState}>
              {navOpen ? <HiMenu /> : <IoCloseSharp />}
              {!navOpen ? null : (
                <div className="absolute -right-2 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-600 font-inter text-xs font-bold text-white">
                  {cart.length}
                </div>
              )}
            </button>
          </div>

          <div className={`${navOpen ? "hidden" : ""} font-inter md:block`}>
            <ul className="flex flex-col items-center justify-center space-y-6 pt-8 text-sm font-medium md:flex-row md:space-x-4 md:space-y-0 md:pt-0 lg:text-base">
              <Link to="/">
                <button onClick={handleNavState} className="hover:underline hover:text-blue-500 transition duration-300">
                  Home
                </button>
              </Link>
              <Link to="/contact">
                <button onClick={handleNavState} className="hover:underline hover:text-blue-500 transition duration-300">
                  Contact
                </button>
              </Link>
              <Link to="/about">
                <button onClick={handleNavState} className="hover:underline hover:text-blue-500 transition duration-300">
                  About
                </button>
              </Link>
              <Link to="/signup">
                <button onClick={handleNavState} className="hover:underline hover:text-blue-500 transition duration-300">
                  SignUp
                </button>
              </Link>
            </ul>
          </div>
          <div className={`${navOpen ? "hidden" : ""} mt-4 md:mt-0 md:flex`}>
            <SearchBox />
            <div className="mt-4 flex flex-col items-center gap-4 text-xl md:mt-0 md:flex-row md:pl-2">
              <div onClick={handleNavState}>
                <FaRegHeart />
              </div>

              <div className="relative" onClick={handleNavState}>
                <Link to="/cart">
                  <MdOutlineShoppingCart
                    className="text-2xl"
                  />
                  <div className="absolute -right-2 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-600 font-inter text-xs font-bold text-slate-50">
                    {cart.length}
                  </div>
                </Link>
              </div>

              <div 
                className="relative" 
                onClick={handleNavState}
               
                
              >
                <Link to="/account">
                  <FiUser />
                </Link>
           
              
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
