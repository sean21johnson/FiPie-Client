import React from "react";

import { PieChart } from "react-minimal-pie-chart";

import "./MyPieChart.css";

interface CashPieChartProps {
	data: any;
	handleSegmentClick: any;
	title: string;
}

const MyPieChart: React.FC<CashPieChartProps> = ({
	data,
	handleSegmentClick,
	title,
}) => {
	return (
		<div className="piechart_container">
			<PieChart
				className="piechart"
				data={data}
				onClick={handleSegmentClick}
			></PieChart>
			<h2 className="piechart_title">{title}</h2>
		</div>
	);
};

export default MyPieChart;
