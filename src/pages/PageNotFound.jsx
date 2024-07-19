import { useNavigate } from "react-router-dom";

function PageNotFound() {
const navigate = useNavigate()

  return (
    <section className="pt-[12rem]  pb-[7rem] text-center flex justify-center items-center flex-col text-slate-950">
        <div className=" w-[80%]">
           
              <h1 className="font-inter font-semibold text-6xl">404 Not Found</h1>
      <p className="font-mont font-medium mt-6">
        Your visited page not found. You may go home page.
      </p>
      <button onClick={()=> navigate('/')} className="rounded-sm bg-red-600 px-6 py-2 font-inter text-slate-50 mt-12">
        Back to home page
      </button>
        
        </div>
       
    
    </section>
  );
}

export default PageNotFound;
