import React from "react";
import Navbar from '../NavbarSidebar/StickyNavbar'
import HomeAsset from '../../assets/Home_Attribute_Crop.png'

const index =()=>{
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-white">
      {/* Left side: Text content */}
      <div className="flex flex-col items-start md:items-start md:w-1/2 space-y-4 md:pr-12">
        {/* Large Hello text */}
        <h1 className="text-4xl md:text-[200px] font-aeonikbold font-extrabold text-gray-900 leading-none select-none">
          Hello
        </h1>
        {/* Subtitle */}
        <p className="text-md md:text-[24px] text-gray-800 font-aeonikregular">
          Nice to meet you. I&#39;m <span className="font-aeonikbold">Fadel Karnen</span>.
        </p>
      </div>

      {/* Right side: Portrait image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src={HomeAsset}
          alt="Fadel Karnen portrait"
          className="max-w-xs md:max-w-sm lg:max-w-md rounded-md"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default index;


