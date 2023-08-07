import React from "react";
import "./CustomerReviews.css";

function CustomerReviews(props) {
  return (
    <div className="container">
        <img className="myImage" src={require(`./Images/molindu.jpeg`)}></img>
        <p>
          The AI system has complete visibility into all aspects of the
          building's energy consumption at all times, allowing it to accurately
          monitor and optimize energy usage.
        </p>
    </div>
  );
}

export default CustomerReviews;
