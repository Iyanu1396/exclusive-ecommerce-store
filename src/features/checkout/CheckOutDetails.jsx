import ApplyCoupon from '../../ui/ApplyCoupon'

function CheckOutDetails() {
    return (
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
            <p>Shipping:</p>
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
        <ApplyCoupon/>

            <button className="block rounded-sm bg-red-600 px-6 py-3 font-inter text-slate-50">
              Place Order
            </button>
          </div>
        </div>
      </section>
    )
}

export default CheckOutDetails
