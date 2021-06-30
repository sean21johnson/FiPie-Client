import React from "react";

import { Button, Form } from "react-bootstrap";

import "./CashForm.css";

interface CashFormProps {
	handleCashSubmit: any;
    handleCancel: any
}

const CashForm = ({ handleCashSubmit, handleCancel }: CashFormProps) => {
	return (
		<>
			<Form onSubmit={handleCashSubmit}>
				<Form.Group className="mb-3" controlId="formCashAmount">
					<Form.Label>Cash Amount USD</Form.Label>
					<Form.Control
						type="number"
						step="any"
						placeholder="Enter Cash Amount"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="cashInvestmentAccount">
					<Form.Label>Institutional Account</Form.Label>
					<Form.Control as="select" required>
						<option value="">Choose...</option>
						<option value="Capital One">Capital One</option>
						<option value="Charles Schwab">Charles Schwab</option>
						<option value="Chase Bank">Chase Bank</option>
						<option value="Fidelity">Fidelity</option>
						<option value="PNC Bank">PNC Bank</option>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="cashInvestmentType">
					<Form.Label>Checking or Savings</Form.Label>
					<Form.Control as="select" required>
						<option value="">Choose...</option>
						<option value="Checking">Checking</option>
						<option value="Savings">Savings</option>
					</Form.Control>
				</Form.Group>

				<Button variant="danger" onClick={handleCancel} className="cancel_button">
					Cancel
				</Button>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
};

export default CashForm;
