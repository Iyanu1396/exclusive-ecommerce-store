import { useState } from "react";
import { useLogin } from "../features/authentication/useLogin";

function LoginForm() {
  const [email, setEmail] = useState("fakeuser@gmail.com");
  const [password, setPassword] = useState("iyanzy");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault()
    if(!email || !password) return
    
    
    login({email , password} , {
      onSettled:()=>{
        setEmail('')
        setPassword('')
      }
    })
    
      }

  return (
    <section className="mb-20 pt-[12rem]">
      <div className="m-auto w-[80%] items-center gap-20 md:m-0 md:flex">
        <div>
          <img className="mb-6" src="/img-login.png" alt="" />
        </div>

        <div className="lg:w-[60%]">
          <div className="space-y-2 pb-6 font-inter text-stone-950">
            <h1 className="text-2xl font-semibold">Login in to Exclusive</h1>
            <p className="text-sm font-medium">Enter your details below</p>
          </div>

          <form className="flex flex-col space-y-7" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              autoComplete="username"
              value={email}
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-[1px] border-gray-400 font-mont outline-none"
              placeholder="Email or Phone Number"
            />
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-[1px] border-gray-400 font-mont outline-none"
              placeholder="Password"
            />
            <div className="flex justify-between font-inter">
              <button className="rounded-sm bg-red-600 px-6 py-2 font-inter text-slate-50">
                Login
              </button>
              <button className="font-inter text-red-600" disabled={isLoading}>
                Forget Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
