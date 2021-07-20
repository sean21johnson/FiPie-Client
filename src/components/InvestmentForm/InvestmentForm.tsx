import React from "react";

import { Button, Form } from "react-bootstrap";

interface InvestmentFormProps {
	handleInvestmentSubmit: any,
	handleCancel: any
}


// cashObj = {
//     originalCashAmount: number,
//     originalCashValue: number,
//     institutionalAccount: "Capital One", "Charles Schwab", "Chase Bank", "Fidelity", "PNC Bank",
//     cashAccountType: "Checking", "Savings"
// }

// expenseObj = {
//     originalCashAmount: number,
//     originalCashValue: number,
//     instutionalAccount: "Capital One", "Charles Schwab", "Chase Bank", "Fidelity", "PNC Bank",
//     cashAccountType: "Checking"
// }

// investmentObj = {
//     ticker: string,
//     quantity: number,
//     averagePrice: number,
//     originalCashValue: number,
//     vehicle: "Index Fund", "Stock", "Cryptocurrency",
//     institutionalAccount: "Capital One", "Charles Schwab", "Chase Bank", "Fidelity", "PNC Bank",
//     cashAccountType: "Checking", "Savings", "Investment",
//     accountPortfolio: "Personal", "401K", "Roth IRA"
// }

const InvestmentForm = ({ handleInvestmentSubmit, handleCancel }: InvestmentFormProps) => {
	return (
		<Form onSubmit={handleInvestmentSubmit}>
			<Form.Group className="mb-3" controlId="formTicker">
				<Form.Label>Investment Ticker</Form.Label>
				<Form.Control type="text" placeholder="Enter Ticker" required />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formQuantity">
				<Form.Label>Quantity Purchased</Form.Label>
				<Form.Control
					type="number"
					step="any"
					placeholder="Enter # of Units"
					required
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formPrice">
				<Form.Label>Average Price Purchased</Form.Label>
				<Form.Control
					type="number"
					step="any"
					placeholder="Enter Average Price $"
					required
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formInvestmentVehicle">
				<Form.Label>Investment Vehicle</Form.Label>
				<Form.Control as="select" required>
					<option value="">Choose...</option>
					<option value="Stock">Stock</option>
					<option value="Index Fund">Index Fund</option>
					<option value="Cryptocurrency">Cryptocurrency</option>
				</Form.Control>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formInvestmentAccount">
				<Form.Label>Institutional Account</Form.Label>
				<Form.Control as="select" required>
					<option value="">Choose...</option>
					<option value="Capital One">Capital One</option>
					<option value="Charles Schwab">Charles Schwab</option>
					<option value="Chase Bank">Chase Bank</option>
					<option value="Fidelity">Fidelity</option>
					<option value="PNC Bank">PNC Bank</option>
					<option value="Coinbase">Coinbase</option>
				</Form.Control>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formInvestmentPortfolio">
				<Form.Label>Investment Type</Form.Label>
				<Form.Control as="select" required>
					<option value="">Choose...</option>
					<option value="Personal">Personal</option>
					<option value="401k">401K</option>
					<option value="ROTH IRA">ROTH IRA</option>
				</Form.Control>
			</Form.Group>

			
			<Button variant="danger" onClick={handleCancel} className="cancel_button">
					Cancel
				</Button>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default InvestmentForm;
