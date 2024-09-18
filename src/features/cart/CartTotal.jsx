import { Link } from "react-router-dom";

function CartTotal() {
  return (
    <section className="mt-4 border-2 border-slate-900 sm:mt-0">
      <div className="m-auto my-8 w-[95%]">
        <p className="mb-4 text-base font-medium sm:text-lg lg:text-xl">
          Cart Total
        </p>
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>$1750</p>
        </div>
        <div className="my-4 border-b-2 border-zinc-400"></div>
        <div className="flex justify-between">
          <p>Shipping:</p>
          <p>free</p>
        </div>
        <div className="my-4 border-b-2 border-zinc-400"></div>
        <div className="flex justify-between">
          <p>Total:</p>
          <p>$1750</p>
        </div>
        <button className="m-auto mt-4 block rounded-sm bg-red-600 px-6 py-3 font-inter text-slate-50 hover:bg-red-500">
          <Link to="/checkout"> Procees to checkout</Link>
        </button>
      </div>
    </section>
  );
}

export default CartTotal;
