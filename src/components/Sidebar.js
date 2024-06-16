import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  //here I am subscribing the specific portion or part of the store
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //this is known as early return
  if (!isMenuOpen) return null; //this line can also be written using ternary operator
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
