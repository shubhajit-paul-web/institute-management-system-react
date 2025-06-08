import CardBtnGroup from "./CardBtnGroup";

const CourseCard = () => {
	return (
		<div className="bg-white p-3.5 rounded-xl transition duration-300 shadow-zinc-300 hover:shadow-2xl hover:-translate-y-1">
			<img src="https://ik.imagekit.io/sheryians/courses_gif/undefined-maxresdefault_5-AHh9_1Y.jpg" alt="" className="block w-full aspect-[5/3] rounded-xl" />
			<div className="mt-3 flex flex-col gap-2">
				<div className="text-[1.33rem] font-bold">Three.js Domination</div>
				<div className="font-medium flex gap-4 text-zinc-700">
					<span>🕒 3 Months</span>
					<span>💰 ₹12,000</span>
				</div>
				<div className="flex items-center gap-2 mt-2">
					<span className="bg-pink-100 text-xs font-medium text-pink-400 py-1 px-2.5 rounded-md">Programming</span>
					<span className="bg-green-100 text-xs font-medium text-green-600 py-1 px-2.5 rounded-md">Web</span>
				</div>
				<p className="text-zinc-700 leading-tight mt-2">Lorem ipsum dolor sit amet conse...</p>
				<CardBtnGroup />
			</div>
		</div>
	);
};

export default CourseCard;
