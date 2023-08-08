import React, { useState } from "react";
import "./Acordations.css";

function Facts({ number, title, isHidden }) {
  const [isActive, setIsActive] = useState(false);
  const [hidden, setHidden] = useState(isHidden);

  return (
    <div
      onClick={() => {
        setIsActive(true);
        setHidden(!hidden);
        console.log(isActive);
      }}
      className={`hiddenBox ${isActive ? "active" : ""} ${
        !hidden ? "NotHidden" : ""
      }`}
    >
      <h1 className="number">{number}</h1>
      <h1 className="title">{title}</h1>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            hidden
              ? "M19.5 8.25l-7.5 7.5-7.5-7.5"
              : "M4.5 15.75l7.5-7.5 7.5 7.5"
          }
        />
      </svg>
      <p className="description">
        Pizzeria is a charming Italian-inspired pizza restaurant located in the
        heart of Anytown. With a commitment to delivering authentic flavors and
        quality ingredients, we offer a diverse menu that caters to all pizza
        enthusiasts. Our cozy and inviting ambiance provides the perfect setting
        for family gatherings, date nights, and casual outings.
      </p>
      <ul className="descriptionList">
        <li>Restaurant Name: Pizzeria</li>
        <li>Location: 123 Main Street, Anytown, USA</li>
        <li>Phone Number: (555) 123-4567</li>
      </ul>
    </div>
  );
}

export default Facts;
