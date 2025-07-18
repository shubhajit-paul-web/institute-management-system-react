import {useNavigate} from "react-router-dom";

const SingleOverviewCard = ({icon, name, data, route = "/", bgColor}) => {
	const navigate = useNavigate();

	return (
		<div
			onClick={() => navigate(route)}
			className={`flex-1 aspect-[4/2] w-fit px-9 py-7 rounded-xl flex justify-center items-center gap-5 dark:shadow-[inset_0_0_100px_#111] border border-zinc-700 cursor-pointer ease-out transition-all duration-200 hover:brightness-120 hover:scale-101 ${bgColor}`}>
			{/* left */}
			<div className="bg-gray-200 text-gray-800 w-[4.3rem] aspect-square flex justify-center items-center rounded-full">
				<div>{icon}</div>
			</div>
			{/* right */}
			<div className="text-zinc-100">
				<strong className="block text-2xl">{name}</strong>
				<div className="text-lg">{data}</div>
			</div>
		</div>
	);
};

export default SingleOverviewCard;
