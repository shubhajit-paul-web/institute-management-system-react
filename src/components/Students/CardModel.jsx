import ModelOverlay from "../ModelOverlay";
import StudentIdCard from "./StudentIdCard";
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../../features/students/cardModelSlice";

const CardModel = () => {
	const dispatch = useDispatch();
	const {isOpened, studentData} = useSelector((state) => state.cardModelReducer);
	
	const handleCloseModel = () => {
		dispatch(closeModel());
	}
	
	return (
		<div className={`${isOpened ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
			<ModelOverlay isOpened={isOpened} onClick={handleCloseModel} className="opacity-85" />
			<div className={`${isOpened ? "scale-100 opacity-100" : "scale-75 opacity-60"} fixed left-[50%] top-[50%] -translate-[50%] z-20 min-w-fit min-h-fit p-6 bg-bg-card-dark shadow-2xl border border-dark-one/85 rounded-lg transition-all ease duration-300`}>
				{/* Student ID Card */}
				<StudentIdCard studentData={studentData} handleCloseModel={handleCloseModel} />
			</div>
		</div>
	);
};
export default CardModel;
