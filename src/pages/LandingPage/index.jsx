import React from "react";

import SectionHome from"../../components/LandingPage/SectionHome"
import SectionMC from "../../components/LandingPage/SectionMC"
import SectionAbout from "../../components/LandingPage/SectionAbout"
import SectionSpeaklah from "../../components/LandingPage/SectionSpeaklah"
import SectionContact from "../../components/LandingPage/SectionContact"
import Navbar from "../../components/NavbarSidebar/StickyNavbar"

const index =()=>{
   return(
      <>
         <Navbar/>
         <SectionHome/>
         <SectionAbout/>
         <SectionMC/>
         <SectionSpeaklah/>
         <SectionContact/>
      </>
   )
}

export default index