const AdmissionsOverviewChart = ({elem}) => {
	return (
		<div className="w-2/4">
			<div className="text-lg font-medium mb-5 dark:text-text-main-dark">Admissions Overview</div>
			<div ref={elem}></div>
		</div>
	);
};

export default AdmissionsOverviewChart;
