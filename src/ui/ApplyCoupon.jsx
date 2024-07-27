function ApplyCoupon() {
  return (
    <>
      <input
        className="rounded-sm border-2 border-slate-900 py-3 pl-3 font-mont font-medium outline-none"
        placeholder="Coupon Code"
        type="email"
        id="email"
      />
      <button className="block rounded-sm bg-red-600 px-6 py-3 font-inter text-slate-50 hover:bg-red-500">
        Apply Coupon
      </button>
    </>
  );
}

export default ApplyCoupon;
