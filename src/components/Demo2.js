import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 10;
  const ref = useRef(0);
  /**
   * here ref is not like ref=0;
   * insted it is a object ==> ref={current:initialValue}  , i.e {current:0}
   * here initial value is nothing but what ever the value present in the useRef
   */

  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Hi Udaya", Math.random());
    }, 1000);

    return () => {
      clearInterval(i.current);
    };
  }, []);

  return (
    <div className="m-4 p-2 w-96 h-96 border border-black">
      <div>
        <button
          className="bg-green-200 px-2 m-4 rounded-lg border border-black"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase
        </button>
        <h1 className="font-bold text-xl">x={x}</h1>
      </div>
      <div>
        <button
          className="bg-green-200 px-2 m-4 rounded-lg border border-black"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase with useState
        </button>
        <h1 className="font-bold text-xl">state={y}</h1>
      </div>

      <div>
        <button
          className="bg-green-200 px-2 m-4 rounded-lg border border-black"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Increase useRef
        </button>
        <h1 className="font-bold text-xl">ref={ref.current}</h1>
      </div>
      <button
        className="bg-red-700 text-white p-2 m-2 text-lg rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop printing
      </button>
    </div>
  );
};

export default Demo2;
