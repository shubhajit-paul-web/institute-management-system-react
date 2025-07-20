import {useDispatch, useSelector} from "react-redux";
import studentsService from "../../appwrite/services/studentsService";
import {addStudent} from "../../features/students/studentsSlice";
import {useEffect, useState} from "react";
import {formatDateForDisplay} from "../../utils/DateTimeUtils";
import SkeletonBlock from "../Skeletons/SkeletonBlock";
import {useNavigate} from "react-router-dom";
import TableLayout from "../TableUtils/TableLayout";
import TableCell from "../TableUtils/TableCell";
import TableRow from "../TableUtils/TableRow";
import ViewBtn from "../TableUtils/Buttons/ViewBtn";
import EditBtn from "../TableUtils/Buttons/EditBtn";
import DownloadBtn from "../TableUtils/Buttons/DownloadBtn";
import {openModel} from "../../features/students/cardModelSlice";
import useGetCourseTitle from "../../hooks/useGetCourseTitle";

const StudentTable = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const instituteID = useSelector((state) => state.authReducer.instituteDetails?.$id);
	const studentsData = useSelector((state) => state.studentsReducer.filteredStudents);
	const getCourseTitle = useGetCourseTitle();

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

	return loading ? (
		<SkeletonBlock height="h-25" className="text-lg text-white/70 text-center content-center">
			Loading...
		</SkeletonBlock>
	) : (
		<TableLayout tableName="students" tableFields={["ID", "Student", "Course", "Batch", "Email", "Admission Date", "Actions"]} dataLength={studentsData.length}>
			{studentsData?.length === 0 ||
				studentsData?.map((student) => {
					return (
						<TableRow key={student?.studentId}>
							<TableCell>{student?.studentId}</TableCell>
							<TableCell>
								<div className="flex items-center gap-3">
									<img src={studentsService.generateFileURL(student?.photo)} alt="avatar" className="w-9 aspect-square object-cover object-center rounded-full shrink-0" />
									<span className="block">{student?.studentName}</span>
								</div>
							</TableCell>
							<TableCell>{getCourseTitle(student?.course)}</TableCell>
							<TableCell>{student?.batch}</TableCell>
							<TableCell>
								<span className="line-clamp-1">{student?.email}</span>
							</TableCell>
							<TableCell>{formatDateForDisplay(student?.admissionDate)}</TableCell>
							<TableCell className="text-center flex gap-2">
								<ViewBtn onClick={() => navigate(`/students/${student?.studentId}`)} tooltipTitle="View Student Details" />
								<EditBtn />

								<DownloadBtn
									tooltipTitle="Download ID Card"
									onClick={() => {
										dispatch(
											openModel({
												studentId: student?.studentId,
												photo: studentsService.generateFileURL(student?.photo),
												studentName: student?.studentName,
												fullAddress: student?.fullAddress,
											})
										);
									}}
								/>
							</TableCell>
						</TableRow>
					);
				})}
		</TableLayout>
	);
};

export default StudentTable;
