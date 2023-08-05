import logo from "./logo.svg";
import "./App.css";
import PizzaMenu from "./App/PizzaMenu";
import Pizza from "./App/Pizza";
import pizzaData from "./App/data";
import { useEffect, useState } from "react";

function App() {
  function twoDigitNumber(number) {
    return number < 10 ? `0${number}` : number.toString();
  }

  const closedHour = 23;

  let currentDate = "";
  let time = "";
  let currentMinute = 0;
  let amORpm = "";
  let hour = 0;
  var currentHour = 0;
  let currentSecond = 0;

  const [currentTime, setCurrentTime] = useState(time);

  function updateTime() {
    currentDate = new Date();
    currentHour = currentDate.getHours();
    currentSecond = currentDate.getSeconds();
    currentMinute = currentDate.getMinutes();

    amORpm = currentHour >= 12 ? "pm" : "am";
    hour = currentHour > 12 ? currentHour - 12 : currentHour;
    time = `${hour} : ${twoDigitNumber(currentMinute)} : ${twoDigitNumber(
      currentSecond
    )} ${amORpm}`;
    setCurrentTime(time);
  }

  useEffect(() => {
    updateTime();
  }, []);

  const isOpen = currentHour < closedHour;

  const intervalId = setInterval(updateTime, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 10000);

  return (
    <>
      <h1 id="pizzaMenu"> Pizza MENU</h1>
      <PizzaMenu></PizzaMenu>
      <footer>
        {isOpen ? (
          <p className="status">
            We are Open till 10.00 pm & You are welcome to our retaurant
          </p>
        ) : (
          <p>We are closed!</p>
        )}
        <p style={{fontSize: "24px"}}>Time is {currentTime}</p>
      </footer>
    </>
  );
}

export default App;
