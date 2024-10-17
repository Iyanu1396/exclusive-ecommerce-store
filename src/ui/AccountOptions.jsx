import { useState } from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { BiLogOut } from "react-icons/bi";

function AccountOptions() {
  const [activeLink, setActiveLink] = useState("profile");
  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="flex flex-col items-start font-inter font-medium">
      <h3 className="mb-4 font-medium text-lg md:text-xl text-gray-800">Manage My Account</h3>
      <div className="cursor-pointer space-y-2 text-sm text-zinc-600">
        <p
          className={`hover:underline ${activeLink === "profile" ? "text-red-600 font-semibold" : "hover:text-red-500"} text-sm md:text-base`}
          onClick={() => handleClick("profile")}
        >
          My Profile
        </p>
        <p className="hover:underline hover:text-red-500 text-sm md:text-base">Address Book</p>
        <p className="hover:underline hover:text-red-500 text-sm md:text-base">My Payment Options</p>
      </div>
      <h3 className="my-4 font-medium text-lg md:text-xl text-gray-800">My Orders</h3>
      <div className="cursor-pointer space-y-2 text-sm text-zinc-600">
        <p className="hover:underline hover:text-red-500 text-sm md:text-base">My Returns</p>
        <p className="hover:underline hover:text-red-500 text-sm md:text-base">My Cancellations</p>
      </div>
      <Link to="/wishlist">
        <h3 className="mt-4 font-medium text-lg md:text-xl text-gray-800">My WishList</h3>
      </Link>
      <div className="mt-4 font-medium flex items-center gap-2">
        <BiLogOut className="text-red-600" /> <LogoutBtn />
      </div>
     
    </div>
  );
}

export default AccountOptions;
