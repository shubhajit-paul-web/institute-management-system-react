import {useDispatch} from "react-redux";
import {openModel} from "../features/toggleModelView/toggleModelSlice";

const ButtonOne = ({icon, text}) => {
	const dispatch = useDispatch();

	return (
		<button onClick={() => dispatch(openModel())} className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-lg font-medium bg-[#238636] text-white hover:bg-[#2ea043] shadow-md transition-colors duration-300`}>
			<span className="text-white/80 w-8 aspect-square flex justify-center items-center rounded-full">{icon}</span> {text}
		</button>
	);
};

export default ButtonOne;
