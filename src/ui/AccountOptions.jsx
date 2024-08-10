import { useState } from "react";
import { Link } from "react-router-dom";

function AccountOptions() {
  const [activeLink, setActiveLink] = useState("profile");
  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="flex flex-col items-start">
    <h3 className="font-medium mb-3">Manage My Account</h3>
    <div className="cursor-pointer text-sm text-zinc-500 space-y-1">
      <p
        className={`hover:underline ${activeLink === "profile" ? "text-red-600" : ""}`}
        onClick={() => handleClick("profile")}
      >
        My Profile
      </p>
      <p className="hover:underline">Address Book</p>
      <p className="hover:underline">My Payment Options</p>
    </div>
    <h3 className="font-medium my-3">My Orders</h3>
    <div className="cursor-pointer text-sm text-zinc-500 space-y-1">
      <p className="hover:underline">My Returns</p>
      <p className="hover:underline">My Cancellations</p>
    </div>
    <Link to="/wishlist">
      <h3 className="font-medium mt-3 ">My WishList</h3>
    </Link>
  </div>
  )
}

export default AccountOptions
