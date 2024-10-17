import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useSignUp } from "../features/authentication/useSignup";

function SignUpForm() {
  const { signUp, isLoading } = useSignUp();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data, { onSettled: () => reset() });
  };

  return (
    <section className="mb-20 pt-[12rem] font-mont">
      <div className="m-auto w-[80%] items-center gap-20 md:m-0 md:flex">
        <div>
          <img className="mb-6" src="/img-login.png" alt="" />
        </div>

        <div className="lg:w-[60%]">
          <div className="space-y-2 pb-6 font-inter text-stone-950">
            <h1 className="text-2xl font-semibold">Create an account</h1>
            <p className="text-sm font-medium">Enter your details below</p>
          </div>
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                className="border-b-[1px] border-gray-400 font-mont outline-none"
                type="text"
                placeholder="Name"
                {...register("fullName", { required: "Full name is required" })}
                disabled={isLoading}
              />
              {errors.fullName && (
                <p className="mt-4 text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <input
                className="border-b-[1px] border-gray-400 font-mont outline-none"
                type="text"
                placeholder="Email or PhoneNumber"
                {...register("email", { required: "Email is required" })}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="mt-4 text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                className="border-b-[1px] border-gray-400 font-mont outline-none"
                type="password"
                placeholder="Password"
                {...register("password", { 
                  required: "Password is required", 
                  minLength: { value: 7, message: "Password must be at least 7 characters" } 
                })}
                disabled={isLoading}
              />
              {errors.password && (
                <p className="mt-4 text-red-500">{errors.password.message}</p>
              )}
            </div>

            <button className="rounded-sm bg-red-600 px-6 py-2 font-inter text-slate-50">
              Create Account
            </button>
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
