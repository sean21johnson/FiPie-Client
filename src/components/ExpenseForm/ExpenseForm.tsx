import React from "react";

import { Button, Form } from "react-bootstrap";

interface ExpenseFormProps {
    handleExpenseSubmit: any,
    handleCancel: any
}

const ExpenseForm = ({ handleExpenseSubmit, handleCancel }: ExpenseFormProps) => {
    return (

		<Form onSubmit={handleExpenseSubmit}>
				<Form.Group className="mb-3" controlId="formExpenseAmount">
					<Form.Label>Cash Amount USD</Form.Label>
					<Form.Control
						type="number"
						step="any"
						placeholder="Enter Expense Amount"
						required
					/>
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
				</Form.Control>
			</Form.Group>


			
			<Button variant="danger" onClick={handleCancel} className="cancel_button">
					Cancel
				</Button>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>

        
    )
}

export default ExpenseForm;