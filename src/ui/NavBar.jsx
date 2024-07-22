import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import Logo from "./Logo";
import TopHeader from "./TopHeader";

function NavBar() {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <div className="fixed w-full border-b-2 bg-slate-50">
      <TopHeader />

      <div className="m-auto w-[80%] md:w-[95%]">
        <nav
          className={`pb-3 pt-5 text-center ${!navOpen ? "h-[100vh]" : ""} md:flex md:h-full md:items-center md:justify-around`}
        >
          <div className="flex justify-between">
            <Logo />
            <button
              className="text-3xl md:hidden"
              onClick={() => setNavOpen((isOpen) => !isOpen)}
            >
              {navOpen ? <HiMenu /> : <IoCloseSharp />}
            </button>
          </div>

          <div className={`${navOpen ? "hidden" : ""} font-inter md:block`}>
            <ul className="flex flex-col items-center justify-center space-y-6 pt-8 font-medium md:flex-row md:space-x-4 md:space-y-0 md:pt-0">
            <Link to='/'> <button className="hover:underline"> Home </button></Link>
             <Link to='/contact'> <button className="hover:underline">Contact</button></Link>
             <Link to='about'><button className="hover:underline">About</button></Link> 
            <Link to='/sign-up'><button className="hover:underline">SignUp</button></Link>  
            </ul>
          </div>
          <div className={`${navOpen ? "hidden" : ""} md:flex mt-4 md:mt-0`}>
            <SearchBox />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
