import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const AboutMeCard = ({ visible, onClose }) => {
  const [copied, setCopied] = useState(false);
  const popupRef = useRef(null);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    let x = (rect.left + rect.width / 2) / window.innerWidth;

    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      x = 0.5;
    } else if (screenWidth < 1024) {
      x = 0.7;
    } else if (screenWidth < 1750) {
      x = 0.41;
    } else {
      x = 0.34;
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

  useEffect(() => {
    if (!visible) return;

    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      ref={popupRef}
      className={`fixed bottom-0 left-0 w-full z-10 transition-transform duration-500 bg-white shadow-lg border border-black  
      ${visible ? "translate-y-0" : "translate-y-full"} 
      h-[50vh] sm:h-auto overflow-y-auto scrollbar-hidden`}
    >
      <div className="p-6 mx-0">
        <button
          onClick={onClose}
          className="text-black float-right cursor-pointer text-base sm:text-2xl font-bold"
        >
          X
        </button>
        <div className="mt-4 p-1 flex flex-col sm:flex-row sm:items-center gap-6">
          <img
            src="/gal.jpg"
            alt="About Me"
            className="w-65 h-75 mx-15 mt-5 mb-7 object-cover hidden sm:block"
          />
          <div className="flex flex-col gap-4 sm:gap-14 max-w-180 w-full">
            <p className="text-black text-base sm:text-2xl leading-5 sm:leading-[2.0rem] mt-3 sm:mt-0 text-left">
              I'm Gal, a passionate and curious 3rd year visual communication
              student at Bezalel Academy, currently pursuing a B.Des degree.
              <br />
              <br />I bring with me a strong sense of curiosity, a genuine love
              of learning, close attention to the smallest details, and a real
              appreciation for teamwork and collaboration.
            </p>
            <div className="mt-4 mb-5 flex flex-col gap-2 sm:flex-row sm:justify-start sm:items-stretch">
              <div className="flex flex-row gap-2">
                <button
                  onClick={handleClick}
                  className="border border-black cursor-pointer p-2.5 whitespace-nowrap text-sm sm:text-base w-fit sm:w-auto text-center"
                >
                  Galbur1@gmail.com
                </button>
                {copied && (
                  <div className="bg-black text-white text-sm sm:text-base p-2.5 w-fit sm:w-auto text-center">
                    Copied!
                  </div>
                )}
              </div>

              <div className="flex flex-row gap-2">
                <p className="border border-black p-2.5 whitespace-nowrap text-sm sm:text-base w-fit sm:w-auto text-center">
                  +972 5423 39921
                </p>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black cursor-pointer p-2.5 hover:bg-black hover:text-white transition-colors duration-400 whitespace-nowrap text-sm sm:text-base w-fit sm:w-auto text-center"
                >
                  CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
