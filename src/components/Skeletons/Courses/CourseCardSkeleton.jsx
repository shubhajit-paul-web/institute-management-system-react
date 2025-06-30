import SkeletonBlock from "../SkeletonBlock";

const CoursesCardSkeleton = () => {
	return (
		<SkeletonBlock height="auto" className="rounded-xl p-3.5">
			<SkeletonBlock width="w-full" height="auto" bgColor="bg-white/10" className="aspect-[5/3] rounded-xl" />
			<SkeletonBlock width="w-[70%]" height="h-8" bgColor="bg-white/10" className="mt-5.5" />
			<div className="flex gap-3 my-5">
				<SkeletonBlock width="w-22" height="h-4" bgColor="bg-white/10" />
				<SkeletonBlock width="w-22" height="h-4" bgColor="bg-white/10" />
			</div>
			<div className="flex gap-3 mt-3">
				<SkeletonBlock width="w-28" height="h-6" bgColor="bg-white/10" />
				<SkeletonBlock width="w-18" height="h-6" bgColor="bg-white/10" />
				<SkeletonBlock width="w-22" height="h-6" bgColor="bg-white/10" />
			</div>
			<SkeletonBlock height="h-4" bgColor="bg-white/10" className="my-4" />
			<div className="flex gap-3">
				<SkeletonBlock width="w-20" height="h-8" bgColor="bg-white/10" />
				<SkeletonBlock width="w-20" height="h-8" bgColor="bg-white/10" />
				<SkeletonBlock width="w-22" height="h-8" bgColor="bg-white/10" />
			</div>
		</SkeletonBlock>
	);
};

export default CoursesCardSkeleton;
