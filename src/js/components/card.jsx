import React from "react";
import "../../styles/index.css";

const Card = (props) => {
  const { image, title, description } = props.cards;
  return (
    <div className="custom-card">
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={title} />
          <h5>{title}</h5>
        </div>
        <div className="card-back">
          <p>{description}</p>
          <button className="btn">Find out More!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
