function CheckOut() {
  return (
    <section className="pb-[10rem] pt-[13rem]">
      <div className="m-auto w-[80%] grid-cols-2 gap-10 md:grid">
        <form>
          <h1 className="font-inter text-2xl font-medium"> Billing Details</h1>

          <div className="mt-6 flex flex-col gap-2">
            <label className="font-inter text-zinc-400" htmlFor="firstName">
              First Name
            </label>
            <input
              className="bg-[#F5F5F5] py-1 pl-2 font-mont font-medium outline-none"
              type="text"
              id="firstName"
            />
            <label className="font-inter text-zinc-400" htmlFor="companyName">
              Company Name
            </label>
            <input
              className="bg-[#F5F5F5] py-1 pl-2 font-mont font-medium outline-none"
              type="text"
              id="companyName"
            />
            <label className="font-inter text-zinc-400" htmlFor="streetAddress">
              Street Address
            </label>
            <input
              className="bg-[#F5F5F5] py-1 pl-2 font-mont font-medium outline-none"
              type="text"
              id="streetAddress"
            />
            <label className="font-inter text-zinc-400" htmlFor="apartment">
              Apartment, floor, etc. (optional)
            </label>
            <input
              className="bg-[#F5F5F5] py-1 pl-2 font-mont font-medium outline-none"
              type="text"
              id="apartment"
            />
            <label className="font-inter text-zinc-400" htmlFor="townCity">
              Town/City
            </label>
            <input
              className="bg-[#F5F5F5] py-1 pl-2 font-mont font-medium outline-none"
              type="text"
              id="townCity"
            />
            <label className="font-inter text-zinc-400" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="bg-[#F5F5F5] py-1 pl-2 font-mont font-medium outline-none"
              type="text"
              id="phone"
            />
            <label className="font-inter text-zinc-400" htmlFor="email">
              Email Address
            </label>
            <input
              className="bg-[#F5F5F5] py-1 pl-2 font-mont font-medium outline-none"
              type="email"
              id="email"
            />
            <div>
              <input
                className="accent-red-600"
                type="checkbox"
                name="remember"
                id=""
              />
              <label
                className="pl-2 font-mont text-sm font-medium"
                htmlFor="remember"
              >
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
        </form>

        <section className="mt-8 font-inter">
          <div className="mb-4 space-y-8">
            <div className="grid grid-cols-2 items-center justify-items-center">
              <span className="flex items-center gap-4">
                <img src="/pad.png" alt="" />
                <p>LCD Monitor</p>
              </span>

              <p>$650</p>
            </div>
            <div className="grid grid-cols-2 items-center justify-items-center">
              <span className="flex items-center gap-4">
                <img src="/lcd.png" alt="" />
                <p>H1 Gamepad</p>
              </span>

              <p>$1100</p>
            </div>
          </div>

          <div className="space-y-4 py-4">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <div className="my-4 border-b-2"></div>
            <div className="flex justify-between">
              <p>Shipping::</p>
              <p>free</p>
            </div>
            <div className="my-4 border-b-2"></div>
            <div className="flex justify-between">
              <p>Total:</p>
              <p>$1750</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="space-x-1">
                <input
                  type="radio"
                  name="bank"
                  id="bank"
                  className="accent-slate-900"
                />
                <label htmlFor="bank">Bank</label>
              </div>

              <div className="flex space-x-1">
                <img src="/visacardLogo.svg" alt="" />
                <img src="/mastercardLogo.svg" alt="" />
              </div>
            </div>
            <div className="space-x-1">
              <input
                type="radio"
                name="cash"
                className="accent-slate-900"
                id="cash"
              />
              <label htmlFor="cash">Cash on delivery</label>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                className="rounded-sm border-2 border-slate-900 py-1.5 pl-3 font-mont font-medium outline-none"
                placeholder="Coupon Code"
                type="email"
                id="email"
              />
              <button className="block rounded-sm bg-red-600 px-6 py-3 font-inter text-slate-50">
                Apply Coupon
              </button>

              <button className="block rounded-sm bg-red-600 px-6 py-3 font-inter text-slate-50">
                Place Order
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default CheckOut;
