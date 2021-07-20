import React from "react";

interface TotalValueProps {
	value: number;
}

const TotalValue: React.FC<TotalValueProps> = ({ value }) => {
	const formatValue = (value: number) => {
		let numberFormat = new Intl.NumberFormat("en-US");
		return numberFormat.format(value);
	};

	return <h2>${formatValue(value)}</h2>;
};

export default TotalValue;
