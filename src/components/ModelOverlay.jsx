import { useSelector } from "react-redux";

const ModelOverlay = () => {
	const isModelOpened = useSelector((state) => state.toggleViewReducer);

	return <div className={`bg-black w-screen h-screen fixed ${isModelOpened ? "opacity-50" : "opacity-0 invisible pointer-events-none"} top-0 left-0 z-10 transition-all ease-in-out duration-300`}></div>;
};

export default ModelOverlay;
