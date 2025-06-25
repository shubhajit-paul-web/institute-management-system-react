import {useDispatch, useSelector} from "react-redux";
import studentsService from "../../appwrite/services/studentsService";
import TableHeader from "./TableHeader";
import {addStudent} from "../../features/students/studentsSlice";
import {useEffect, useState} from "react";
import {formatDateForDisplay} from "../../utils/DateTimeUtils";
import SkeletonBlock from "../Skeletons/SkeletonBlock";
import {Link} from "react-router-dom";

const StudentTable = () => {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const instituteID = useSelector((state) => state.authReducer.instituteDetails?.$id);
	const studentsData = useSelector((state) => state.studentsReducer.filteredStudents);

	const fetchStudents = async () => {
		try {
			const data = await studentsService.getAllStudents(instituteID);
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

	const tableRowStyles = "px-4 py-4 dark:text-[#E6EDF3]"; // styles for table data

	return (
		<div className="overflow-x-auto rounded-lg">
			<table className="min-w-full table-auto overflow-x-scroll">
				{/* table header */}
				<TableHeader fields={["ID", "Student", "Course", "Batch", "Email", "Mobile", "Admission Date", "Action"]} />
				{/* table body */}
				<tbody>
					{studentsData?.length === 0 ||
						studentsData?.map((student) => {
							return (
								<tr className="dark:even:bg-[#0D1117] dark:odd:bg-transparent border-b dark:border-[#30363D] dark:hover:bg-[#1A2230] transition" key={student?.studentId}>
									<td className={tableRowStyles}>{student?.studentId}</td>
									<td className={`${tableRowStyles} flex items-center gap-3`}>
										<img src={studentsService.generateFileURL(student?.photo)} alt="avatar" className="w-9 aspect-square object-cover object-center rounded-full" />
										<span className="line-clamp-1">{student?.studentName}</span>
									</td>
									<td className={tableRowStyles}>{student?.course}</td>
									<td className={tableRowStyles}>{student?.batch}</td>
									<td className={tableRowStyles}>
										<span className="line-clamp-1">{student?.email}</span>
									</td>
									<td className={tableRowStyles}>{student?.mobile}</td>
									<td className={tableRowStyles}>{formatDateForDisplay(student?.admissionDate)}</td>
									<td className={`${tableRowStyles} opacity-60 dark:hover:text-sky-500 cursor-pointer`}>
										<Link to={`/students/${student?.studentId}`}>View</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			{/* No data found */}
			{studentsData?.length === 0 ? <div className="text-lg text-center font-medium py-8 dark:bg-bg-dark dark:text-gray-600">No students found...</div> : ""}
		</div>
	);
};

export default StudentTable;
