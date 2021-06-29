import React, { useState } from "react";

import HeaderSample from "./HeaderSample";
import NavBar from "./components/NavBar";
import PrimaryButton from "./components/PrimaryButton";
import InvestmentForm from "./components/InvestmentForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	const [data, setData] = React.useState({});

	const handlePrimaryClick = () => {
		console.log("primary button clicked");
	};

	const handleInvestmentSubmit = (e: any) => {
		e.preventDefault();
		console.log(e.target.formBasicTicker.value);

		const ticker = e.target.formBasicTicker.value;
		const quantity = e.target.formBasicQuantity.value;

		const newInvestment = {
			ticker: ticker,
			quantity: quantity,
		};

		setData(newInvestment);

    console.log(data)
	};

	return (
		<div className="App">
			<NavBar />

			<PrimaryButton
				handlePrimaryClick={handlePrimaryClick}
				title={"Add investment"}
			/>
			<InvestmentForm handleInvestmentSubmit={handleInvestmentSubmit} />
		</div>
	);
}

export default App;
