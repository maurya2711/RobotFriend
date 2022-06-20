import React from "react";
import "./Card.css";
// import ReactDom from "react-dom";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3  ma2 pa3 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?100x100`}
        alt="RoboFriend"
        className="image"
      />
      <div>
        <h2>{name}</h2>
        <p> {email} </p>
      </div>
    </div>
  );
};

export default Card;
