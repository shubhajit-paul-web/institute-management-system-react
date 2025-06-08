import { Eye, SquarePen, Trash2 } from "lucide-react";

const CardBtnGroup = () => {
	return (
		<div className="text-sm font-medium flex gap-2 mt-3.5">
			<button className="flex items-center gap-1.5 bg-blue-400 text-zinc-50 px-2.5 py-1.5 rounded-md hover:bg-blue-500">
				<Eye size="1.04rem" /> View
			</button>
			<button className="flex items-center gap-1.5 bg-green-600 text-zinc-50 px-2.5 py-1.5 rounded-md hover:bg-green-700">
				<SquarePen size="1.04rem" /> Edit
			</button>
			<button className="flex items-center gap-1.5 bg-red-400 text-zinc-50 px-2.5 py-1.5 rounded-md hover:bg-red-500">
				<Trash2 size="1.04rem" /> Delete
			</button>
		</div>
	);
};

export default CardBtnGroup;
