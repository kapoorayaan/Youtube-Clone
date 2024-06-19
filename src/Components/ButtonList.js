import React from "react";
import Button from "./Button";
const List = [
  "All",
  "News",
  "Music",
  "Movies",
  "Gaming",
  "Study",
  "Cricket",
  "Football",
  "Esports",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {List.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
