import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div>
      <section className="text-center py-16 bg-gradient-to-r from-pink-100 via-rose-50 to-fuchsia-100">
        <h1 className="text-5xl font-bold text-pink-700">
          Welcome to ChicCharms
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Discover timeless elegance and affordable luxury in our exquisite jewelry collections.
        </p>
        <div className="mt-8">
          <Link href="/about">
            <button className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700">
              Learn More About Us
            </button>
          </Link>
          <Link href="/services">
            <button className="ml-4 px-6 py-3 bg-rose-700 text-white rounded-lg shadow-md hover:bg-rose-800">
              View Our Services
            </button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto mt-16">
        <h2 className="text-4xl font-bold text-center text-pink-700">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="/necklace2.jpg" alt="Pearl Necklace" className="h-48 mx-auto" />
            <h3 className="text-xl font-bold mt-4">Elegant Pearl Necklace</h3>
            <p className="text-gray-600">starting from PKR 5,000</p>
            <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="/hoops.jpg" alt="Gold Hoop Earrings" className="h-48 mx-auto" />
            <h3 className="text-xl font-bold mt-4">Gold Hoop Earrings</h3>
            <p className="text-gray-600">PKR 2,500</p>
            <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="/rings.jpg" alt="Diamond Ring" className="h-48 mx-auto" />
            <h3 className="text-xl font-bold mt-4">Diamond Ring</h3>
            <p className="text-gray-600">PKR 5,000</p>
            <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="text-center mt-16 py-16 bg-gradient-to-r from-fuchsia-100 via-pink-50 to-rose-100">
        <h2 className="text-4xl font-bold text-pink-700">Why ChicCharms?</h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          At ChicCharms, we combine craftsmanship with passion to create jewelry that defines elegance and sophistication.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <button className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

