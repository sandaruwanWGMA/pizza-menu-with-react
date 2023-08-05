import React from "react";
import pizzaData from "./data";
import Pizza from "./Pizza";
import "./PizzaMenu.css"

function PizzaMenu(props) {
  return (
    <div className="pizzaMenu">
      {pizzaData.map((pizza) => (
        <Pizza pizza={pizza} key={pizza.name} />
      ))}
    </div>
  );
}

export default PizzaMenu;
