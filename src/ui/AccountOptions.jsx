import { useState } from "react";
import { Link } from "react-router-dom";

function AccountOptions() {
  const [activeLink, setActiveLink] = useState("profile");
  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="flex flex-col items-start">
      <h3 className="mb-3 font-medium">Manage My Account</h3>
      <div className="cursor-pointer space-y-1 text-sm text-zinc-500">
        <p
          className={`hover:underline ${activeLink === "profile" ? "text-red-600" : ""}`}
          onClick={() => handleClick("profile")}
        >
          My Profile
        </p>
        <p className="hover:underline">Address Book</p>
        <p className="hover:underline">My Payment Options</p>
      </div>
      <h3 className="my-3 font-medium">My Orders</h3>
      <div className="cursor-pointer space-y-1 text-sm text-zinc-500">
        <p className="hover:underline">My Returns</p>
        <p className="hover:underline">My Cancellations</p>
      </div>
      <Link to="/wishlist">
        <h3 className="mt-3 font-medium">My WishList</h3>
      </Link>
    </div>
  );
}

export default AccountOptions;
