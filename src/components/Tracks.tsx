import React from 'react';

const Tracks = () => {
  return (
    <div className="bg-black text-white py-8">
      
      <div className='grid grid-cols-1  md:grid-cols-2 mb-2'>

      <img src="line.svg" alt="" className='ml-auto'/>
      <h2 className="text-8xl font-bold mb-4 text-right me-5">TRACKS</h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 m-0 p-0">
        {[
          { 
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            ), 
            title: "Web Security", 
            description: "Protect the web! This track is all about building secure websites and web apps that keep user data safe from modern cyber threats."
          },
          { 
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            ), 
            title: "App Security", 
            description: "Safeguard the apps we rely on daily. This track focuses on detecting and preventing app-targeted data breaches, malware, and more."
          },
          { 
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            ), 
            title: "General Security", 
            description: "Tackle a mix of security issues, from defending networks to countering social engineering, and come up with real-world solutions."
          },
          { 
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            ), 
            title: "Web3 & Blockchain", 
            description: "Use blockchain technology to create secure, decentralized applications and explore its full potential."
          },
          { 
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ), 
            title: "Internet of Things", 
            description: "Dive into the world of connected devices! Build solutions that keep IoT networks secure, from smart homes to smart cities."
          },
          { 
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            ), 
            title: "Open Innovation", 
            description: "Get a big idea! Choose any area of security that inspires you, and take it in a new direction."
          }
        ].map((track, index) => (
          <div 
            key={index} 
            className="border border-gray-600 aspect-square flex flex-col justify-center items-center p-4"
          >
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {track.icon}
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold my-2">{track.title}</h3>
            <p className="text-gray-400 text-center px-2">{track.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;