import React from "react";
import "./CustomerReviews.css";

function CustomerReviews({review, name}) {
  return (
    <div className="container">
      <img className="myImage" src={require(`./Images/molindu.jpeg`)}></img>
      <blockquote>
        <p>{review}</p>
        <p style={{ color: "#e9ecef" }}>{name}</p>
      </blockquote>
    </div>
  );
}

export default CustomerReviews;
