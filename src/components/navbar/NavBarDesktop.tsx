import React from 'react';
import { useLocation } from 'react-router-dom';

const NavBarDesktop: React.FC = () => {
  const location = useLocation();

  return (
    <>
    <div>
      <nav className="z-50 h-16 flex fixed top-0 left-1/2 transform -translate-x-1/2 w-full justify-between text-white backdrop-blur backdrop-brightness-[0.5] p-3">
        <div>
          <div className="flex space-x-4 text-lg items-center p-2">
            <a
              href="/"
              className={
                location.hash === '#home'
                  ? 'underline decoration-white underline-offset-4'
                  : 'text-white hover:underline underline-offset-4'
              }
            >
              HOME
            </a>
            <a
              href="/#aboutus"
              className={
                location.hash === '#aboutus'
                  ? 'underline decoration-white underline-offset-4'
                  : 'text-white hover:underline underline-offset-4'
              }
            >
              ABOUT US
            </a>
            <a
              href="/#tracks"
              className={
                location.hash === '#tracks'
                  ? 'underline decoration-white underline-offset-4'
                  : 'text-white hover:underline underline-offset-4'
              }
            >
              TRACKS
            </a>
            <a
              href="/#timeline"
              className={
                location.hash === '#timeline'
                  ? 'underline decoration-white underline-offset-4'
                  : 'text-white hover:underline underline-offset-4'
              }
            >
              TIMELINE
            </a>
            <a
              href="/#faq"
              className={
                location.hash === '#faq'
                  ? 'underline decoration-white underline-offset-4'
                  : 'text-white hover:underline underline-offset-4'
              }
            >
              FAQ
            </a>
            <a
              href="/#sponsors"
              className={
                location.hash === '#sponsors'
                  ? 'underline decoration-white underline-offset-4'
                  : 'text-white hover:underline underline-offset-4'
              }
            >
              SPONSORS
            </a>
            <span className="text-white absolute right-5 space-x-4 text-[1rem] mt-2">
            <a
              href="/contactus"
              className={
                location.pathname === '/contactus'
                  ? 'border border-white-2 p-2 rounded-lg bg-zinc-900 decoration-white underline-offset-4'
                  : 'border border-white-2 p-2 rounded-lg text-white hover:bg-zinc-900 '

              }
            >
            CONTACT US
            </a>
            
            </span>
          </div>
          </div>
      </nav>
    </div>
    </>
  );
};

export default NavBarDesktop;


