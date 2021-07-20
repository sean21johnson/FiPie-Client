import React from "react";
import { Button } from "react-bootstrap";
import "./PrimaryButton.css";

interface ButtonComponentProps {
	handleButtonClick: any,
	title: string
}

const PrimaryButton: React.FC<ButtonComponentProps> = ({ handleButtonClick, title }) => {
	return (
		<>
			<Button
				onClick={handleButtonClick}
				className="investment-button"
				variant="outline-primary"
			>
				{title}
			</Button>
		</>
	);
};

export default PrimaryButton;
