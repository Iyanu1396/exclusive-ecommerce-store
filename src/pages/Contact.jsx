import ContactDetails from "../ui/ContactDetails";
import ContactForm from "../ui/ContactForm";

function Contact() {
  return (
    <section className="pb-[10rem] pt-[13rem]">
      <div className="m-auto w-[80%] grid-cols-2 md:grid md:items-center md:gap-8">
        <ContactDetails />

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
