function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100 pt-12 pb-6 font-inter">
      <div className="m-auto grid w-[80%] grid-cols-2 gap-3">
        <div className="flex flex-col space-y-2">
          <small className="text-lg font-semibold">Exclusive</small>
          <small>Subscribe</small>
          <small>Get 10% off your first order</small>
          <small>Enter your email</small>
        </div>

        <div className="flex flex-col space-y-2">
          <small className="text-base font-semibold">Support</small>
          <small>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</small>
          <small>exclusive@gmail.com</small>
          <small>+88015-88888-9999</small>
        </div>

        <div className="flex flex-col space-y-2">
          <small className="text-base font-semibold">Account</small>
          <small>My Account</small>
          <small>Wishlist</small>
          <small>Shop</small>
        </div>

        <div className="flex flex-col space-y-2">
          <small className="text-base font-semibold">Quick Link</small>
          <small>Privacy Policy</small>
          <small>Terms Of Use</small>
          <small>FAQ</small>
          <small>Contact</small>
        </div>

        <div className="flex flex-col space-y-2">
          <small className="text-base font-semibold">Download App</small>
          <small>Save $3 with App New User Only</small>
          <div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
