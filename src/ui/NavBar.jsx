import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

function NavBar() {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <nav className="border-b-2 pb-3 pt-5 text-center">
      <div className="m-auto flex w-[80%] justify-between">
        <h1 className="text-3xl font-bold">Exclusive</h1>
        <button
          className="text-3xl"
          onClick={() => setNavOpen((isOpen) => !isOpen)}
        >
          {navOpen ? <HiMenu /> : <IoCloseSharp />}
        </button>
      </div>

      <div className={`${navOpen ? "hidden" : ""}`}>
        <ul className="space-y-2 font-medium">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>SignUp</li>
        </ul>
        <div className="m-auto flex w-[50%] items-center justify-center bg-[#F5F5F5]">
          <input
            className="bg-[#F5F5F5] outline-none"
            placeholder="What are you looking for?"
            type="text"
          />
          <FaSearch />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
