import React from "react";
export default function AboutUs() {
    return (
      <div className="bg-black text-white py-16 px-8 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: Heading */}
          <div className="flex items-center">
            <h2 className="text-6xl lg:text-8xl font-extrabold text-gray-200 ">ABOUT US</h2>
          </div>
          {/* Column 2: Description */}
          <div className="flex items-center">
            <p className="text-lg text-gray-400 leading-relaxed">
              Cyberthon by SRM Institute of Science and Technology is a global 24-hour hackathon, open to teams of 1-4, held offline. Dive into Cyber Security and mixture of domains with cyber security such as machine learning, IoT security, cloud security, data science, web3, blockchain and a lot more. Join us for non-stop learning, problem-solving, and a chance to win fantastic prizes. Don’t miss out on this unforgettable journey!
            </p>
          </div>
        </div>
      </div>
    );
  }
  