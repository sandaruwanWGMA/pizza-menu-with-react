import logo from "./logo.svg";
import "./App.css";
import PizzaMenu from "./App/PizzaMenu";
import Pizza from "./App/Pizza";
import pizzaData from "./App/data";
import { useEffect, useState } from "react";
import Facts from "./App/Fact";

function App() {

  function twoDigitNumber(number) {
    return number < 10 ? `0${number}` : number.toString();
  }

  const openingHour = 8;
  const closedHour = 20;

  let currentDate = "";
  let time = "";
  let currentMinute = 0;
  let amORpm = "";
  let hour = 0;
  var currentHour = 0;
  let currentSecond = 0;

  let [currentTime, setCurrentTime] = useState(time);
  let [isOpen, setopen] = useState(false);

  function updateTime() {
    currentDate = new Date();
    currentHour = currentDate.getHours();
    currentSecond = currentDate.getSeconds();
    currentMinute = currentDate.getMinutes();
    isOpen = currentHour < closedHour;

    amORpm = currentHour >= 12 ? "pm" : "am";
    hour = currentHour > 12 ? currentHour - 12 : currentHour;
    time = `${hour} : ${twoDigitNumber(currentMinute)} : ${twoDigitNumber(
      currentSecond
    )} ${amORpm}`;
    setCurrentTime(time);
  }

  useEffect(() => {
    updateTime();
    setopen(isOpen);
  }, []);

  setInterval(updateTime, 1000);

  return (
    <>
      <h1 id="pizzaMenu"> Pizza MENU</h1>
      <PizzaMenu></PizzaMenu>
      <div className="status">
        {isOpen ? (
          <p>
            {`We are Open till ${
              closedHour - 12
            }.00 pm & You are welcome to our retaurant`}
          </p>
        ) : (
          <p style={{ fontSize: "18px", color: "tomato" }}>
            We are closed now! Open at {openingHour} a.m
          </p>
        )}
        <p style={{ fontSize: "24px" }}>Time is {currentTime}</p>
      </div>
      <Facts
        title="Some interesting facts about restaurant"
        number="01"
        isHidden={true}
      ></Facts>
    </>
  );
}

export default App;
