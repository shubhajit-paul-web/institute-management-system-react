import ViewAllButton from "./ViewAllButton";

const AdmissionsOverviewChart = ({elem}) => {
	return (
		<div className="w-2/4">
			<div className="mb-5.5 flex justify-between items-center gap-3">
				<div className="text-lg font-medium dark:text-text-main-dark">Admissions Overview</div>
				<ViewAllButton btnName="View All Admissions" route="/students" />
			</div>
			<div ref={elem}></div>
		</div>
	);
};

export default AdmissionsOverviewChart;
