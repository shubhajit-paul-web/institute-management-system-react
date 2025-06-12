import {useDispatch} from "react-redux";
import {closeModel} from "../features/toggleModelView/toggleModelSlice";
import {X} from "lucide-react";

const ModelViewHeader = ({modelName}) => {
	const dispatch = useDispatch();

	return (
		<div className="flex justify-between items-center border-b pb-5">
			<div className="text-xl font-medium dark:text-zinc-400">{modelName}</div>
			<div onClick={() => dispatch(closeModel())} className="w-[2rem] aspect-square flex justify-center items-center rounded-full cursor-pointer bg-red-600" title="Close">
				<X color="#fff" size="1.2rem" />
			</div>
		</div>
	);
};

export default ModelViewHeader;
