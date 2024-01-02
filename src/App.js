import React, { useState } from "react";
import Board from "./components/board";
import Info from "./components/info";
import Header from "./components/header";
import NavBar from "./components/navbar";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
	Label,
	Form,
	FormGroup,
} from "reactstrap";
import "./App.css";

const App = () => {
	const [reset, setReset] = useState(false);
	const [winner, setWinner] = useState("");
	const [showRulesModal, setShowRulesModal] = useState(false); // State to control the rules modal

	const toggleRulesModal = () => {
		setShowRulesModal(!showRulesModal); // Toggles the display of rules modal
	};

	const resetBoard = () => {
		setReset(true);
		setWinner("");
	};

	return (
		<div className="App">
			<NavBar NavBar onRulesClick={toggleRulesModal} />
			<Header />
			<div className={`winner ${winner !== "" ? "" : "shrink"}`}>
				<div className="winner-text">{winner}</div>
				<button onClick={() => resetBoard()}>Reset Board</button>
			</div>
			<Board
				reset={reset}
				setReset={setReset}
				winner={winner}
				setWinner={setWinner}
			/>
			<Info />

			{/* Rules Modal */}
			<Modal isOpen={showRulesModal} toggle={toggleRulesModal}>
				<ModalHeader toggle={toggleRulesModal}>Rules</ModalHeader>
				<ModalBody>
					{/* Place your rules or information here */}
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggleRulesModal}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default App;
