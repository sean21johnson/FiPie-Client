import React from "react";
import TotalValue from '../TotalValue/TotalValue'

interface NetWorthProps {
	data: Array<any>;
}

function NetWorth({ data }: NetWorthProps) {

	const calculateTotalValue = () => {
		return data.reduce((accumulator, currentValue) => accumulator + currentValue.originalCashValue, 0);
	};

    console.log(calculateTotalValue())

	return (
		<>
			<h2>Net Worth</h2>
			<TotalValue value={calculateTotalValue()}/>
		</>
	);
}

export default NetWorth;
