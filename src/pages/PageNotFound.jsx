import { useNavigate } from "react-router-dom";

function PageNotFound() { 
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center overflow-hidden pb-[10rem] pt-[13rem] text-center text-slate-950">
      <div className="w-[80%]">
        <h1 className="font-inter text-6xl font-semibold">404 Not Found</h1>
        <p className="mt-6 font-mont font-medium">
          Your visited page not found. You may go home page.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-12 rounded-sm bg-red-600 px-6 py-2 font-inter text-slate-50"
        >
          Back to home page
        </button>
      </div>
    </section>
  );
}

export default PageNotFound;
