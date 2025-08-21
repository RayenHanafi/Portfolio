import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef(null);

  const serviceID = "service_85c160n";
  const templateID = "template_9xf9scp";
  const publicKey = "ZRxjR0Vcc6fHfIK39";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("Email Send succesfully!");
          alert("Email was send! Thanks you!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      id="contact-form"
      className="w-full lg:w-1/2 bg-[#7B7B7B]/20 flex flex-col gap-4 sm:gap-5 p-6 sm:p-10 rounded-4xl"
      onSubmit={sendEmail}
    >
      <label for="name">Name</label>
      <input
        name="name"
        id="name"
        className="p-3 rounded-lg bg-[#0F0323] text-white"
        type="text"
        placeholder="Your Name"
        required
      />
      <label for="email">Email</label>
      <input
        name="email"
        id="email"
        className="p-3 rounded-lg bg-[#0F0323] text-white"
        type="email"
        placeholder="Your Email"
        required
      />
      <label for="Message">Message</label>
      <textarea
        name="message"
        id="message"
        className="p-3 rounded-lg bg-[#0F0323] text-white"
        rows="4"
        placeholder="Your Message"
        required
      ></textarea>
      <button className="btn" type="submit">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
