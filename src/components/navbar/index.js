import React from "react";
import "./style.css";

const NavBar = ({ onRulesClick }) => {
	const handleRulesClick = (e) => {
		e.preventDefault();
		onRulesClick(); // Call the function passed from parent component to handle rules click
	};

	return (
		<nav className="navbar">
			<ul className="nav-list">
				<li>
					<a href="#rules" onClick={handleRulesClick}>Rules</a>
				</li>
				<li>
					<a href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank">About</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
