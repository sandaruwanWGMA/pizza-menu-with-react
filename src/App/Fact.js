import React, { useState } from "react";
import "./Acordations.css";

function Facts({ number, title, isHidden }) {
  const [isActive, setIsActive] = useState(false);
  const [hidden, setHidden] = useState(isHidden);
  console.log(hidden);

  return (
    <div
      onClick={() => setHidden(!hidden)}
      className={`hiddenBox ${isActive ? "active" : ""}`}
    >
      <h1 className={`${hidden ? "numberWhenHidden" : "number"}`}>{number}</h1>
      <h1 className={`${hidden ? "titleWhenHidden" : "title"}`}>{title}</h1>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`icon ${hidden ? "iconWhenHidden" : ""}`}
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
      <p className={`discription ${hidden ? "hidden" : ""}`}>
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length: a paragraph is a group of at least five
        sentences, a paragraph is half a page long, etc. In reality, though, the
        unity and coherence of ideas among sentences is what constitutes a
        paragraph.
      </p>
      <ul className={`${hidden ? "hidden" : "discriptionList"}`}>
        <li>Paragraphs are the building blocks of papers</li>
        <li>Many students define paragraphs in terms of length</li>
        <li>
          Paragraph is a group of at least five sentences, a paragraph is half a
          page long, etc
        </li>
      </ul>
    </div>
  );
}

export default Facts;
