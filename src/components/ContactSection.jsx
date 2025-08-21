import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center mt-16 sm:mt-[110px] w-full max-w-6xl px-4"
    >
      <div className="title text-center">Contact</div>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-20 mt-8 sm:mt-[50px] w-full">
        {/* Contact Form */}
        <ContactForm />
        {/* Contact Info */}
        <ContactInfo />
      </div>
    </section>
  );
}

export default ContactSection;
