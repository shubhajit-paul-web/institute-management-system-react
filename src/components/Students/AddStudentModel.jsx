import {lazy} from "react";
import {useSelector} from "react-redux";
import ModelOverlay from "../ModelOverlay";
import ModelViewHeader from "../ModelViewHeader";
const AddStudentForm = lazy(() => import("./AddStudentForm"));

const AddStudentModel = () => {
	const isModelOpened = useSelector((data) => data.toggleViewReducer.studentModel);

	return (
		<div>
			<ModelOverlay isOpened={isModelOpened} />
			<div className={`w-2/4 fixed ${isModelOpened ? "right-0" : "-right-full"} top-0 h-screen dark:bg-bg-surface-dark rounded-l-xl overflow-y-auto text-zinc-800 z-50 p-7 transition-all ease-in-out duration-300`}>
				<ModelViewHeader modelName="New admission" />
				<AddStudentForm />
			</div>
		</div>
	);
};

export default AddStudentModel;
