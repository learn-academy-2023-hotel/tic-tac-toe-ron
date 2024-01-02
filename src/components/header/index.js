import React from "react";
import Typewriter from "typewriter-effect";
import "./style.css";

const Header = () => {
	const gameHeader = {
		title: "Tic-Tac-Toe",
	};
	return (
		<header className="header">
			<h1>
        Welcome to
				<Typewriter
					options={{
						strings: [gameHeader.title],
						autoStart: true,
						loop: true,
						deleteSpeed: 100,
            cursor: "",
            pauseFor: 5000
					}}
				/>
			</h1>
		</header>
	);
};

export default Header;
