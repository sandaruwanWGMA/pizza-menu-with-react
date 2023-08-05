import React from "react";
import pizzaData from "./data";
import "./pizza.css"

function Pizza({ pizza }) {
  return (
    <div className="pizzaItem">
      <img
        className="pizzaImage"
        src={require(`./pizzas/${pizza.photoName}`)}
        alt="pizza img"
      ></img>
      <div className="details">
        <p className="pizzaName">{pizza.name}</p>
        <p>{pizza.ingredients}</p>
        <p>{pizza.price}</p>
      </div>
    </div>
  );
}

export default Pizza;
