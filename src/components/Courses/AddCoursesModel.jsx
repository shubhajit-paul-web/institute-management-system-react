import { useSelector } from "react-redux";
import ModelOverlay from "../ModelOverlay";
import ModelViewHeader from "../ModelViewHeader";

const AddCoursesModel = () => {
	const isModelOpened = useSelector((data) => data.toggleViewReducer.courseModel);

	return (
		<div>
			<ModelOverlay isOpened={isModelOpened} />
			<div className={`w-2/4 fixed ${isModelOpened ? "right-0" : "-right-full"} top-0 h-screen dark:bg-bg-surface-dark rounded-l-xl text-zinc-800 z-50 p-6 transition-all ease-in-out duration-300`}>
				<ModelViewHeader modelName="Add Course" />
			</div>
		</div>
	);
};

export default AddCoursesModel;
