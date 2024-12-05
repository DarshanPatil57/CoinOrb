import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="absolute top-[1.5rem] left-[1.5rem] text-lg text-cyan flex items-center space-x-2 sm:space-x-3 md:space-x-4">
        <img src={logo} alt="CoinOrg" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        <span className="text-lg sm:text-xl md:text-2xl">CoinOrb</span>
    </Link>
  );
}

export default Logo;
