import {Edit, Eye, Trash2} from "lucide-react";
import TableCell from "../TableUtils/TableCell";
import TableLayout from "../TableUtils/TableLayout";
import TableRow from "../TableUtils/TableRow";
import {Tooltip} from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classesService from "../../appwrite/services/classesService";
import { addClass } from "../../features/classes/classesSlice";
import SkeletonBlock from "../Skeletons/SkeletonBlock";

const ClassesTable = () => {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const instituteID = useSelector((state) => state.authReducer.instituteDetails.$id);
	const classesData = useSelector((state) => state.classesReducer.filteredClasses);

	async function fetchClassesData() {
		try {
			const {documents: allClasses} = await classesService.getAllClasses(instituteID);

			if (allClasses.length) {
				dispatch(addClass(allClasses));
			}
		} catch (error) {
			console.error("fetchClassesData Error:", error.message);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchClassesData();
	}, [dispatch]);

	if (loading) {
		return (
			<SkeletonBlock height="h-20" className="text-lg text-white/70 text-center content-center">
				Loading...
			</SkeletonBlock>
		);
	}

	return (
		<TableLayout tableName="classes" tableFields={["#", "Class Name", "Course", "Batch", "Teacher", "No. of Students", "Classroom", "Timing", "Status", "Actions"]}>
			{classesData?.length === 0 ||
				classesData?.map((classDetails, index) => {
					return (
						<TableRow key={index}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>
								<span>{classDetails.classTopic}</span>
							</TableCell>
							<TableCell>{classDetails.course}</TableCell>
							<TableCell>{classDetails.batch}</TableCell>
							<TableCell>{classDetails.teacher}</TableCell>
							<TableCell className="text-center">{classDetails.noOfStudents}</TableCell>
							<TableCell>{classDetails.classroom}</TableCell>
							<TableCell>{classDetails.timing}</TableCell>
							<TableCell className="text-center">{classDetails.status === "Active" ? "🟢" : "🔴"}</TableCell>
							<TableCell className="flex items-center gap-2">
								<Tooltip title="View">
									<button className="bg-sky-400/15 p-2 text-sky-600 rounded-md">
										<Eye size="1.1rem" />
									</button>
								</Tooltip>
								<Tooltip title="Edit">
									<button className="bg-green-400/15 p-2 text-green-600 rounded-md">
										<Edit size="1.1rem" />
									</button>
								</Tooltip>
								<Tooltip title="Delete">
									<button className="bg-red-600/20 p-2 text-red-600 rounded-md">
										<Trash2 size="1.1rem" />
									</button>
								</Tooltip>
							</TableCell>
						</TableRow>
					);
				})}
		</TableLayout>
	);
};

export default ClassesTable;
