import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //const prime=findNthPrime(text)
  //the line is memosied to cache the calulation
  const prime = useMemo(() => findNthPrime(text), [text]);
  // console.log("rendering....");
  return (
    <div
      className={`m-4 p-2 w-96 border border-black ${
        isDarkTheme ? "bg-gray-900 text-white" : "bg-slate-100"
      }`}
    >
      <h1>Example for useMemo Hook</h1>
      <div>
        <button
          className="border border-black rounded-md my-1 p-2 bg-green-300 "
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mt-4 font-bold text-xl">
        <h1>the prime number is: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
