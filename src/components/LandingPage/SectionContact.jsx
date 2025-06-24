import React from "react";
import IGIcon from "../../assets/instagram.png"
import WA from "../../assets/whatsapp.png"
import AssetContact from "../../assets/IMG_9700 1.png"

const Contact = () => {
  return (
    <div className=" justify-between bg-white" id="contact">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-0 gap-12 md:gap-20">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start text-black">
          <h1 className="text-[60px] md:text-[150px] font-aeonikbold leading-tight mb-6 select-none">
            Get in Touch
          </h1>
          <p className="mb-6 text-base justify-center md:text-[30px] font-aeonikregular">
            Ready to discuss what’s next?
          </p>
          <a
            href="#"
            className="inline-flex items-center font-aeonikbold text-lg md:text-[35px] mb-8 underline decoration-2 underline-offset-4 hover:decoration-black"
          >
            HIRE ME 
          </a>
          <div className="flex flex-col gap-4 text-base md:text-lg">
            <div className="flex gap-1 items-center font-aeonikregular">
              <img src={IGIcon} className="w-6 h-6" />
              <a href="https://instagr.am/fadelkarnen"><span>fadelkarnen</span></a>
              <img src={IGIcon} className="ml-10 w-6 h-6" />
             <a href="https://instagr.am/speaklah.id"><span>speaklah.id</span></a>
            </div>
            <div className="flex items-center">
              <img src={WA} className="w-6 h-6"/>
              <a href="https://wa.me/6281224867094"><span>+62-812-2486-7094</span></a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className=" justify-center md:justify-end">
          <img
            src={AssetContact}
            alt="Fadel Karnen"
            className="max-w-xs mx-auto md:max-w-lg select-none"
            draggable="false"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 text-sm font-light select-none ">
        Copyright 2025 fadelkarnen.com. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;

