import {useDispatch} from "react-redux";
import {closeModel} from "../features/toggleModelView/toggleModelSlice";

const ModelOverlay = ({isOpened, onClick, className}) => {
	const dispatch = useDispatch();

	return (
		<div
			onClick={onClick || (() => dispatch(closeModel()))}
			className={`backdrop-blur-2xl bg-black/25 w-screen h-screen fixed ${isOpened ? "backdrop-contrast-110 opacity-80 visible" : "opacity-0 invisible pointer-events-none"} inset-0 z-10 transition-all ease-in-out duration-300 ${className}`}></div>
	);
};

export default ModelOverlay;
