import CardBtnGroup from "./CardBtnGroup";

const CourseCard = () => {
	return (
		<div className="dark:bg-bg-card-dark border dark:border-dark-one p-3.5 rounded-xl transition duration-300 dark:hover:shadow-md dark:shadow-white/5 hover:-translate-y-1">
			<img src="https://ik.imagekit.io/sheryians/courses_gif/undefined-maxresdefault_5-AHh9_1Y.jpg" alt="" className="block w-full aspect-[5/3] rounded-xl" />
			<div className="mt-3 flex flex-col gap-2">
				<div className="dark:text-[#E6EDF3] text-[1.33rem] font-bold">Three.js Domination</div>
				<div className="dark:text-text-medium-dark font-medium flex gap-4">
					<span>🕒 3 Months</span>
					<span>💰 ₹12,000</span>
				</div>
				<div className="flex items-center gap-2 mt-2">
					<span className="dark:bg-[#FF80AB]/20 dark:text-[#FF80AB] text-xs font-medium py-1 px-2.5 rounded-md">Programming</span>
					<span className="dark:bg-[#3FB950]/20 dark:text-[#3FB950] text-xs font-medium py-1 px-2.5 rounded-md">Web</span>
				</div>
				<p className="dark:text-[#8B949E] leading-tight mt-2">Lorem ipsum dolor sit amet conse...</p>
				<CardBtnGroup />
			</div>
		</div>
	);
};

export default CourseCard;
