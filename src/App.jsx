import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBarDesktop";
import AboutUs from "./components/About";
import HeroSectionDesktop from "./components/hero/HeroSectionDesktop";
import HeroSectionMobile from "./components/hero/HeroSectionMobile";
import Tracks from "./components/Tracks";
import Timeline from "./components/TimeLine";
import Sponsors from "./components/Sponsors";
import FooterDesktop from "./components/footer/FooterDesktop";
import FooterMobile from "./components/footer/FooterMobile";
import NavbarMobile from "./components/navbar/NavBarMobile";
import FAQ from "./components/FAQ";


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "#000" }}>
      {isMobile ? <NavbarMobile /> :   <NavBar />}
      
      {isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />}
      <AboutUs/>
      <Tracks/>
      <Timeline/>
      <FAQ/>
      <Sponsors/>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </div>
  );
}

export default App;
