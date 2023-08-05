import React from "react";
import pizzaData from "./data";
import "./pizza.css"

function Pizza({ pizza }) {
  return (
    <div className={`pizzaItem ${pizza.soldOut ? "soldOut" : ""}`}>
      <img
        className={`pizzaImage ${pizza.soldOut ? "soldOut" : ""}`}
        src={require(`./pizzas/${pizza.photoName}`)}
        alt="pizza img"
      ></img>
      <div className="details">
        <p className="pizzaName">{pizza.name}</p>
        <p>{pizza.ingredients}</p>
        {pizza.soldOut ? <p>SoldOut</p> : <p>{pizza.price}</p>}
      </div>
    </div>
  );
}

export default Pizza;
