import {UserRoundPlus} from "lucide-react";
import PageHeader from "../PageHeader";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {searchStudents} from "../../features/students/studentsSlice";
import useDebounceEffect from "../../hooks/useDebounceEffect";

const StudentsHeader = () => {
	const dispatch = useDispatch();
	const {register, watch} = useForm();
	const searchStudentsDebounced = useDebounceEffect((query) => dispatch(searchStudents(query)));

	useEffect(() => {
		const searchValue = watch("students")?.toLowerCase()?.trim();
		searchStudentsDebounced(searchValue);
	}, [watch("students")]);

	return (
		<PageHeader placeholder="Search students by name or email..." btnIcon={<UserRoundPlus size="1.32rem" />} btnText="Add Student" name="students" register={register}>
			<select className="px-7 py-[0.9rem] rounded-lg dark:bg-bg-dark border dark:border-dark-one dark:text-text-main-dark">
				<option value="" defaultValue>
					Export
				</option>
				<option value="PDF">PDF</option>
				<option value="XLS">XLS</option>
			</select>
		</PageHeader>
	);
};

export default StudentsHeader;
