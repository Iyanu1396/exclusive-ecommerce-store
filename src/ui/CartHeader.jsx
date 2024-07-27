function CartHeader() {
  return (
    <div className="grid grid-cols-4 items-center justify-items-center rounded-md py-4 shadow-md shadow-slate-200">
      <header>Product</header>
      <header>Price</header>
      <header>Quantity</header>
      <header>Subtotal</header>
    </div>
  );
}

export default CartHeader;
