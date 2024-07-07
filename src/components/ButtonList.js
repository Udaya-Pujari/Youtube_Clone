import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "News",
    "Coocking",
    "Valantine",
    "Kannada Songs",
    "Hockey",
  ];

  return (
    <div className="flex">
      {/* insted of writing these many many buttons I am creating a list of buttons and map them */}
      {/* <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Coocking" />
      <Button name="Valantine" /> */}

      {list.map((items, index) => (
        <Button key={index} name={items} />
      ))}
    </div>
  );
};

export default ButtonList;
