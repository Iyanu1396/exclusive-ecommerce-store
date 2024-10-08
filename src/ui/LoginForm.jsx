function LoginForm() {
  return (
    <section className="pt-[12rem] mb-20">
      <div className="m-auto w-[80%] md:m-0 md:flex items-center gap-20">
        <div>
           <img className="mb-6" src="/img-login.png" alt="" />
        </div>
       

        <div className="lg:w-[60%]">
            <div className="space-y-2 pb-6 font-inter text-stone-950">
          <h1 className="text-2xl font-semibold">Login in to Exclusive</h1>
          <p className="text-sm font-medium">Enter your details below</p>
        </div>

        <form className="flex flex-col space-y-7">
          <input
            className="border-b-[1px] border-gray-400 font-mont outline-none"
            type="text"
            placeholder="Email or Phone Number"
          />
          <input
            className="border-b-[1px] border-gray-400 font-mont outline-none"
            type="text"
            placeholder="Password"
          />
          <div className="flex justify-between font-inter">
            <button className="font-inter rounded-sm bg-red-600 px-6 py-2 text-slate-50">
              Login
            </button>
            <button className="text-red-600 font-inter">Forget Password</button>
          </div>
        </form>
        </div>
      
      </div>
    </section>
  );
}

export default LoginForm;
