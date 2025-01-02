import React from 'react';
import SplitImg from "/split/innovate.png";
import SplitLogo from "/split/split-2-logo.png";

const Innovations = () => {
  return (
    <>
      {/* Header Section */}
      <div className="max-w-full mx-auto text-center mb-12" id='demos' data-aos='fade-up'>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-gray-900">
          Innovate with <span
            className="text-5xl sm:text-6xl"
            style={{
              fontFamily: 'Bhineka',
              background: 'linear-gradient(to right, #1E4FCD, #F36F7E)', // Replace with your desired colors
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              padding: "0 5px",
            }}
          >
            O
          </span>
          <span style={{ fontFamily: 'Noopla', fontWeight: '200' }}>
            Square</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Turn ideas into reality anytime, anywhere with powerful apps and cloud storage.
        </p>
      </div>

      <div className="rainbow-collobration-area rainbow-section-gap-big justify-items-center pb-16 xl:px-24 2xl:px-48">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="collabration-image-section">
                <img
                  src={SplitImg}
                  width={1305}
                  height={712}
                  alt="collabration-image"
                />
                <div className="logo-section">
                  <div className="center-logo mb-32 logo-shadow px-8 py-4 rounded-2xl bg-background">
                    <img
                      className='h-12 w-12 md:h-20 md:w-20'
                      src={SplitLogo}
                      alt="Small Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovations;
