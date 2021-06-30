import React from "react";
// import ReactSvgPieChart from "react-svg-piechart";
import { PieChart } from 'react-minimal-pie-chart'


import NavBar from "./components/NavBar";
import PrimaryButton from "./components/PrimaryButton";
import InvestmentForm from "./components/InvestmentForm";
import CashForm from "./components/CashForm";
import ExpenseForm from "./components/ExpenseForm";
import CashPieChart from "./components/CashPieChart";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	const [investmentData, setInvestmentData] = React.useState([{}]);
	const [investmentFormStatus, setInvestmentFormStatus] = React.useState(false);
	const [cashData, setCashData] = React.useState([{}]);
	const [cashFormStatus, setCashFormStatus] = React.useState(false);
	const [expenseData, setExpenseData] = React.useState([{}]);
	const [expenseFormStatus, setExpenseFormStatus] = React.useState(false);

	const handleInvestmentFormStatus = () => {
		investmentFormStatus
			? setInvestmentFormStatus(false)
			: setInvestmentFormStatus(true);

		setCashFormStatus(false);
		setExpenseFormStatus(false);
	};

	const handleExpenseFormStatus = () => {
		expenseFormStatus
			? setExpenseFormStatus(false)
			: setExpenseFormStatus(true);

		setCashFormStatus(false);
		setInvestmentFormStatus(false);
	};

	const handleCashFormStatus = () => {
		cashFormStatus ? setCashFormStatus(false) : setCashFormStatus(true);

		setInvestmentFormStatus(false);
		setExpenseFormStatus(false);
	};

	const handleInvestmentSubmit = (e: any) => {
		e.preventDefault();

		const ticker = e.target.formTicker.value;
		const quantity = e.target.formQuantity.value * 1;
		const price = e.target.formPrice.value * 1;
		const purchaseValue = quantity * price;
		const investmentVehicle = e.target.formInvestmentVehicle.value;
		const investmentAccount = e.target.formInvestmentAccount.value;
		const investmentType = e.target.formInvestmentType.value;

		const newInvestment = {
			ticker: ticker.toUpperCase(),
			quantity: quantity,
			averagePrice: price,
			purchaseValue: purchaseValue,
			investmentVehicle: investmentVehicle,
			investmentAccount: investmentAccount,
			investmentType: investmentType,
		};

		setInvestmentData([...investmentData, { investment: newInvestment }]);

		e.target.formTicker.value = "";
		e.target.formQuantity.value = "";
		e.target.formPrice.value = "";
		e.target.formInvestmentVehicle.value = "";
		e.target.formInvestmentAccount.value = "";
		e.target.formInvestmentType.value = "";

		setInvestmentFormStatus(false)
	};

	const handleCashSubmit = (e: any) => {
		e.preventDefault();

		const cashAmount = e.target.formCashAmount.value * 1;
		const cashValue = cashAmount;
		const cashAccount = e.target.cashInvestmentAccount.value;
		const cashType = e.target.cashInvestmentType.value;

		const newCash = {
			cashAmount: cashAmount,
			cashValue: cashValue,
			cashAccount: cashAccount,
			cashType: cashType,
		};

		setCashData([...cashData, { ...newCash }]);

		e.target.formCashAmount.value = "";
		e.target.cashInvestmentAccount.value = "";
		e.target.cashInvestmentType.value = "";

		setCashFormStatus(false)
	};

	const handleExpenseSubmit = (e: any) => {
		e.preventDefault();

		const expenseAmount = e.target.formExpenseAmount.value * -1;
		const expenseValue = expenseAmount;
		const expenseAccount = e.target.formInvestmentAccount.value;
		const expenseType = "Checking";

		const newExpense = {
			expenseAmount: expenseAmount,
			expenseValue: expenseValue,
			expenseAccount: expenseAccount,
			expenseType: expenseType,
		};

		setExpenseData([...expenseData, { expense: newExpense }]);

		e.target.formExpenseAmount.value = "";
		e.target.formInvestmentAccount.value = "";

		setExpenseFormStatus(false)
	};

	const handleCancel = () => {
		setCashFormStatus(false);
		setInvestmentFormStatus(false);
	};

	return (
		<div className="App">
			<NavBar />

			<PrimaryButton
				handleButtonClick={handleCashFormStatus}
				title={"Add Cash"}
			/>
			<PrimaryButton
				handleButtonClick={handleInvestmentFormStatus}
				title={"Add Investment"}
			/>
			<PrimaryButton
				handleButtonClick={handleExpenseFormStatus}
				title={"Add Expense"}
			/>

			{investmentFormStatus ? (
				<InvestmentForm
					handleInvestmentSubmit={handleInvestmentSubmit}
					handleCancel={handleCancel}
				/>
			) : (
				""
			)}

			{cashFormStatus ? (
				<CashForm
					handleCashSubmit={handleCashSubmit}
					handleCancel={handleCancel}
				/>
			) : (
				""
			)}

			{expenseFormStatus ? (
				<ExpenseForm
					handleExpenseSubmit={handleExpenseSubmit}
					handleCancel={handleCancel}
				/>
			) : (
				""
			)}

			<CashPieChart cashData={cashData}> </CashPieChart>
		</div>
	);
}

export default App;
