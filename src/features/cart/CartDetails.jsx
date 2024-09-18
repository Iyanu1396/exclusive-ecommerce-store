import { useSelector } from "react-redux";

function CartDetails() {
  const cart = useSelector((state) => state.products.cart);
  return (
    <>
      {cart.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-4 items-center rounded-md py-4 text-center shadow-md shadow-slate-200"
        >
          <img
            className="m-auto block h-[39px] w-[50px]"
            src={product.img}
            alt=""
          />
          <p>${product.price}</p>

          <input
            className="m-auto w-[70px] rounded-md border-2 border-zinc-400 py-2 pr-2 text-center font-mont outline-none"
            type="number"
            name=""
            id=""
          />

          <p>${product.price * product.quantity}</p>
        </div>
      ))}
    </>
  );
}

export default CartDetails;
