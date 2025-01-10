import React, { useEffect, useRef, useState } from "react";

const HeroSectionMobile = () => {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const cyberTextRef = useRef<HTMLDivElement | null>(null);
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-20T00:00:00"); // Specify your target date and time

    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timerInterval);
        setTimer({ days: 0, hours: 0, minutes: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);


        setTimer({
          days,
          hours,
          minutes
        });
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div
      ref={heroSectionRef}
      className="hero-section"
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background CYBERTHON text */}
      <div
        ref={cyberTextRef}
        style={{
          position: "absolute",
          top: "17%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
          color: "rgba(255, 255, 255, 1)",
          fontWeight: "bold",
          letterSpacing: "0.5rem",
          zIndex: 1,
          userSelect: "none",
          whiteSpace: "nowrap",
          fontSize: "10vw", // Increase font size
        }}
      >
        CYBERTHON
      </div>

      <img
        ref={heroImageRef}
        src="/hero.svg"
        alt="Hero"
        style={{
          position: "absolute",
          width: "100%", // Adjusted for mobile view
          height: "100%", // Adjusted for mobile view
          objectFit: "contain",
          zIndex: 2,
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)"
        }}
      />

      {/* Timer */}
      <div
        ref={heroTextRef}
        style={{
          position: "absolute",
          top: "30%", // Adjust top position to accommodate larger text
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 3,
          width: "100%",
          fontFamily: "monospace",
          letterSpacing: "0.2rem",
          fontSize: "8vw", // Increase font size
        }}
      >
        <p>
        {`${timer.days}d:${timer.hours.toString().padStart(2, '0')}h:${timer.minutes.toString().padStart(2, '0')}m:${(60 - new Date().getSeconds()).toString().padStart(2, '0')}s`}
        </p>
      </div>

      {/* Register Button */}
      <button
        onClick={() => alert("Navigate to registration page")}
        style={{
          position: "absolute",
          bottom: "40%",
          left: "1%",
          padding: "10px 20px",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
          zIndex: 4
        }}
      >
        <span style={{ paddingRight: "20px" }}>
          Register Now
        </span>
        <span>
          &#62;
        </span>
      </button>
      <div
        onClick={() => alert("Navigate to registration page")}
        style={{
          position: "absolute",
          bottom: "15%",
          right: "1%",
          padding: "10px 20px",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        
          cursor: "pointer",
          zIndex: 4
        }}
      >
        <h1 className="text-3xl">
          Jan 27 <br /> & 28
        </h1>
        <p>A high-stakes arena where <br /> top minds tackle real-world <br /> problems. </p>
      </div>
    </div>
  );
};

export default HeroSectionMobile;