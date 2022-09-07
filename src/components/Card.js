import React from "react";
import cardRevers from "../img/question-mark.jpeg";

const cardStyles = {
  cursor: "pointer",
};

function Card(props) {
  const { selected, clickHandler, index } = props;
  return (
    <div 
      className={"card col-2 m-4 p-2 shadow-lg" + (selected ? "border border-danger" : "")} 
      style={cardStyles}
      onClick={() => clickHandler(index)} >
      <img src={selected ? cardRevers : cardRevers} />
    </div>
  );
}

export default Card;
