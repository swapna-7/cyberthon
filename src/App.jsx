import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AboutUs from "./components/About";
import HeroSectionDesktop from "./components/hero/HeroSectionDesktop";
import HeroSectionMobile from "./components/hero/HeroSectionMobile";
import Tracks from "./components/Tracks";
import Timeline from "./components/TimeLine";
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
      <NavBar />
      {isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />}
      <AboutUs/>
      <Tracks/>
      <Timeline/>
    </div>
  );
}

export default App;
