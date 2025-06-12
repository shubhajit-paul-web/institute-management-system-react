import {useDispatch} from "react-redux";
import {openClassesModel, openCourseModel, openStudentModel} from "../features/toggleModelView/toggleModelSlice";
import {useLocation} from "react-router-dom";

const ButtonOne = ({icon, text}) => {
	const dispatch = useDispatch();
	const routeName = useLocation()?.pathname;

	function handleModel() {
		if (routeName === "/students") dispatch(openStudentModel(true));
		else if (routeName === "/courses") dispatch(openCourseModel(true));
		else if (routeName === "/classes") dispatch(openClassesModel(true));
	}

	return (
		<button onClick={handleModel} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-lg font-medium bg-[#238636] text-white hover:bg-[#2ea043] shadow-md transition-colors duration-300`}>
			<span className="text-white/80 w-8 aspect-square flex justify-center items-center rounded-full">{icon}</span> {text}
		</button>
	);
};

export default ButtonOne;
