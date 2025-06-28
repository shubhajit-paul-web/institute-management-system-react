import CoursesCardSkeleton from "./CourseCardSkeleton";

const CoursesListSkeleton = () => {
	return (
		<div className="flex justify-center gap-6">
			{Array(3)
				.fill(0)
				.map((_, index) => (
					<CoursesCardSkeleton key={index} />
				))}
		</div>
	);
};

export default CoursesListSkeleton;
