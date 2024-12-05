import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full sm:w-[70%] md:w-[50%] mt-16 flex justify-between sm:justify-around align-middle border rounded-lg px-2 sm:px-4">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return `w-full text-base sm:text-md text-center font-nunito m-2.5 
            ${isActive ? 'bg-cyan text-gray-300 ' : 'bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300'} 
            border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full text-base sm:text-md text-center font-nunito m-2.5 
            ${isActive ? 'bg-cyan text-gray-300 ' : 'bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300'} 
            border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Trending
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full text-base sm:text-md text-center font-nunito m-2.5 
            ${isActive ? 'bg-cyan text-gray-300 ' : 'bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300'} 
            border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
