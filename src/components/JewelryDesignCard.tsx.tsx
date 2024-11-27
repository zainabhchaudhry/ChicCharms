const JewelryDesignCard = ({ name, image }: { name: string; image: string }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <h3 className="text-lg font-bold text-center text-pink-700 mt-4">{name}</h3>
      </div>
    );
  };
  
  export default JewelryDesignCard;
  