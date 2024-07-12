import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Logo from "./Logo";
import TopHeader from './TopHeader'

function NavBar() {
  const [navOpen, setNavOpen] = useState(true);
  return ( 
    <>
  
  <TopHeader/>
    <nav className="border-b-2 pb-3 pt-5 text-center">
     
      <div className="m-auto flex w-[80%] justify-between">
        <Logo />
        <button
          className="text-3xl"
          onClick={() => setNavOpen((isOpen) => !isOpen)}
        >
          {navOpen ? <HiMenu /> : <IoCloseSharp />}
        </button>
      </div>

      <div className={`${navOpen ? "hidden" : ""} font-inter`}>
        <ul className="flex flex-col space-y-3 py-4 font-medium">
          <button className="hover:underline">Home</button>
          <button className="hover:underline">Contact</button>
          <button className="hover:underline">About</button>
          <button className="hover:underline">SignUp</button>
        </ul>
        <SearchBox />
      </div>
    </nav>
    </>
  );
}

export default NavBar;
