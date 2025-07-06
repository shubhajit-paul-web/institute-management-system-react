import {useDispatch, useSelector} from "react-redux";
import studentsService from "../../appwrite/services/studentsService";
import TableHeader from "../TableUtils/TableHeader";
import {addStudent} from "../../features/students/studentsSlice";
import {useEffect, useState} from "react";
import {formatDateForDisplay} from "../../utils/DateTimeUtils";
import SkeletonBlock from "../Skeletons/SkeletonBlock";
import {Link} from "react-router-dom";
import TableLayout from "../TableUtils/TableLayout";
import TableCell from "../TableUtils/TableCell";
import TableRow from "../TableUtils/TableRow";
import {Eye} from "lucide-react";
import {Tooltip} from "antd";

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
			<SkeletonBlock height="h-20" className="text-lg text-white/70 text-center content-center">
				Loading...
			</SkeletonBlock>
		);
	}

	return (
		<TableLayout tableName="students" tableFields={["ID", "Student", "Course", "Batch", "Email", "Mobile", "Admission Date", "Action"]} dataLength={studentsData.length}>
			{studentsData?.length === 0 ||
				studentsData?.map((student) => {
					return (
						<TableRow key={student?.studentId}>
							<TableCell>{student?.studentId}</TableCell>
							<TableCell className="flex items-center gap-3">
								<img src={studentsService.generateFileURL(student?.photo)} alt="avatar" className="w-9 aspect-square object-cover object-center rounded-full" />
								<span className="line-clamp-1">{student?.studentName}</span>
							</TableCell>
							<TableCell>{student?.course}</TableCell>
							<TableCell>{student?.batch}</TableCell>
							<TableCell>
								<span className="line-clamp-1">{student?.email}</span>
							</TableCell>
							<TableCell>{student?.mobile}</TableCell>
							<TableCell>{formatDateForDisplay(student?.admissionDate)}</TableCell>
							<TableCell className="text-center">
								<Tooltip title="View Student Details">
									<Link to={`/students/${student?.studentId}`}>
										<button className="bg-sky-400/15 p-2 text-sky-600 rounded-md">
											<Eye size="1.1rem" />
										</button>
									</Link>
								</Tooltip>
							</TableCell>
						</TableRow>
					);
				})}
		</TableLayout>
	);
};

export default StudentTable;
