import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-pink-700">Contact Us</h1>
      <p className="mt-4 text-center text-gray-700">
        Have questions? Feel free to reach out to us!
      </p>
      <div className="mt-8 max-w-xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
