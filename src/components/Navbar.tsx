import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-rose-700 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h2 className="text-xl font-bold tracking-wide">ChicCharms</h2>
        <div className="flex space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
