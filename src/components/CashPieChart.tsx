import React from "react";

import { PieChart } from "react-minimal-pie-chart";

interface CashPieChartProps {
	data: any;
}

const CashPieChart: React.FC<CashPieChartProps> = ({ data }) => {

	// console.log('data', data)

	return <PieChart data={data}></PieChart>;
};

export default CashPieChart;
