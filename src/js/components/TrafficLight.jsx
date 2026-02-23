import React, { useState } from "react";
import "../../styles/trafficLight.css";

const BASE_COLORS = ["red", "yellow", "green"];

const TrafficLight = () => {
	const [activeLight, setActiveLight] = useState("red");
	const [showPurple, setShowPurple] = useState(true);

	const colors = showPurple ? [...BASE_COLORS, "purple"] : BASE_COLORS;

	const selectLight = (color) => {
		setActiveLight((current) => (current === color ? null : color));
	};

	const cycleLight = () => {
		setActiveLight((current) => {
			if (current === null) return colors[0];

			const currentIndex = colors.indexOf(current);
			if (currentIndex === -1) return colors[0];

			const nextIndex = (currentIndex + 1) % colors.length;
			return colors[nextIndex];
		});
	};

	const togglePurple = () => {
		setShowPurple((current) => {
			const nextValue = !current;
			if (!nextValue) {
				setActiveLight((selected) => (selected === "purple" ? null : selected));
			}
			return nextValue;
		});
	};

	return (
		<div className="traffic-light-wrapper text-center">
			<div className="traffic-light-pole"></div>
			<div className="traffic-light">
				{colors.map((color) => (
					<div
						key={color}
						className={`light ${color} ${activeLight === color ? "glow" : ""}`}
						onClick={() => selectLight(color)}
					></div>
				))}
			</div>

			<div className="traffic-light-controls mt-4 d-flex flex-wrap gap-2 justify-content-center">
				<button className="btn btn-primary" onClick={cycleLight}>
					Next Light
				</button>
				<button className="btn btn-secondary" onClick={() => setActiveLight(null)}>
					Reset
				</button>
				<button className="btn btn-dark" onClick={togglePurple}>
					{showPurple ? "Remove Purple" : "Add Purple"}
				</button>
			</div>

			<p className="mt-3 mb-0 text-light">
				{activeLight ? `Active: ${activeLight.toUpperCase()}` : "No light selected"}
			</p>
		</div>
	);
};

export default TrafficLight;
