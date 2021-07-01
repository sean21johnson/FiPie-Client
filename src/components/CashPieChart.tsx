import React from "react";

import { PieChart } from "react-minimal-pie-chart";

interface CashPieChartProps {
	data: any,
	handleSegmentClick: any
}

const MyPieChart: React.FC<CashPieChartProps> = ({ data, handleSegmentClick }) => {

	// console.log('data', data)

	return <PieChart data={data} onClick={handleSegmentClick}></PieChart>;

};

export default MyPieChart;
