import ViewAllButton from "./ViewAllButton";

const PaymentsOverviewChart = ({elem}) => {
	return (
		<div className="w-fit">
			<div className="mb-5.5 flex justify-between items-center gap-3">
				<div className="text-lg font-medium dark:text-text-main-dark">Payments Overview</div>
				<ViewAllButton btnName="View All Payments" route="/payments" />
			</div>
			<div ref={elem}></div>
		</div>
	);
};

export default PaymentsOverviewChart;
