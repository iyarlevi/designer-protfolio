import React, { useState } from "react";
import confetti from "canvas-confetti";

const AboutMeCard = ({ visible, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();

    let x = (rect.left + rect.width / 2) / window.innerWidth;
    let y = (rect.top + rect.height / 2) / window.innerHeight;

    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
      x = 0.5;
    } else if (screenWidth < 1024) {
      x = 0.7;
    } else if (screenWidth < 1750) {
      x = 0.43;
    } else {
      x = 0.31;
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y: 0.9 },
      startVelocity: 30,
      colors: ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd"],
    });

    navigator.clipboard.writeText("galbur1@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-10 transition-transform duration-500 bg-white shadow-lg 
        ${visible ? "translate-y-0" : "translate-y-full"}
        h-[50vh] sm:h-auto `}
    >
      <div className="p-6 border-solid border-black rounded mx-2 border-1">
        <button
          onClick={onClose}
          className="text-black float-right cursor-pointer text-base sm:text-2xl font-bold"
        >
          X
        </button>
        <div className="mt-4 p-1 flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Image only shows on desktop (sm and up) */}
          <img
            src="images/gal.jpg"
            alt="About Me"
            className="w-65 h-75 mx-15 mt-5 mb-7 object-cover hidden sm:block"
          />
          <div className="flex flex-col gap-4 sm:gap-5 max-w-200 w-full">
            {/* Smaller text on mobile */}
            <p className="text-black text-base sm:text-3xl leading-5 sm:leading-[2.0rem] mt-3 sm:mt-0 text-left">
              I'm Gal, a passionate and curious 3rd year visual communication
              student at Bezalel Academy, currently pursuing a B.Des. degree.{" "}
              <br />
              <br />I bring with me a strong sense of curiosity, a genuine love
              of learning, close attention to the smallest details, and a real
              appreciation for teamwork and collaboration.
            </p>

            {/* 3 squares with responsive width */}
            <div className="mt-4 mb-4 flex flex-row gap-2 justify-start flex-wrap">
              <p className="border-solid border-black border-1 p-2.5 whitespace-nowrap text-sm sm:text-base w-full max-w-[180px]">
                +972 5423 39921
              </p>
              <button
                onClick={handleClick}
                className="border-solid border-black border-1 cursor-pointer p-2.5 whitespace-nowrap text-sm sm:text-base w-full max-w-[180px]"
              >
                Galbur1@gmail.com
              </button>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-solid border-black border-1 cursor-pointer p-2.5 inline-block hover:bg-black hover:text-white transition-colors duration-400 whitespace-nowrap text-sm sm:text-base w-full max-w-[180px]"
              >
                CV
              </a>
              {copied && (
                <div className="bg-black text-white text-s p-2.5 w-full max-w-[180px]">
                  Copied!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
