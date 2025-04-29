import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onAboutClick }) => {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex justify-between items-center p-2 sm:p-4 fixed top-0 left-0 z-20 bg-white sm:bg-none">
      <button
        className="text-2xl cursor-pointer ml-1.5 hover-noto"
        onClick={() => navigate("/")}
      >
        Gal Burshtein
      </button>
      <button
        className="text-2xl cursor-pointer mr-1.5 hover-noto"
        onClick={onAboutClick}
      >
        About Me
      </button>
    </nav>
  );
};

export default Navbar;
