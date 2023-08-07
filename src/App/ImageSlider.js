import React, { useState } from "react";
import "./ImageSlider.css";

const pizzaImages = [
  "https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?b=1&s=170667a&w=0&k=20&c=pobf9fs5EsiNZMuyrq_44Y3LT8c4cz7_jmxvgQPclY4=",
  "https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.webp?b=1&s=170667a&w=0&k=20&c=QRY0Pvxx2u6GT7sh7pULn5SRh2dh5zD9DOmOj9cQF18=",
  "https://media.istockphoto.com/id/1301482898/photo/pepperoni-pizza-on-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=ULNbqiJ3sLVoKy3RwtBY6DuOPc0bXm8S87TnCmKPEfg=",
  "https://media.istockphoto.com/id/1198079266/photo/deluxe-pizza-with-pepperoni-sausage-mushrooms-and-peppers.webp?b=1&s=170667a&w=0&k=20&c=Jmt_A91qLtE2YIDbBxYdqaCJ397haq0ZzWPHLlhtQw0=",
];

function ImageSlider(props) {
  const [currentImage, setCurrentImage] = useState(0);

  console.log(currentImage);

  function updateImage(name) {
    if (name === "left" && currentImage === 0) {
      setCurrentImage(pizzaImages.length - 1);
      } else if (name === "right" && currentImage === pizzaImages.length - 1) {
      setCurrentImage(0);
    } else {
      name === "right"
        ? setCurrentImage(currentImage + 1)
        : setCurrentImage(currentImage - 1);
    }
  }

  return (
    <div className="imageContainer">
      <div className="icon-box left-icon-box">
        <svg
          onClick={() => updateImage("left")}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="icon icon-left"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      <img className="pizzaImg" src={pizzaImages[currentImage]} alt="" />
      <div className="icon-box right-icon-box">
        <svg
          onClick={() => updateImage("right")}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="icon icon-right"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default ImageSlider;
