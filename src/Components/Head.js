import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/AppSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatchEvent = useDispatch();
  const toggleMenuHandler = () => {
    dispatchEvent(toggleMenu());
  };

  return (
    <div className="grid  grid-flow-col p-5 m-2 shadow">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        ></img>
        <a href="/">
          <img
            className="h-12 ml-2"
            alt="yt logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-20">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 border border-gray-400 shadow p-2 rounded-l-full"
        />
        <button
          className="border border-gray-400 p-2 rounded-e-full"
          value="Search"
        >
          🔍
        </button>
      </div>

      <div className="">
        <img
          className="h-12 "
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        ></img>
      </div>
      <h1 className=" mx-1 py-3 ">Ayaan Kapoor</h1>
    </div>
  );
};

export default Head;
