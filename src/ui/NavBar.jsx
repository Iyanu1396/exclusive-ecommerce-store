import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Logo from "./Logo";
import TopHeader from "./TopHeader";

function NavBar() {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <div className="fixed w-full bg-slate-50">
      <TopHeader />
      <nav
        className={`border-b-2 pb-3 pt-5 text-center ${!navOpen ? "h-[100vh]" : ""}`}
      >
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
          <ul className="flex flex-col space-y-6 pt-8 font-medium">
            <button className="hover:underline">Home</button>
            <button className="hover:underline">Contact</button>
            <button className="hover:underline">About</button>
            <button className="hover:underline">SignUp</button>
            <SearchBox />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
