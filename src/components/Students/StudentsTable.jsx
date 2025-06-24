import {useDispatch, useSelector} from "react-redux";
import studentsService from "../../appwrite/services/studentsService";
import TableHeader from "./TableHeader";
import {addStudent} from "../../features/students/studentsSlice";
import {useEffect, useState} from "react";
import {formatDateForDisplay} from "../../utils/DateTimeUtils";
import SkeletonBlock from "../Skeletons/SkeletonBlock";

const StudentTable = () => {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const studentsData = useSelector((state) => state.studentsReducer.students);

	const fetchStudents = async () => {
		try {
			const data = await studentsService.getAllStudents();
			if (data) {
				dispatch(addStudent(data.documents));
			}
		} catch (error) {
			console.error("Failed to fetch students:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchStudents();
	}, [dispatch]);

	if (loading) {
		return (
			<SkeletonBlock height="h-15" className="text-lg text-white/70 text-center content-center">
				Loading...
			</SkeletonBlock>
		);
	}

	// console.log(studentsData);

	const tableRowStyles = "px-4 py-4 border-b dark:text-[#E6EDF3] dark:border-[#30363D]"; // styles for table data

	return (
		<div className="overflow-x-auto rounded-lg">
			<table className="min-w-full table-auto">
				{/* table header */}
				<TableHeader fields={["ID", "Student", "Course", "Batch", "Email", "Mobile", "Admission Date", "Action"]} />
				{/* table body */}
				<tbody>
					{studentsData?.length === 0 ||
						studentsData?.map((student) => {
							return (
								<tr className="dark:even:bg-[#0D1117] dark:odd:bg-transparent dark:hover:bg-[#1A2230] transition" key={student?.ID}>
									<td className={tableRowStyles}>{student?.studentId}</td>
									<td className={`${tableRowStyles} flex items-center gap-3`}>
										<img src={studentsService.generateFileURL(student?.photo)} alt="avatar" className="w-9 aspect-square object-cover object-center rounded-full" />
										{student?.studentName}
									</td>
									<td className={tableRowStyles}>{student?.course}</td>
									<td className={tableRowStyles}>{student?.batch}</td>
									<td className={tableRowStyles}>{student?.email}</td>
									<td className={tableRowStyles}>{student?.mobile}</td>
									<td className={tableRowStyles}>{formatDateForDisplay(student?.admissionDate)}</td>
									<td className={`${tableRowStyles} opacity-60 dark:hover:text-sky-500 cursor-pointer`}>View</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			{/* No data found */}
			{studentsData?.length === 0 ? <div className="text-lg text-center font-medium py-4 dark:bg-bg-dark dark:text-gray-600">No students found...</div> : ""}
		</div>
	);
};

export default StudentTable;
