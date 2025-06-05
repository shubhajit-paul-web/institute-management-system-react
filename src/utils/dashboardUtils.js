import ApexCharts from "apexcharts";

// Admissions Chart - Dashboard
export function admissionsChart(elem) {
	if (!elem.current) return;

	if (elem.current._apexChart) {
		elem.current._apexChart.destroy();
	}

	var options = {
		series: [
			{
				name: "Admissions",
				data: [44, 10, 57, 56, 61, 58],
			},
		],
		chart: {
			type: "bar",
			height: 360,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "55%",
				borderRadius: 5,
				borderRadiusApplication: "end",
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ["transparent"],
		},
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		},
		yaxis: {
			title: {
				text: "Admissions",
			},
		},
		fill: {
			opacity: 1,
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return val + " students";
				},
			},
		},
	};

	if (elem.current) {
		var chart = new ApexCharts(elem.current, options);
		chart.render();
	}

	elem.current._apexChart = chart;
}

// Payments Chart - Dashboard
export function paymentsChart(elem) {
	if (!elem.current) return;

	if (elem.current._apexChart) {
		elem.current._apexChart.destroy();
	}

	var options = {
		series: [65, 20],
		labels: ["Paid", "Due"],
		colors: ["#2ecc71", "#ff6565"],
		// fill: {
		// 	type: "gradient",
		// },
		// shadow: {
		// 	enabled: true,
		// 	color: "#000",
		// 	top: 2,
		// 	left: 2,
		// 	blur: 4,
		// 	opacity: 0.1,
		// },
		chart: {
			width: 450,
			type: "donut",
		},
		dataLabels: {
			enabled: false,
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						show: false,
					},
				},
			},
		],
		legend: {
			position: "right",
			offsetY: 0,
			height: 230,
		},
	};

	if (elem.current) {
		var chart = new ApexCharts(elem.current, options);
		chart.render();
	}

	elem.current._apexChart = chart;
}
