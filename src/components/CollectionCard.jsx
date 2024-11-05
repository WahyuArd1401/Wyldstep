const CollectionCard = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center font-monument text-center bg-transparent group">
      <div className="relative group bg-[#EFEFEF] mb-4 w-full max-w-xs group-hover:bg-black transition duration-200 ease-in-out ">
        <div className="aspect-[3/2]">
          <img src="../images/sneaker7.png" alt="Product image" className="mx-auto object-cover rotate-[5deg]" />
        </div>
        <div className="absolute bottom-3 w-full text-center">
          <div className="flex justify-center gap-4 items-center">
            <p className="text-black font-bold text-sm group-hover:text-custom-third transition duration-200 ease-in-out">$42.00</p>
            <p className="text-red-500 line-through text-xs">$65.00</p>
          </div>
        </div>
      </div>
      <p className="mb-1 capitalize font-bold text-lg group-hover:text-custom-primary transition duration-200 ease-in-out">Air Max Pegasus 37</p>
      <div className="border-b-2 border-black w-1/2 mt-1 group-hover:border-custom-primary transition duration-200 ease-in-out"></div>
    </div>
  );
};

export default CollectionCard;
