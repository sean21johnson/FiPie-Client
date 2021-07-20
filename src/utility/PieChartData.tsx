import { getFinancialData, getCheckingBalance, getSavingsBalance, getCryptoBalance, getIndexBalance, getStockBalance, get401KBalance, getRothBalance, getPersonalBalance } from "./FinancialBalances";

const getCheckingAndSavingsData = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let checkingAndSavingsArr: Array<any>;
    let savingsAmount: number;
    let checkingAmount: number;
    let checkingObj: object;
    let savingsObj: object;

    savingsAmount = getSavingsBalance(cashData, investmentData, expenseData);
    checkingAmount = getCheckingBalance(cashData, investmentData, expenseData);

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

const getRetirementData = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let retirementArr: Array<any>;
    let my401KAmount: number;
    let rothAmount: number;
    let my401KObj: object;
    let rothObj: object;

    my401KAmount = get401KBalance(cashData, investmentData, expenseData);
    rothAmount = getRothBalance(cashData, investmentData, expenseData);

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

const getPersonalInvestmentData = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let personalInvestmentDataArr: Array<any>;
    let cryptoAmount: number;
    let indexFundAmount: number;
    let stockAmount: number;
    let cryptoObj: object;
    let indexFundObj: object;
    let stockObj: object;

    cryptoAmount = getCryptoBalance(cashData, investmentData, expenseData);
    indexFundAmount = getIndexBalance(cashData, investmentData, expenseData);
    stockAmount = getStockBalance(cashData, investmentData, expenseData);

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

const getRetirementAndPersonalData = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let retirementPersonalInvestmentDataArr: Array<any>;
    let retirementAmount: number;
    let retirementObj: object;
    let personalAmount: number;
    let personalObj: object;

    retirementAmount = get401KBalance(cashData, investmentData, expenseData) + getRothBalance(cashData, investmentData, expenseData);
    personalAmount = getPersonalBalance(cashData, investmentData, expenseData);

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

const getComprehensiveData = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let comprehensiveBreakdownArr: Array<any>;
    let myInvestmentData: Array<any>;
    let myCashData: Array<any>;
    let myRetirementData: Array<any>;

    myInvestmentData = getPersonalInvestmentData(cashData, investmentData, expenseData);
    myCashData = getCheckingAndSavingsData(cashData, investmentData, expenseData);
    myRetirementData = getRetirementData(cashData, investmentData, expenseData);

    comprehensiveBreakdownArr = [
        ...myInvestmentData,
        ...myCashData,
        ...myRetirementData,
    ];

    return comprehensiveBreakdownArr;
};


export {
    getCheckingAndSavingsData,
    getRetirementData,
    getPersonalInvestmentData,
    getRetirementAndPersonalData,
    getComprehensiveData
}