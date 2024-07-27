function ButtonCart() {
  return (
    <div className="mt-6 grid grid-cols-2 items-center gap-20 sm:flex sm:justify-between">
      <button className="flex items-center justify-center gap-2 rounded-md border-2 px-2 py-3 font-inter text-stone-950 sm:px-6">
        Return To Shop
      </button>
      <button className="flex items-center justify-center gap-2 rounded-md border-2 px-2 py-3 font-inter text-stone-950 sm:px-6">
        Update Cart
      </button>
    </div>
  );
}

export default ButtonCart;
