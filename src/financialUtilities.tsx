import App from './App'

console.log('App', App)

// AGGREGATE ALL FINANCIAL DATA
// const getFinancialData = (cashData: any, investmentData: any, expenseData: any) => {
//     let allFinancialData: Array<any>;

//     allFinancialData = [cashData, investmentData, expenseData];

//     return allFinancialData;
// };

// const getCheckingBalance = () => {
//     let allFinancialData: Array<any>;
//     let checkingArr: Array<any>;
//     let checkingAmount: number;
//     let checkingFinancialData: Array<any>;

//     allFinancialData = getFinancialData(cashData, investmentData, expenseData);

//     checkingFinancialData = [...allFinancialData];

//     checkingArr = checkingFinancialData.filter(
//         (item) => item.accountType === "Checking"
//     );

//     checkingArr.length > 0
//         ? (checkingAmount = checkingArr.reduce((accumulator, currentValue) => {
//                 return accumulator + currentValue.originalCashValue;
//           }, 0))
//         : (checkingAmount = 0);

//     return checkingAmount;
// };


// export {
//     getFinancialData
// }