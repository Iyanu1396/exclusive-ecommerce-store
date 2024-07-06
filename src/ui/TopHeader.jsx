function TopHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-slate-950 py-5 text-center text-slate-200">
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="ml-2 font-bold underline">ShopNow</span>
      </p>
      <select className="bg-slate-950 outline-none" name="language">
        <option value="english">English</option>
      </select>
    </div>
  );
}

export default TopHeader;
