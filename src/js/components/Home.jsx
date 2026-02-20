import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red")
	return (
		<div className="counter">
			<div onClick={() => setColor("red")} className={`circle ${color === "red" ? "red-on" : "red-off"}`}></div>
			<div onClick={() => setColor("yellow")} className={`circle ${color === "yellow" ? "yellow-on" : "yellow-off"}`}></div>
			<div onClick={() => setColor("green")} className={`circle ${color === "green" ? "green-on" : "green-off"}`}></div>
			<div onClick={() => setColor("purple")} className={`circle ${color === "purple" ? "purple-on" : "purple-off"}`}></div>

		</div>
	);
	
};

export default Home;