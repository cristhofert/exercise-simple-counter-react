import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const SecondsCounter = props => {
	return (
		<div className="container ">
			<div className="row">
				<div
					className=" mt-5 text-white p-3 d-inline text-center font-weight-bold m-auto"
					style={{ backgroundColor: "#000" }}>
					<h5
						className="text-white m-1 p-2 mt-5 d-inline"
						style={{ backgroundColor: "#262626", width: "20px" }}>
						{props.first}
					</h5>
					<h5
						className="text-white m-1 p-2 mt-5 d-inline"
						style={{ backgroundColor: "#262626", width: "20px" }}>
						{props.second}
					</h5>
					<h5
						className="text-white m-1 p-2 mt-5 d-inline"
						style={{ backgroundColor: "#262626", width: "20px" }}>
						{props.third}
					</h5>
					<h5
						className="text-white m-1 p-2 mt-5 d-inline"
						style={{ backgroundColor: "#262626", width: "20px" }}>
						{props.fourth}
					</h5>
					<h5
						className="text-white m-1 p-2 mt-5 d-inline"
						style={{ backgroundColor: "#262626", width: "20px" }}>
						{props.fifth}
					</h5>
					<h5
						className="text-white m-1 p-2 mt-5 d-inline"
						style={{ backgroundColor: "#262626", width: "20px" }}>
						{props.sixth}
					</h5>
				</div>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	first: PropTypes.number,
	second: PropTypes.number,
	third: PropTypes.number,
	fourth: PropTypes.number,
	fifth: PropTypes.number,
	sixth: PropTypes.number
};
