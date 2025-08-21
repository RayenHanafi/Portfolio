function ContactForm() {
  return (
    <form
      id="contact-form"
      className="w-full lg:w-1/2 bg-[#7B7B7B]/20 flex flex-col gap-4 sm:gap-5 p-6 sm:p-10 rounded-4xl"
    >
      <label for="name">Name</label>
      <input
        id="name"
        className="p-3 rounded-lg bg-[#0F0323] text-white"
        type="text"
        placeholder="Your Name"
        required
      />
      <label for="email">Email</label>
      <input
        id="email"
        className="p-3 rounded-lg bg-[#0F0323] text-white"
        type="email"
        placeholder="Your Email"
        required
      />
      <label for="Message">Message</label>
      <textarea
        id="message"
        className="p-3 rounded-lg bg-[#0F0323] text-white"
        rows="4"
        placeholder="Your Message"
        required
      ></textarea>
      <button className="btn" type="button" onclick="sendMail()">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
