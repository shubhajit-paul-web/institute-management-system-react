import {Eye, SquarePen, Trash2} from "lucide-react";

const CardBtnGroup = () => {
	return (
		<div className="text-sm font-medium flex gap-2 mt-3.5">
			<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md dark:bg-[#58A6FF]/10 dark:text-[#58A6FF] dark:hover:bg-[#58A6FF]/20">
				<Eye size="1.04rem" /> View
			</button>
			<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md dark:bg-[#3FB950]/10 dark:text-[#3FB950] dark:hover:bg-[#3FB950]/20">
				<SquarePen size="1.04rem" /> Edit
			</button>
			<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md dark:bg-[#F85149]/10 dark:text-[#F85149] dark:hover:bg-[#F85149]/20">
				<Trash2 size="1.04rem" /> Delete
			</button>
		</div>
	);
};

export default CardBtnGroup;
