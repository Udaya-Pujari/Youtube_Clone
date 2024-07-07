import React from "react";

//I have recived the prop from ButtonList component and recived the props here in the Button component
const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
