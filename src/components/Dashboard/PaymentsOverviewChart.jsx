const PaymentsOverviewChart = ({elem}) => {
	return (
		<div className="w-fit">
			<div className="text-lg font-medium mb-5">Payments Overview</div>
			<div ref={elem}></div>
		</div>
	);
};

export default PaymentsOverviewChart;
