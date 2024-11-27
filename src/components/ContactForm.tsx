const ContactForm = () => {
    return (
      <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border-gray-300 rounded-lg p-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border-gray-300 rounded-lg p-2"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border-gray-300 rounded-lg p-2"
          rows={4}
        />
        <button className="w-full bg-pink-600 text-white py-2 rounded-lg">
          Submit
        </button>
      </form>
    );
  };
  
  export default ContactForm;
  