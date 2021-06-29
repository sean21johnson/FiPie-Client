import React from "react";
import { Button } from "react-bootstrap";
import "./PrimaryButton.css";

interface ButtonComponentProps {
	handlePrimaryClick: any,
	title: string
}

const PrimaryButton = ({ handlePrimaryClick, title }: ButtonComponentProps) => {
	return (
		<>
			<Button
				onClick={handlePrimaryClick}
				className="investment-button"
				variant="outline-primary"
			>
				{title}
			</Button>
		</>
	);
};

export default PrimaryButton;
