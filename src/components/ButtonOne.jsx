import {useDispatch} from "react-redux";
import {openModel} from "../features/toggleModelView/toggleModelSlice";

const ButtonOne = ({icon, text}) => {
	const dispatch = useDispatch();

	return (
		<button onClick={() => dispatch(openModel())} className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-lg font-medium bg-green-100 border border-green-200 text-green-600 hover:bg-green-200`}>
			<span className="bg-green-500 text-white w-8 aspect-square flex justify-center items-center rounded-full">{icon}</span> {text}
		</button>
	);
};

export default ButtonOne;
