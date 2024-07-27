import CartDetails from "../features/cart/CartDetails";
import CartTotal from "../features/cart/CartTotal";
import ApplyCoupon from "../ui/ApplyCoupon";
import ButtonCart from "../ui/ButtonCart";
import CartHeader from "../ui/CartHeader";

function Cart() {
  return (
    <section className="pb-[8rem] pt-[13rem] font-inter text-sm sm:text-base md:text-lg">
      <div className="m-auto w-[90%]">
        <div className="space-y-10">
          <CartHeader />
          <CartDetails />
        </div>

        <ButtonCart />

        <div className="mt-16 grid-cols-2 sm:grid">
          <div className="space-y-3 lg:flex lg:items-start lg:gap-3 lg:space-y-0">
            <ApplyCoupon />
          </div>
          <CartTotal />
        </div>
      </div>
    </section>
  );
}

export default Cart;
