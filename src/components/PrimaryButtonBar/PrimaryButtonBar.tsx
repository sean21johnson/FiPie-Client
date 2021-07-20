import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

interface PrimaryButtonBarProps {
    onCashFormStatus: any,
    onInvestmentFormStatus: any,
    onExpenseFormStatus: any
}

const PrimaryButtonBar: React.FC<PrimaryButtonBarProps> = ({ onCashFormStatus, onInvestmentFormStatus, onExpenseFormStatus }) => {
	return (
		<div className="buttonbar">
			<div className="buttonbar_button">
				<PrimaryButton
					handleButtonClick={onCashFormStatus}
					title={"Add Cash"}
				/>
			</div>
			<div className="buttonbar_button">
				<PrimaryButton
					handleButtonClick={onInvestmentFormStatus}
					title={"Add Investment"}
				/>
			</div>
			<div className="buttonbar_button">
				<PrimaryButton
					handleButtonClick={onExpenseFormStatus}
					title={"Add Expense"}
				/>
			</div>
		</div>
	);
};

export default PrimaryButtonBar;
