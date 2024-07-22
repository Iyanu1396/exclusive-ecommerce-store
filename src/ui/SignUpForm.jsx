import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <section className="mb-20 pt-[12rem]">
      <div className="m-auto w-[80%] items-center gap-20 md:m-0 md:flex">
        <div>
          <img className="mb-6" src="/img-login.png" alt="" />
        </div>

        <div className="lg:w-[60%]">
          <div className="space-y-2 pb-6 font-inter text-stone-950">
            <h1 className="text-2xl font-semibold">Create an account</h1>
            <p className="text-sm font-medium">Enter your details below</p>
          </div>
          <form className="flex flex-col space-y-7">
            <input
              className="border-b-[1px] border-gray-400 font-mont outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-b-[1px] border-gray-400 font-mont outline-none"
              type="text"
              placeholder="Email or PhoneNumber"
            />
            <input
              className="border-b-[1px] border-gray-400 font-mont outline-none"
              type="text"
              placeholder="Password"
            />
            <button className="rounded-sm bg-red-600 px-6 py-2 font-inter text-slate-50">
              Create Account
            </button>{" "}
            <button className="mb-6 mt-4 flex w-full items-center justify-center gap-2 border-2 px-6 py-2 font-inter text-stone-950">
              <img className="w-4" src="/Icon-Google.svg" alt="" /> Sign up with
              Google
            </button>
            <p className="text-center font-inter text-stone-950">
              Already have account?{" "}
              <button className="underline">
                <Link to="/login">Log in</Link>
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;
