import React from "react";
import AboutMeAsset from "../../assets/AboutMe_Cropped.png"

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto p-6 md:p-12 gap-10 md:gap-24" id="about">
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src={AboutMeAsset}
          alt="Fadel Karnen"
          className="w-full h-full object-contain"
          loading="lazy"/>
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6">
        <h1 className="text-[120px] font-aeonikbold text-black-900 leading-tight py-10">
          About Me
        </h1>
        <h2 className="text-xl md:text-[28px] font-aeonikregular text-black-800 inline-flex items-center">
          Fadel Karnen
          <span className="inline-block w-16 h-[2px] bg-gray-400 ml-4"></span>
        </h2>
        <p className="text-base md:text-lg text-black-700 max-w-3xl leading-relaxed">
          Master of Ceremony (MC), BNSP Certified Public Speaker{" "}
          & Trainer, Founder{" "}
          & Coach of SPEAKLAH Public Speaking School, also a
          Podcaster at SPEAKLAH Talks.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

