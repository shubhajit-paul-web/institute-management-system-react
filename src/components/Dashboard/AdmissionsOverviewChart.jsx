const AdmissionsOverviewChart = ({elem}) => {
	return (
		<div className="w-2/3">
			<div className="text-lg font-medium mb-5">Admissions Overview</div>
			<div ref={elem}></div>
		</div>
	);
};

export default AdmissionsOverviewChart;
