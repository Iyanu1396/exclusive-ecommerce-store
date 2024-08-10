
import AccountForm from "../features/account/AccountForm";
import AccountOptions from "../ui/AccountOptions";

function Account() {

  return (
    <section className="m-auto w-[80%] pb-[7rem] pt-[10rem] font-inter ">
      <div className="sm:grid sm:grid-cols-2">
   <AccountOptions/>
     <AccountForm/>
      </div>
 
    </section>
  );
}

export default Account;
