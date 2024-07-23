import { TbMail, TbPhone } from "react-icons/tb";

function ContactDetails() {
  return (
    <div className="h-full rounded-md bg-slate-50 px-6 py-8 shadow-xl">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <TbPhone className="h-[40px] w-[40px] rounded-full bg-red-500 py-2 text-3xl text-slate-50" />
          <h2 className="font-inter text-lg font-medium">Call To Us</h2>
        </div>
        <p className="font-mont">We are available 24/7, 7 days a week.</p>
        <p className="font-mont">Phone: +8801611112222</p>
      </div>
      <div className="my-4 border-b-2"></div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <TbMail className="h-[40px] w-[40px] rounded-full bg-red-500 py-2 text-3xl text-slate-50" />
          <h2 className="font-inter text-lg font-medium">Write To Us</h2>
        </div>
        <p className="font-mont">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="font-mont">Emails: customer@exclusive.com</p>
        <p className="font-mont">Emails: support@exclusive.com</p>
      </div>
    </div>
  );
}

export default ContactDetails;
