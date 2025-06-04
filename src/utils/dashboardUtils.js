import ApexCharts from "apexcharts";

// Admissions Chart - Dashboard
export function admissionsChart(elem) {
	var options = {
		series: [
			{
				name: "Admissions",
				data: [44, 10, 57, 56, 61, 58, 63, 60, 66],
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
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
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
}

// Payments Chart - Dashboard
export function paymentsChart(elem) {
	var options = {
		series: [65, 20],
		labels: ["Paid", "Due"],
		colors: ["#2ecc71", "#ff6565"], 
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

	// function appendData() {
	// 	var arr = chart.w.globals.series.slice();
	// 	arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
	// 	return arr;
	// }

	// function removeData() {
	// 	var arr = chart.w.globals.series.slice();
	// 	arr.pop();
	// 	return arr;
	// }

	// function randomize() {
	// 	return chart.w.globals.series.map(function () {
	// 		return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	// 	});
	// }

	// function reset() {
	// 	return options.series;
	// }

	// document.querySelector("#randomize").addEventListener("click", function () {
	// 	chart.updateSeries(randomize());
	// });

	// document.querySelector("#add").addEventListener("click", function () {
	// 	chart.updateSeries(appendData());
	// });

	// document.querySelector("#remove").addEventListener("click", function () {
	// 	chart.updateSeries(removeData());
	// });

	// document.querySelector("#reset").addEventListener("click", function () {
	// 	chart.updateSeries(reset());
	// });
}
