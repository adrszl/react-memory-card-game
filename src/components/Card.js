import React from "react";
import cardRevers from "../img/question-mark.jpeg";

const cardStyles = {
  cursor: "pointer",
};

function Card() {
  return (
    <div className="card col-2 m-4 p-2 shadow-lg" style={cardStyles}  >
      <img src={cardRevers} />
    </div>
  );
}

export default Card;
