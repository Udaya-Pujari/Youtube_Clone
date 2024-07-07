import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constatnts";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggessions, setSuggession] = useState([]);
  const [showSuggessions, setShowSuggessions] = useState(true);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  /** this is how the searchCache looks
   *
   * searchCache={
   *    "iphone"=["ipone","iphone 12","iphone 13"]
   * }
   *
   *
   *
   */

  useEffect(() => {
    //API call
    //make an api call after every key press
    //but if the diffrence between the 2 api call is <200ms  then DECLINE the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        //here I am directly setting the search value
        setShowSuggessions(searchCache[searchQuery]);
      } else {
        getSearchSuggessions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]); //the dependecy array contains searchQuery which means everytime my searchQuery changes ,I need to make an api call.

  /**
   * press key-i
   * - render the component
   * - then useEffect() is called
   * - after this it starts timer ==> it will make a api call for 200 ms
   *
   * if I press another key-ip
   * - destroy the component (during this time useEffect return method is also called)
   * - re-renders the comopnents
   * - useEffect is called
   *
   *
   *  - a new timer will be setup here and it will start counting the time again--automatically makes an api call
   *
   */

  const getSearchSuggessions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggession(json[1]);

    //Now I should update my cache

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    ); //dispatching an action from the searchSlice
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="hambergerMenu"
          src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png"
        />

        <img
          className="h-10 mx-2"
          alt="logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
        />
      </div>
      <div className="col-span-10 px-12">
        <div>
          <input
            className=" w-1/2 border border-gray-500 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggessions(true)}
            onBlur={() => setShowSuggessions(false)}
          />
          <button className="border border-gray-500 px-5 py-2 rounded-r-full bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggessions && (
          <div className="absolute bg-white  py-2 px-5 w-[33rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggessions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Header;
