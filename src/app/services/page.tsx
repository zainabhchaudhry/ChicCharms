const ServicesPage = () => {
    return (
      <div>
        <h1 className="text-4xl font-bold text-center text-pink-700">Our Services</h1>
        <div className="mt-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-rose-700">Jewelry Customization</h2>
            <p className="text-gray-600">
              Get personalized designs tailored to your preferences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-rose-700">Free Delivery</h2>
            <p className="text-gray-600">
              Enjoy free delivery nationwide on all orders above PKR 10,000.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-rose-700">Repair Services</h2>
            <p className="text-gray-600">
              Our experts ensure your jewelry stays in perfect condition.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesPage;
  