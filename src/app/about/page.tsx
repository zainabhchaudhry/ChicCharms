import JewelryDesignCard from "@/components/JewelryDesignCard.tsx";

const designs = [
  { id: 1, name: "Classic Pearl Necklace", image: "/necklace2.jpg" },
  { id: 2, name: "The set", image: "/necklace 3.jpg" },
  { id: 3, name: "Flower Necklace", image: "/necklace1.jpg" },
  { id: 4, name: "Princess Necklace", image: "/necklace4.jpg" },
  { id: 5, name: "Golden Hoops", image: "/hoops.jpg" },
  { id: 6, name: "Diamond Rings", image: "/rings.jpg" },
  { id: 7, name: "Statement Piece", image: "/1.jpg" },
  { id: 8, name: "More", image: "/sheeted jewelry.jpg" },
];

const AboutPage = () => {
  return (
          <div className="container mx-auto px-4 py-8">
      {/* Logo Section */}
      <div className="flex items-center justify-center mb-6">
        <img
          src="/logo.png"
          alt="ChicCharms Logo"
          className="w-20 h-20 object-contain"
        />
      </div>
            {/* Logo Section */}
      <h1 className="text-4xl font-bold text-center text-pink-700">About Us</h1>
      <p className="mt-4 text-center text-gray-700">
        At ChicCharms, we bring you timeless elegance with affordable luxury. Explore our exquisite jewelry designs!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {designs.map((design) => (
          <div
            key={design.id}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={design.image}
              alt={design.name}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">{design.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AboutPage;
