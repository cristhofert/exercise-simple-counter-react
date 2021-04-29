//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { SecondsCounter } from "./component/secondscounter.js";

let contador = 0;

setInterval(() => {
	//render your react application
	contador++;
	let first = Math.floor(contador / 100000);
	let firstDigits = Array.from(String(first), Number);
	let second = Math.floor(contador / 10000);
	let secondDigits = Array.from(String(second), Number);
	let third = Math.floor(contador / 1000);
	let thirdDigits = Array.from(String(third), Number);
	let fourth = Math.floor(contador / 100);
	let fourthDigits = Array.from(String(fourth), Number);
	let fifth = Math.floor(contador / 10);
	let fifthDigits = Array.from(String(fifth), Number);
	let sixth = Math.floor(contador);
	let sixthDigits = Array.from(String(sixth), Number);
	ReactDOM.render(
		<SecondsCounter
			first={firstDigits[firstDigits.length - 1]}
			second={secondDigits[secondDigits.length - 1]}
			third={thirdDigits[thirdDigits.length - 1]}
			fourth={fourthDigits[fourthDigits.length - 1]}
			fifth={fifthDigits[fifthDigits.length - 1]}
			sixth={sixthDigits[sixthDigits.length - 1]}
		/>,
		document.querySelector("#app")
	);
}, 1000);
