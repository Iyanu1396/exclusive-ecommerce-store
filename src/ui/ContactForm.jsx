function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-4 md:mt-0 h-full rounded-md bg-slate-50 px-6 py-8 shadow-xl">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 space-y-4 lg:grid lg:grid-cols-3 lg:items-center lg:space-y-0">
          <input
            className="bg-[#F5F5F5] py-2 pl-2 font-mont font-medium outline-none"
            placeholder="Your Name"
            required
            type="text"
          />
          <input
            className="bg-[#F5F5F5] py-2 pl-2 font-mont font-medium outline-none"
            placeholder="Your Email"
            required
            type="email"
          />
          <input
            className="bg-[#F5F5F5] py-2 pl-2 font-mont font-medium outline-none"
            placeholder="Your Phone"
            required
            type="phone"
          />
        </div>

        <textarea
          className="mt-6 w-full h-[200px] bg-[#F5F5F5] py-2 pl-2 font-mont font-medium outline-none"
          placeholder="Your Message"
          name=""
          id=""
        ></textarea>
        <button className="ml-auto mt-6 block rounded-sm bg-red-600 px-6 py-2 font-inter text-slate-50">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
