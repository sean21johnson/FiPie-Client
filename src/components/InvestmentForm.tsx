import React from "react";

import { Form, Button } from "react-bootstrap";

interface InvestmentFormProps {
	handleInvestmentSubmit: any
} 

const InvestmentForm = ({ handleInvestmentSubmit }: InvestmentFormProps) => {
	return (
		<Form onSubmit={handleInvestmentSubmit}>
			<Form.Group className="mb-3" controlId="formBasicTicker">
				<Form.Label>Investment Ticker</Form.Label>
				<Form.Control type="text" placeholder="Enter Ticker" required/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicQuantity">
				<Form.Label>Quantity Purchased</Form.Label>
				<Form.Control type="number" placeholder="Enter # of Units" required/>
			</Form.Group>

{/* 
			<Form.Select aria-label="Default select example">
				<option>Open this select menu</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</Form.Select> */}

			<Button variant="primary" type="submit" >
				Submit
			</Button>
		</Form>
	);
};

export default InvestmentForm;
