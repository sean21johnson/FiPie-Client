import React from "react";

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

	console.log("cashData is", cashData);

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
			originalCashValue: purchaseValue,
			vehicle: investmentVehicle,
			account: investmentAccount,
			accountType: investmentType,
		};

		setInvestmentData([...investmentData, { ...newInvestment }]);

		e.target.formTicker.value = "";
		e.target.formQuantity.value = "";
		e.target.formPrice.value = "";
		e.target.formInvestmentVehicle.value = "";
		e.target.formInvestmentAccount.value = "";
		e.target.formInvestmentType.value = "";

		setInvestmentFormStatus(false);
	};

	const handleCashSubmit = (e: any) => {
		e.preventDefault();

		const cashAmount = e.target.formCashAmount.value * 1;
		const cashValue = e.target.formCashAmount.value * 1;
		const cashAccount = e.target.cashAccount.value;
		const cashType = e.target.cashType.value;

		const newCash = {
			originalCashAmount: cashAmount,
			originalCashValue: cashValue,
			account: cashAccount,
			accountType: cashType,
		};

		setCashData([...cashData, { ...newCash }]);

		e.target.formCashAmount.value = "";
		e.target.cashAccount.value = "";
		e.target.cashType.value = "";

		setCashFormStatus(false);
	};

	const handleExpenseSubmit = (e: any) => {
		e.preventDefault();

		const expenseAmount = e.target.formExpenseAmount.value * -1;
		const expenseValue = e.target.formExpenseAmount.value * -1;
		const expenseAccount = e.target.formInvestmentAccount.value;
		const expenseType = "Checking";

		const newExpense = {
			originalCashAmount: expenseAmount,
			originalCashValue: expenseValue,
			account: expenseAccount,
			accountType: expenseType,
		};

		setExpenseData([...expenseData, { ...newExpense }]);

		e.target.formExpenseAmount.value = "";
		e.target.formInvestmentAccount.value = "";

		setExpenseFormStatus(false);
	};

	const handleCancel = () => {
		setCashFormStatus(false);
		setInvestmentFormStatus(false);
	};

	const getFinancialData = () => {
		let allFinancialData: Array<any>;
		allFinancialData = [];

		// Investment Data
		// Cash Data
		// Expense Data

		allFinancialData = [...investmentData];

		console.log('allFinancialData in getFinancialData is', allFinancialData)

		return allFinancialData;
	};

	console.log('cashData is', cashData)

	// pass allFinancialData into a few different functions to get the data arrays that I need to pass to the pieCharts

	// getCheckingBalance
	// loop through the allFinancialData array and add up the originalCashValue amounts for those that have an accountType of "Checking"

	const getCheckingBalance = () => {
		let allFinancialData: Array<any>;
		let checkingArr: Array<any>;
		let checkingAmount: number;
		let checkingFinancialData: Array<any>;

		allFinancialData = getFinancialData();
		checkingFinancialData = [...allFinancialData];

		checkingArr = checkingFinancialData.filter(
			(item) => item.accountType === "Checking"
		);

		checkingArr.length > 0
			? (checkingAmount = checkingArr.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.originalCashValue;
			  }, 0))
			: (checkingAmount = 0);

		return checkingAmount;
	};

	const getSavingsBalance = () => {
		let allFinancialData: Array<any>;
		let savingsArr: Array<any>;
		let savingsAmount: number;
		let savingsFinancialData: Array<any>;

		allFinancialData = getFinancialData();
		savingsFinancialData = [...allFinancialData];

		savingsArr = savingsFinancialData.filter(
			(item) => (item.accountType = "Savings")
		);

		savingsArr.length > 0
			? (savingsAmount = savingsArr.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.originalCashValue;
			  }, 0))
			: (savingsAmount = 0);

		return savingsAmount;
	};

	const checkingAndSavingsData = () => {
		let checkingAndSavingsArr: Array<any>;
		let savingsAmount: number;
		let checkingAmount: number;
		let checkingObj: object;
		let savingsObj: object;

		savingsAmount = getSavingsBalance();
		checkingAmount = getCheckingBalance();

		checkingObj = {
			title: "Checking",
			value: checkingAmount,
			color: "#FF5733",
		};

		savingsObj = {
			title: "Savings",
			value: savingsAmount,
			color: "#33FFF6",
		};

		checkingAndSavingsArr = [checkingObj, savingsObj];

		return checkingAndSavingsArr;
	};

	// getSavingsBalance

	// getCryptoBalance

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

			<CashPieChart data={checkingAndSavingsData()}> </CashPieChart>
		</div>
	);
}

export default App;
