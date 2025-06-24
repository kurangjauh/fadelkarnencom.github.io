import React from "react";

import GroupLogo from "../../assets/Group 1.png"
import Rekaloka from "../../assets/REKALOKA Profile Picture.png"
import SpeaklahCreative from "../../assets/IMG_7766 1.png"

const SpeaklahCreativeHub = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-5 text-center max-w-5xl mx-auto" id="speaklah">
      {/* Logo and Title */}
      <div className="flex mb-6">
         <img src={SpeaklahCreative} className="h-[150px]"/>
      </div>

      {/* Description paragraphs */}
      <p className="mb-3 mt-5 max-w text-base sm:text-lg text-gray-900">
        <strong>Speaklah Creative Hub</strong> merupakan perusahaan yang bergerak di bidang pendidikan non-formal yang
        <span className="font-semibold text-yellow-400"> melakukan pendekatan kreatif dalam setiap kelasnya.</span>
      </p>
      <p className="mb-3 max-w text-base sm:text-lg ">
        <strong>Speaklah Belajar Dirumah</strong> memfasilitasi peserta
        <span className="font-semibold text-blue-700"> pelatihan yang tidak bisa belajar secara langsung</span> didalam kelas agar tetap mendapatkan ilmu yang sama.
      </p>
      <p className="mb-10 max-w text-base sm:text-lg ">
        Speaklah memiliki media yaitu <strong>Speaklah Talks</strong> yang membahas tentang{" "}
        <span className="font-semibold text-yellow-400">
          cara berkomunikasi dengan sesama manusia
        </span>
         yang dekat dengan kehidupan sehari-hari.
      </p>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-14 max-w-4xl">
          <div className="flex flex-col items-center text-xs text-gray-700">
            <img src={GroupLogo} className="max-h-20 object-contain" loading="lazy" />
          </div>
      </div>

      {/* Collaboration info */}
      <div className="flex items-center justify-center space-x-4">
        <span className="text-sm sm:text-base text-gray-900">In Collaboration With</span>
          <img
            src={Rekaloka}
            className="h-12 w-12 object-contain"
            loading="lazy"
          />
      </div>
    </div>
  );
};

export default SpeaklahCreativeHub;