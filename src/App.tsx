import React from "react";

import NavBar from "./components/NavBar";
import InvestmentForm from "./components/InvestmentForm";
import CashForm from "./components/CashForm";
import ExpenseForm from "./components/ExpenseForm";
import MyPieChart from "./components/MyPieChart";
import PrimaryButtonBar from "./components/PrimaryButtonBar";
import { getFinancialData, getCheckingBalance, getSavingsBalance, getCryptoBalance, getIndexBalance, getStockBalance, get401KBalance, getRothBalance, getPersonalBalance } from "./financialUtilities";
import { sampleExpenseData, sampleCashData, sampleInvestmentData } from "./sampleFinancialData";

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
		const institutionalAccount = e.target.formInvestmentAccount.value;
		const investmentPortfolio = e.target.formInvestmentPortfolio.value;

		const newInvestment = {
			ticker: ticker.toUpperCase(),
			quantity: quantity,
			averagePrice: price,
			originalCashValue: purchaseValue,
			vehicle: investmentVehicle,
			instituionalAccount: institutionalAccount,
			cashAccountType: "Investment",
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
			institutionalAccount: cashAccount,
			cashAccountType: cashType,
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
			institutionalAccount: expenseAccount,
			cashAccountType: expenseType,
		};

		setExpenseData([...expenseData, { ...newExpense }]);

		e.target.formExpenseAmount.value = "";
		e.target.formInvestmentAccount.value = "";

		setExpenseFormStatus(false);
	};

	// HANDLE FORM CANCEL BUTTON CLICKED
	const handleCancel = () => {
		setCashFormStatus(false);
		setInvestmentFormStatus(false);
	};

	// GET SPECIFIC DATA TO PASS TO THE PIE CHART COMPONENTS
	const checkingAndSavingsData = () => {
		let checkingAndSavingsArr: Array<any>;
		let savingsAmount: number;
		let checkingAmount: number;
		let checkingObj: object;
		let savingsObj: object;

		savingsAmount = getSavingsBalance(sampleCashData, sampleInvestmentData, sampleExpenseData);
		checkingAmount = getCheckingBalance(sampleCashData, sampleInvestmentData, sampleExpenseData);

		console.log(checkingAmount)

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

	const retirementBreakdown = () => {
		let retirementArr: Array<any>;
		let my401KAmount: number;
		let rothAmount: number;
		let my401KObj: object;
		let rothObj: object;

		my401KAmount = get401KBalance(sampleCashData, sampleInvestmentData, sampleExpenseData);
		rothAmount = getRothBalance(sampleCashData, sampleInvestmentData, sampleExpenseData);

		my401KObj = {
			title: "401K",
			value: my401KAmount,
			color: "#4033FF",
		};

		rothObj = {
			title: "ROTH IRA",
			value: rothAmount,
			color: "#FF3383",
		};

		retirementArr = [my401KObj, rothObj];

		return retirementArr;
	};

	const personalInvestmentData = () => {
		let personalInvestmentDataArr: Array<any>;
		let cryptoAmount: number;
		let indexFundAmount: number;
		let stockAmount: number;
		let cryptoObj: object;
		let indexFundObj: object;
		let stockObj: object;

		cryptoAmount = getCryptoBalance(sampleCashData, sampleInvestmentData, sampleExpenseData);
		indexFundAmount = getIndexBalance(sampleCashData, sampleInvestmentData, sampleExpenseData);
		stockAmount = getStockBalance(sampleCashData, sampleInvestmentData, sampleExpenseData);

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

	const retirementAndPersonalData = () => {
		let retirementPersonalInvestmentDataArr: Array<any>;
		let retirementAmount: number;
		let retirementObj: object;
		let personalAmount: number;
		let personalObj: object;

		retirementAmount = get401KBalance(sampleCashData, sampleInvestmentData, sampleExpenseData) + getRothBalance(sampleCashData, sampleInvestmentData, sampleExpenseData);
		personalAmount = getPersonalBalance(sampleCashData, sampleInvestmentData, sampleExpenseData);

		retirementObj = {
			title: "Retirement",
			value: retirementAmount,
			color: "#33FDFF",
		};

		personalObj = {
			title: "Personal",
			value: personalAmount,
			color: "#F9FF33",
		};

		retirementPersonalInvestmentDataArr = [retirementObj, personalObj];

		return retirementPersonalInvestmentDataArr;
	};

	const getComprehensiveBreakdown = () => {
		let comprehensiveBreakdownArr: Array<any>;
		let myInvestmentData: Array<any>;
		let myCashData: Array<any>;
		let myRetirementData: Array<any>;

		myInvestmentData = personalInvestmentData();
		myCashData = checkingAndSavingsData();
		myRetirementData = retirementBreakdown();

		comprehensiveBreakdownArr = [
			...myInvestmentData,
			...myCashData,
			...myRetirementData,
		];

		return comprehensiveBreakdownArr;
	};

	//HANDLE WHEN A PIE CHART IS CLICKED
	const handleSegmentClick = () => {
		console.log("segment clicked");
	};

	return (
		<div className="App">
			<NavBar />

			<PrimaryButtonBar
				onCashFormStatus={handleCashFormStatus}
				onInvestmentFormStatus={handleInvestmentFormStatus}
				onExpenseFormStatus={handleExpenseFormStatus}
			/>

			<div className="form">
				{investmentFormStatus ? (
					<InvestmentForm
						handleInvestmentSubmit={handleInvestmentSubmit}
						handleCancel={handleCancel}
					/>
				) : (
					""
				)}
			</div>

			<div className="form">
				{cashFormStatus ? (
					<CashForm
						handleCashSubmit={handleCashSubmit}
						handleCancel={handleCancel}
					/>
				) : (
					""
				)}
			</div>

			<div className="form">
				{expenseFormStatus ? (
					<ExpenseForm
						handleExpenseSubmit={handleExpenseSubmit}
						handleCancel={handleCancel}
					/>
				) : (
					""
				)}
			</div>

			<div className="comprehensive">
				<div className="bigpie"></div>
				<div className="networth"></div>
			</div>

			<div className="minipiecharts">
				<div className="piechart_pie">
					<MyPieChart
						data={checkingAndSavingsData()}
						handleSegmentClick={handleSegmentClick}
						title={"Checking Vs Savings"}
					>
						{" "}
					</MyPieChart>
				</div>
				<div className="piechart_pie">
					<MyPieChart
						data={personalInvestmentData()}
						handleSegmentClick={handleSegmentClick}
						title={"Investment Breakdown"}
					>
						{" "}
					</MyPieChart>
				</div>
				<div className="piechart_pie">
					<MyPieChart
						data={retirementAndPersonalData()}
						handleSegmentClick={handleSegmentClick}
						title={"Personal Vs Retirement"}
					>
						{" "}
					</MyPieChart>
				</div>
				<div className="piechart_pie">
					<MyPieChart
						data={retirementBreakdown()}
						handleSegmentClick={handleSegmentClick}
						title={"401K Vs ROTH IRA"}
					>
						{" "}
					</MyPieChart>
				</div>
			</div>
		</div>
	);
}

export default App;
