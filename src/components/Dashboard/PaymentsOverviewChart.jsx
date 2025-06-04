const PaymentsOverviewChart = ({elem}) => {
	return (
		<div>
			<div className="text-lg font-medium mb-5">Payments Overview</div>
			<div ref={elem}></div>
		</div>
	);
};

export default PaymentsOverviewChart;
