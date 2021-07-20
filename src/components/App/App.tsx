import React from "react";

import NavBar from "../NavBar/NavBar";
import InvestmentForm from "../InvestmentForm/InvestmentForm";
import CashForm from "../CashForm/CashForm";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import MyPieChart from "../MyPieChart/MyPieChart";
import PrimaryButtonBar from "../PrimaryButtonBar/PrimaryButtonBar";
import NetWorth from "../NetWorth/NetWorth";

import {
	sampleExpenseData,
	sampleCashData,
	sampleInvestmentData,
} from "../../sampleFinancialData";
import {
	getCheckingAndSavingsData,
	getRetirementData,
	getPersonalInvestmentData,
	getRetirementAndPersonalData,
	getComprehensiveData,
} from "../../utility/PieChartData";
import {
	getFinancialData
} from "../../utility/FinancialBalances"

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

	//HANDLE WHEN A PIE CHART IS CLICKED
	const handleSegmentClick = () => {
		console.log("segment clicked");
	};

	return (
		<div className="App">
			<header>
				<NavBar />
			</header>

			<section className="buttonbar_section">
				<PrimaryButtonBar
					onCashFormStatus={handleCashFormStatus}
					onInvestmentFormStatus={handleInvestmentFormStatus}
					onExpenseFormStatus={handleExpenseFormStatus}
				/>
			</section>

			<section className="forms_section">
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
			</section>

			<section className="networth_section">
				<NetWorth data={getFinancialData(sampleCashData, sampleInvestmentData, sampleExpenseData)} />

			</section>

			<section className="carousel_pie">
				<div className="minipiecharts">
					<div className="piechart_pie">
						<MyPieChart
							data={getCheckingAndSavingsData(
								sampleCashData,
								sampleInvestmentData,
								sampleExpenseData
							)}
							handleSegmentClick={handleSegmentClick}
							title={"Checking Vs Savings"}
						>
							{" "}
						</MyPieChart>
					</div>
					<div className="piechart_pie">
						<MyPieChart
							data={getPersonalInvestmentData(
								sampleCashData,
								sampleInvestmentData,
								sampleExpenseData
							)}
							handleSegmentClick={handleSegmentClick}
							title={"Investment Breakdown"}
						>
							{" "}
						</MyPieChart>
					</div>
					<div className="piechart_pie">
						<MyPieChart
							data={getRetirementAndPersonalData(
								sampleCashData,
								sampleInvestmentData,
								sampleExpenseData
							)}
							handleSegmentClick={handleSegmentClick}
							title={"Personal Vs Retirement"}
						>
							{" "}
						</MyPieChart>
					</div>
					<div className="piechart_pie">
						<MyPieChart
							data={getRetirementData(
								sampleCashData,
								sampleInvestmentData,
								sampleExpenseData
							)}
							handleSegmentClick={handleSegmentClick}
							title={"401K Vs ROTH IRA"}
						>
							{" "}
						</MyPieChart>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
