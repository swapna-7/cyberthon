import React from "react";
import HeroSectionDesktop from "./hero/HeroSectionDesktop";
import HeroSectionMobile from "./hero/HeroSectionMobile";
import AboutUs from './About'
import Tracks from './Tracks'
import Timeline from './TimeLine'
import FAQ from './FAQ'
import Sponsors from './Sponsors'
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


      const homeRef = useRef<HTMLDivElement>(null);
      const aboutusRef = useRef<HTMLDivElement>(null);
      const tracksRef = useRef<HTMLDivElement>(null);
      const timelineRef = useRef<HTMLDivElement>(null);
      const faqRef = useRef<HTMLDivElement>(null);
      const sponsorsRef = useRef<HTMLDivElement>(null);
      const location = useLocation();
      useEffect(() => {
        if (location.hash === "#home") {
          homeRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        if (location.hash === "#aboutus") {
          aboutusRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        if (location.hash === "#tracks") {
          tracksRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        if (location.hash === "#timeline") {
          timelineRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        if (location.hash === "#faq") {
          faqRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        if (location.hash === "#sponsors") {
          sponsorsRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      }, [location]);


  return (
    <>
    <div>
    {isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />}
    </div>
    <div ref={aboutusRef}>
      <AboutUs/>
    </div>
    <div ref={tracksRef}>
    <Tracks/>
    </div>
    <div ref={timelineRef}>
    <Timeline/>
    </div>
    <div ref={faqRef}>
    <FAQ/>
    </div>
    <div ref={sponsorsRef}>
    <Sponsors/>
    </div> 
      </>
  )
}

export default Home
