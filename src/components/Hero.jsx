import React from 'react';
import bannerimage from '../assets/banner-img-1.png'

const Hero = () => {
    return (
        <div>
          <div
            className="rounded-xl p-0 my-3 hero w-full mx-auto h-[550px] overflow-hidden"
            style={{ 
                backgroundImage:
                `url(${bannerimage})`, 
                backgroundSize:'cover',
                backgroundPosition: 'center',
                backgroundRepeat:'no-repeat'
                
            }}
            >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                <h1 className="mb-5 text-3xl md:text-5xl font-semibold leading-10 md:leading-16">It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
                <p className="max-w-4xl mb-5 text-gray-400">
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;