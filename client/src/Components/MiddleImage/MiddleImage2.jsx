
const MiddleImage2 = () => {
    return (
        <div className="md:px-0 px-3">
       <div
      className="hero max-w-7xl mx-auto mt-4 rounded-sm"
      style={{
        backgroundImage:
          "url('middleImage2.jpg')",
          backgroundSize: "cover", 
           backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-4xl text-xl font-bold font-[roboto]">Quality Food Assurance</h1>
          <p className="mb-5 font-[roboto] text-xs md:text-lg ">
          Urban Feast takes pride in delivering exceptional quality food crafted with the freshest ingredients. Each dish is prepared with care, blending flavors and innovation to create a dining experience that delights the senses. From signature recipes to timeless classics, Urban Feast ensures every bite reflects their commitment to excellence and culinary perfection.
          </p>
        </div>
      </div>
    </div>
 </div>
    );
};

export default MiddleImage2;