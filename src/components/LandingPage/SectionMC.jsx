import React from 'react';

import assetMC from '../../assets/IMG_9619 1.png'

const index = () => {
  return (
    <section className="min-h-screen bg-white text-black px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between" id='moc'>
      {/* Left Text Section */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-8xl font-aeonikbold leading-tight">
          Master of<br />Ceremony
        </h1>
        <p className="text-base font-aeonikregular font-light md:text-lg mt-6 text-gray-700">
          Fadel Karnen memiliki passion dan pengalaman membawakan berbagai acara, 
          selain itu Fadel Karnen juga sudah tersertifikasi oleh Badan Nasional 
          Sertifikasi Profesi Republik Indonesia (BNSP RI) yang sudah diakui oleh Negara.
        </p>
        <div className="mt-10 flex gap-10">
          <div>
            <p className="text-5xl font-aeonikbold">200+</p>
            <p className="text-sm text-gray-500">Clients</p>
          </div>
          <div>
            <p className="text-5xl font-aeonikbold">Wedding</p>
            <p className="text-sm text-gray-500">Speciality</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="mt-12 md:mt-0 md:ml-12">
        <img 
          src={assetMC} 
          alt="Fadel Karnen"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover"
        />
      </div>
    </section>
  );
};

export default index;
