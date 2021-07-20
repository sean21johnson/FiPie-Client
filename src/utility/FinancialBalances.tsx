// AGGREGATE ALL FINANCIAL DATA
const getFinancialData = (cashData: any, investmentData: any, expenseData: any) => {
    let allFinancialData: Array<any>;

    allFinancialData = [...cashData, ...investmentData, ...expenseData];

    return allFinancialData;
};

const getCheckingBalance = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let allFinancialData: Array<any>;
    let checkingArr: Array<any>;
    let checkingAmount: number;
    let checkingFinancialData: Array<any>;

    allFinancialData = getFinancialData(cashData, investmentData, expenseData);

    checkingFinancialData = [...allFinancialData];

    checkingArr = checkingFinancialData.filter(
        (item) => item.cashAccountType === "Checking"
    );

    checkingArr.length > 0
        ? (checkingAmount = checkingArr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.originalCashValue;
          }, 0))
        : (checkingAmount = 0);

    return checkingAmount;
};

const getSavingsBalance = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let allFinancialData: Array<any>;
    let savingsArr: Array<any>;
    let savingsAmount: number;
    let savingsFinancialData: Array<any>;

    allFinancialData = getFinancialData(cashData, investmentData, expenseData);

    savingsFinancialData = [...allFinancialData];

    savingsArr = savingsFinancialData.filter(
        (item) => item.cashAccountType === "Savings"
    );

    savingsArr.length > 0
        ? (savingsAmount = savingsArr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.originalCashValue;
          }, 0))
        : (savingsAmount = 0);

    return savingsAmount;
};

const getCryptoBalance = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let allFinancialData: Array<any>;
    let cryptoArr: Array<any>;
    let cryptoAmount: number;
    let cryptoFinancialData: Array<any>;

    allFinancialData = getFinancialData(cashData, investmentData, expenseData);

    cryptoFinancialData = [...allFinancialData];

    cryptoArr = cryptoFinancialData.filter(
        (item) =>
            item.vehicle === "Cryptocurrency" &&
            item.accountPortfolio === "Personal"
    );

    cryptoArr.length > 0
        ? (cryptoAmount = cryptoArr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.originalCashValue;
          }, 0))
        : (cryptoAmount = 0);

    return cryptoAmount;
};

const getIndexBalance = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let allFinancialData: Array<any>;
    let indexArr: Array<any>;
    let indexAmount: number;
    let indexFinancialData: Array<any>;

    allFinancialData = getFinancialData(cashData, investmentData, expenseData);

    indexFinancialData = [...allFinancialData];

    indexArr = indexFinancialData.filter(
        (item) =>
            item.vehicle === "Index Fund" && item.accountPortfolio === "Personal"
    );

    indexArr.length > 0
        ? (indexAmount = indexArr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.originalCashValue;
          }, 0))
        : (indexAmount = 0);

    return indexAmount;
};

const getStockBalance = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let allFinancialData: Array<any>;
    let stockArr: Array<any>;
    let stockAmount: number;
    let stockFinancialData: Array<any>;

    allFinancialData = getFinancialData(cashData, investmentData, expenseData);

    stockFinancialData = [...allFinancialData];

    stockArr = stockFinancialData.filter(
        (item) => item.vehicle === "Stock" && item.accountPortfolio === "Personal"
    );

    stockArr.length > 0
        ? (stockAmount = stockArr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.originalCashValue;
          }, 0))
        : (stockAmount = 0);

    return stockAmount;
};

const get401KBalance = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let allFinancialData: Array<any>;
    let my401KArr: Array<any>;
    let my401KAmount: number;
    let my401KFinancialData: Array<any>;

    allFinancialData = getFinancialData(cashData, investmentData, expenseData);

    my401KFinancialData = [...allFinancialData];

    my401KArr = my401KFinancialData.filter(
        (item) => item.accountPortfolio === "401k"
    );

    my401KArr.length > 0
        ? (my401KAmount = my401KArr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.originalCashValue;
          }, 0))
        : (my401KAmount = 0);

    return my401KAmount;
};

const getRothBalance = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let allFinancialData: Array<any>;
    let rothArr: Array<any>;
    let rothAmount: number;
    let rothFinancialData: Array<any>;

    allFinancialData = getFinancialData(cashData, investmentData, expenseData);

    rothFinancialData = [...allFinancialData];

    rothArr = rothFinancialData.filter(
        (item) => item.accountPortfolio === "ROTH IRA"
    );

    rothArr.length > 0
        ? (rothAmount = rothArr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.originalCashValue;
          }, 0))
        : (rothAmount = 0);

    return rothAmount;
};
// THIS IS AN AGGREGATE OF STOCKS/INDEX FUNDS/CRYPTO
const getPersonalBalance = (cashData: Array<any>, investmentData: Array<any>, expenseData: Array<any>) => {
    let allFinancialData: Array<any>;
    let personalArr: Array<any>;
    let personalAmount: number;
    let personalFinancialData: Array<any>;

    allFinancialData = getFinancialData(cashData, investmentData, expenseData);

    personalFinancialData = [...allFinancialData];

    personalArr = personalFinancialData.filter(
        (item) => item.accountPortfolio === "Personal"
    );

    personalArr.length > 0
        ? (personalAmount = personalArr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.originalCashValue;
          }, 0))
        : (personalAmount = 0);

    return personalAmount;
};

export {
    getFinancialData,
    getCheckingBalance,
    getSavingsBalance,
    getCryptoBalance,
    getIndexBalance,
    getStockBalance,
    get401KBalance,
    getRothBalance,
    getPersonalBalance
}
