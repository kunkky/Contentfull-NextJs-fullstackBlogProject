import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="flex justify-center items-center p-5 bg-black">
      <p className="text-white">
        Copyright {currentYear}{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-indigo-200 font-bold text-transparent bg-clip-text">
          Ademuyiwa Adekunle
        </span>
      </p>
    </footer>
  );
};

export default Footer;
