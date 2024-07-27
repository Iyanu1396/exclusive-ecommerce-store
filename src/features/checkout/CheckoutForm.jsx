function CheckoutForm() {
    return (
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
    )
}

export default CheckoutForm
