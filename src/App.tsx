import React from "react";

import NavBar from "./components/NavBar";
import PrimaryButton from "./components/PrimaryButton";
import InvestmentForm from "./components/InvestmentForm";
import CashForm from "./components/CashForm";
import ExpenseForm from "./components/ExpenseForm";
import MyPieChart from "./components/MyPieChart";
// import { getFinancialData } from "./financialUtilities";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	let investmentData: Array<any>;
	let setInvestmentData: any;
	let investmentFormStatus: boolean;
	let setInvestmentFormStatus: any;
	let cashData: Array<any>;
	let setCashData: any;
	let cashFormStatus: boolean;
	let setCashFormStatus: any;
	let expenseData: Array<any>;
	let setExpenseData: any;
	let expenseFormStatus: boolean;
	let setExpenseFormStatus: any;

	[investmentData, setInvestmentData] = React.useState([]);
	[investmentFormStatus, setInvestmentFormStatus] = React.useState(false);
	[cashData, setCashData] = React.useState([]);
	[cashFormStatus, setCashFormStatus] = React.useState(false);
	[expenseData, setExpenseData] = React.useState([]);
	[expenseFormStatus, setExpenseFormStatus] = React.useState(false);

	// HANDLE FORM STATUSES
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

	// HANDLE FORM SUBMISSIONS
	const handleInvestmentSubmit = (e: any) => {
		e.preventDefault();

		const ticker = e.target.formTicker.value;
		const quantity = e.target.formQuantity.value * 1;
		const price = e.target.formPrice.value * 1;
		const purchaseValue = quantity * price;
		const investmentVehicle = e.target.formInvestmentVehicle.value;
		const investmentAccount = e.target.formInvestmentAccount.value;
		const investmentPortfolio = e.target.formInvestmentPortfolio.value;

		const newInvestment = {
			ticker: ticker.toUpperCase(),
			quantity: quantity,
			averagePrice: price,
			originalCashValue: purchaseValue,
			vehicle: investmentVehicle,
			account: investmentAccount,
			accountType: "",
			accountPortfolio: investmentPortfolio,
		};

		setInvestmentData([...investmentData, { ...newInvestment }]);

		e.target.formTicker.value = "";
		e.target.formQuantity.value = "";
		e.target.formPrice.value = "";
		e.target.formInvestmentVehicle.value = "";
		e.target.formInvestmentAccount.value = "";
		e.target.formInvestmentPortfolio.value = "";

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

	// HANDLE CANCEL BUTTON CLICKED
	const handleCancel = () => {
		setCashFormStatus(false);
		setInvestmentFormStatus(false);
	};

	// AGGREGATE ALL FINANCIAL DATA
	const getFinancialData = () => {
		let allFinancialData: Array<any>;
		allFinancialData = [...cashData, ...investmentData, ...expenseData];
		return allFinancialData;
	};

	// GET SPECIFIC BALANCES
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
			(item) => item.accountType === "Savings"
		);

		savingsArr.length > 0
			? (savingsAmount = savingsArr.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.originalCashValue;
			  }, 0))
			: (savingsAmount = 0);

		return savingsAmount;
	};

	const getCryptoBalance = () => {
		let allFinancialData: Array<any>;
		let cryptoArr: Array<any>;
		let cryptoAmount: number;
		let cryptoFinancialData: Array<any>;

		allFinancialData = getFinancialData();

		cryptoFinancialData = [...allFinancialData];

		cryptoArr = cryptoFinancialData.filter(
			(item) => item.vehicle === "Cryptocurrency"
		);

		cryptoArr.length > 0
			? (cryptoAmount = cryptoArr.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.originalCashValue;
			  }, 0))
			: (cryptoAmount = 0);

		return cryptoAmount;
	};

	const getIndexBalance = () => {
		let allFinancialData: Array<any>;
		let indexArr: Array<any>;
		let indexAmount: number;
		let indexFinancialData: Array<any>;

		allFinancialData = getFinancialData();

		indexFinancialData = [...allFinancialData];

		indexArr = indexFinancialData.filter(
			(item) => item.vehicle === "Index Fund"
		);

		indexArr.length > 0
			? (indexAmount = indexArr.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.originalCashValue;
			  }, 0))
			: (indexAmount = 0);

		return indexAmount;
	};

	const getStockBalance = () => {
		let allFinancialData: Array<any>;
		let stockArr: Array<any>;
		let stockAmount: number;
		let stockFinancialData: Array<any>;

		allFinancialData = getFinancialData();

		stockFinancialData = [...allFinancialData];

		stockArr = stockFinancialData.filter((item) => item.vehicle === "Stock");

		stockArr.length > 0
			? (stockAmount = stockArr.reduce((accumulator, currentValue) => {
					return accumulator + currentValue.originalCashValue;
			  }, 0))
			: (stockAmount = 0);

		return stockAmount;
	};

	const getPersonalBalance = () => {
		let allFinancialData: Array<any>;
		let personalArr: Array<any>;
		let personalAmount: number;
		let personalFinancialData: Array<any>;

		allFinancialData = getFinancialData();

		personalFinancialData = [...allFinancialData];

		personalArr = personalFinancialData.filter((item) => item.accountPortfolio === "Personal")

		personalArr.length > 0 ? (
			personalAmount = personalArr.reduce((accumulator, currentValue) => {
				return accumulator + currentValue.originalCashValue;
			}, 0)
		) : (personalAmount = 0)

		return personalAmount
	};

	const get401KBalance = () => {
		let allFinancialData: Array<any>;
		let my401KArr: Array<any>;
		let my401KAmount: number;
		let my401KFinancialData: Array<any>;

		allFinancialData = getFinancialData();

		my401KFinancialData = [...allFinancialData];

		my401KArr = my401KFinancialData.filter((item) => item.accountPortfolio === "401k")

		my401KArr.length > 0 ? (
			my401KAmount = my401KArr.reduce((accumulator, currentValue) => {
				return accumulator + currentValue.originalCashValue;
			}, 0)
		) : (my401KAmount = 0)
	
		return my401KAmount;
	};

	const getRothBalance = () => {
		let allFinancialData: Array<any>;
		let rothArr: Array<any>;
		let rothAmount: number;
		let rothFinancialData: Array<any>;

		allFinancialData = getFinancialData();

		rothFinancialData = [...allFinancialData];

		rothArr = rothFinancialData.filter((item) => item.accountPortfolio === "ROTH IRA");

		rothArr.length > 0 ? (
			rothAmount = rothArr.reduce((accumulator, currentValue) => {
				return accumulator + currentValue.originalCashValue
			}, 0)
		) : (rothAmount = 0)

		return rothAmount;
	};

	// GET SPECIFIC DATA TO PASS TO THE PIE CHART COMPONENTS
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

	const personalInvestmentData = () => {
		let personalInvestmentDataArr: Array<any>;
		let cryptoAmount: number;
		let indexFundAmount: number;
		let stockAmount: number;
		let cryptoObj: object;
		let indexFundObj: object;
		let stockObj: object;

		cryptoAmount = getCryptoBalance();
		indexFundAmount = getIndexBalance();
		stockAmount = getStockBalance();

		cryptoObj = {
			title: "Cryptocurrency",
			value: cryptoAmount,
			color: "#FF5733",
		};

		indexFundObj = {
			title: "Index Funds",
			value: indexFundAmount,
			color: "#FC33FF",
		};

		stockObj = {
			title: "Stocks",
			value: stockAmount,
			color: "#FF3F33",
		};

		personalInvestmentDataArr = [cryptoObj, indexFundObj, stockObj];

		return personalInvestmentDataArr;
	};

	const handleSegmentClick = () => {
		console.log("segment clicked");
	};

	return (
		<div className="App">
			<NavBar />

			<div className="buttonbar">
				<div className="buttonbar_button">
					<PrimaryButton
						handleButtonClick={handleCashFormStatus}
						title={"Add Cash"}
					/>
				</div>
				<div className="buttonbar_button">
					<PrimaryButton
						handleButtonClick={handleInvestmentFormStatus}
						title={"Add Investment"}
					/>
				</div>
				<div className="buttonbar_button">
					<PrimaryButton
						handleButtonClick={handleExpenseFormStatus}
						title={"Add Expense"}
					/>
				</div>
			</div>

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

			<div className="piecharts">
				<div className="piechart_pie">
					<MyPieChart
						data={checkingAndSavingsData()}
						handleSegmentClick={handleSegmentClick}
						title={"Cash"}
					>
						{" "}
					</MyPieChart>
				</div>
				<div className="piechart_pie">
					<MyPieChart
						data={personalInvestmentData()}
						handleSegmentClick={handleSegmentClick}
						title={"Investments"}
					>
						{" "}
					</MyPieChart>
				</div>
			</div>
		</div>
	);
}

export default App;
