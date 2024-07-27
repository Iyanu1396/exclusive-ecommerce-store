import CheckOutDetails from "../features/checkout/CheckOutDetails";
import CheckoutForm from "../features/checkout/CheckoutForm";

function CheckOut() {
  return (
    <section className="pb-[10rem] pt-[13rem]">
      <div className="m-auto w-[80%] grid-cols-2 gap-10 md:grid">
       <CheckoutForm/>

       <CheckOutDetails/>
      </div>
    </section>
  );
}

export default CheckOut;
