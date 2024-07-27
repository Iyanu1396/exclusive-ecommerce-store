function CartDetails() {
  return (
    <>
      <div className="grid grid-cols-4 items-center rounded-md py-4 text-center shadow-md shadow-slate-200">
        <img className="m-auto block h-[39px] w-[50px]" src="/lcd.png" alt="" />
        <p>$750</p>

        <input
          className="m-auto w-[70px] rounded-md border-2 border-zinc-400 py-2 pr-2 text-center font-mont outline-none"
          type="number"
          name=""
          id=""
        />

        <p>$650</p>
      </div>
      <div className="grid grid-cols-4 items-center rounded-md py-4 text-center shadow-md shadow-slate-200">
        <img className="m-auto block h-[39px] w-[50px]" src="/pad.png" alt="" />
        <p>$750</p>
        <input
          className="m-auto w-[70px] rounded-md border-2 border-zinc-400 py-2 pr-2 text-center outline-none"
          type="number"
          name=""
          id=""
        />
        <p>$650</p>
      </div>
    </>
  );
}

export default CartDetails;
