import ApplyCoupon from "../../ui/ApplyCoupon";
import { useSelector } from "react-redux";

function CheckOutDetails() {
  const shipping = 0;
  const cart = useSelector((state) => state?.products?.cart);
  const subtotal = cart
    ?.reduce((acc, curr) => acc + curr?.price * curr?.quantity, 0)
    .toFixed(2);
  const total = subtotal + shipping;

  return (
    <section className="mt-8 font-inter">
      <div className="mb-4 space-y-8">
        {cart?.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-2 items-center justify-items-center"
          >
            <span className="flex items-center gap-4">
              <img src={item.img} width={48} height={48} alt={item.title} />
              <p>{item.title}</p>
            </span>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4 py-4">
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>${subtotal}</p>
        </div>
        <div className="my-4 border-b-2"></div>
        <div className="flex justify-between">
          <p>Shipping:</p>
          <p>{shipping === 0 ? "free" : `$${shipping}`}</p>
        </div>
        <div className="my-4 border-b-2"></div>
        <div className="flex justify-between">
          <p>Total:</p>
          <p>${total}</p>
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
          <ApplyCoupon />

          <button className="block rounded-sm bg-red-600 px-6 py-3 font-inter text-slate-50">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default CheckOutDetails;
