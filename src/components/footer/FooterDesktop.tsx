import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterDesktop = () => {
    return (
        <footer className="text-white py-6 ">
            <div className="container mx-auto flex justify-between">
                {/* First Column */}
                <div className="flex-1 flex flex-col items-center">
                    <h2 className="font-bold text-2xl">Gokul : +91 93849 18930</h2>
                </div>
                {/* Second Column */}
                <div className="flex-1 flex flex-col items-center">
                   
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>
                {/* Third Column */}
                <div className="flex-1 flex flex-col items-center">
                    <h2 className="font-bold text-2xl">Vignesh : +91 98221 28899</h2>
                </div>
            </div>
        </footer>
    );
};

export default FooterDesktop;