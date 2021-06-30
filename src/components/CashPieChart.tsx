import React from "react";

import { PieChart } from "react-minimal-pie-chart";

interface CashPieChartProps {
	cashData: any,
}

const CashPieChart: React.FC<CashPieChartProps> = ({ cashData }) => {

    console.log(cashData)


	return (
		<PieChart
            data={cashData}
		></PieChart>
	);
};

export default CashPieChart;
