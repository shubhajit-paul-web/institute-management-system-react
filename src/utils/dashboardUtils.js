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
			background: "transparent", // transparent to match dark background
			foreColor: "#E6EDF3", // text color for axis & labels
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
			labels: {
				style: {colors: "#8B949E"},
			},
		},
		yaxis: {
			title: {
				text: "Admissions",
				style: {color: "#E6EDF3"},
			},
			labels: {
				style: {colors: "#8B949E"},
			},
		},
		fill: {
			opacity: 1,
			colors: ["#58A6FF"],
		},
		tooltip: {
			theme: "dark",
			y: {
				formatter: function (val) {
					return val + " students";
				},
			},
		},
		grid: {
			borderColor: "#30363D", // subtle grid lines
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
		colors: ["#3FB950", "#F85149"], // success green & error red
		chart: {
			width: 450,
			type: "donut",
			background: "transparent",
			foreColor: "#E6EDF3",
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			position: "right",
			offsetY: 0,
			height: 230,
			labels: {
				colors: ["#E6EDF3"],
			},
		},
		tooltip: {
			theme: "dark",
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
	};

	if (elem.current) {
		var chart = new ApexCharts(elem.current, options);
		chart.render();
	}

	elem.current._apexChart = chart;
}
