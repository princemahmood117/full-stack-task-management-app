const MiddleImage = () => {
  return (
 <div className="md:px-0 px-3">
  <hr className="my-6 max-w-7xl mx-auto" />
       <div
      className="hero max-w-7xl mx-auto mt-4 rounded-sm"
      style={{
        backgroundImage:
          "url('kitchen.png')",
          backgroundSize: "cover", 
           backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-4xl text-xl font-bold font-[roboto]">Urban Feast</h1>
          <p className="mb-5 font-[roboto] text-xs md:text-lg ">
          Discover a culinary adventure like no other. At Urban Feast, we bring flavors to life with our expertly crafted dishes, made from the freshest ingredients to satisfy every craving. Come for the food, stay for the experience.
          </p>
        </div>
      </div>
    </div>
 </div>
  );
};

export default MiddleImage;
