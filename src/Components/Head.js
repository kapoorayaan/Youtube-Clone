import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/AppSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ytSearchApi } from "../utils/Constants";

const Head = () => {
  const [suggestions, setsuggestions] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [showSuggestion, setshowSuggestion] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  const dispatchEvent = useDispatch();
  const toggleMenuHandler = () => {
    dispatchEvent(toggleMenu());
  };
  const getSearchSuggestion = async () => {
    const data = await fetch(ytSearchApi + searchText);
    const json = await data.json();
    //console.log(json);
    setsuggestions(json[1]);
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
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-[57%] border border-gray-400 shadow p-2 rounded-l-full"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            onFocus={() => {
              setshowSuggestion(true);
            }}
            onBlur={() => {
              setshowSuggestion(false);
            }}
          />
          <button
            className="border border-gray-400 p-2 rounded-e-full"
            value="Search"
          >
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2  w-96 shadow rounded-lg border border-gray-400">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-1 shadow-sm hover:bg-slate-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <img
          className="h-12 "
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        ></img>
      </div>
      <h1 className="  py-3 items-center ml-[-64px] mr-[-69px] ">
        Ayaan Kapoor
      </h1>
    </div>
  );
};

export default Head;
