import {X} from "lucide-react";
import {closeModel} from "../features/toggleModelView/toggleModelSlice";
import {useSelector, useDispatch} from "react-redux";
import ModelOverlay from "./ModelOverlay";

const ModelView = ({modelName, children}) => {
	const dispatch = useDispatch();
	const isModelOpened = useSelector((data) => data.toggleViewReducer);

	return (
		<>
			<ModelOverlay />
			<div className={`w-2/4 fixed ${isModelOpened ? "right-0" : "-right-full"} top-0 h-screen bg-zinc-100 rounded-l-xl text-zinc-800 z-50 p-6 transition-all ease-in-out duration-300`}>
				<div className="flex justify-between items-center">
					<div className="text-xl font-medium">{modelName}</div>
					<div onClick={() => dispatch(closeModel())} className="w-[2rem] aspect-square flex justify-center items-center rounded-full cursor-pointer bg-red-600" title="Close">
						<X color="#fff" size="1.2rem" />
					</div>
				</div>
				{children}
			</div>
		</>
	);
};

export default ModelView;
