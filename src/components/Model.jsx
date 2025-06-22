import {useSelector} from "react-redux";
import ModelViewHeader from "./ModelViewHeader";
import ModelOverlay from "./ModelOverlay";

const Model = ({modelName, reducerName, children}) => {
	const isModelOpened = useSelector((data) => data.toggleViewReducer[reducerName]);

	return (
		<div>
			<ModelOverlay isOpened={isModelOpened} />
			<div className={`w-2/4 fixed ${isModelOpened ? "right-0" : "-right-full"} top-0 h-screen dark:bg-bg-surface-dark/50 backdrop-blur-lg border  rounded-l-xl overflow-y-auto text-zinc-800 z-50 p-7 transition-all ease-in-out duration-300`}>
				<ModelViewHeader modelName={modelName} />
				{children}
			</div>
		</div>
	);
};

export default Model;
