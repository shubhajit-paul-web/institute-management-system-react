import {Camera} from "lucide-react";

const LeftSideSection = () => {
	return (
		<div className="relative flex-1">
			<div className="w-[10rem] rounded-full overflow-hidden bg-white p-5 border-4 outline-4 outline-zinc-700">
				<img src="https://avatars.githubusercontent.com/u/69582226?v=4" alt="" />

				<span className="absolute -bottom-1 left-2 dark:bg-bg-surface-dark p-3 rounded-full text-white/90 cursor-pointer">
					<Camera size="1.3rem" />
				</span>
			</div>
		</div>
	);
};

export default LeftSideSection;
