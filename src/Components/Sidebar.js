import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 py-4">
      <ul className=" shadow-lg font-bold py-4  w-40">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold py-3">Subscriptons</h1>
      <ul className=" shadow-lg w-40">
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold py-3">Watch Later</h1>
      <ul className=" shadow-lg  w-40">
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Moviies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
