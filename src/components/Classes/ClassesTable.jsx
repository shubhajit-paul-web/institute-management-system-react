import TableCell from "../TableUtils/TableCell";
import TableLayout from "../TableUtils/TableLayout";
import TableRow from "../TableUtils/TableRow";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import classesService from "../../appwrite/services/classesService";
import {addClass} from "../../features/classes/classesSlice";
import SkeletonBlock from "../Skeletons/SkeletonBlock";
import ViewBtn from "../TableUtils/Buttons/ViewBtn";
import EditBtn from "../TableUtils/Buttons/EditBtn";
import DeleteBtn from "../TableUtils/Buttons/DeleteBtn";
import { Tooltip } from "antd";

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

	return loading ? (
		<SkeletonBlock height="h-25" className="text-lg text-white/70 text-center content-center">
			Loading...
		</SkeletonBlock>
	) : (
		<TableLayout tableName="classes" tableFields={["#", "Class Name", "Course", "Batch", "Teacher", "No. of Students", "Classroom", "Timing", "Status", "Actions"]} dataLength={classesData.length}>
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
							<TableCell className="text-center cursor-default">
								<Tooltip title={classDetails.status}>
									{classDetails.status === "Active" ? "🟢" : "🔴"}
								</Tooltip>
							</TableCell>
							<TableCell className="flex items-center gap-2">
								<ViewBtn />
								<EditBtn />
								<DeleteBtn />
							</TableCell>
						</TableRow>
					);
				})}
		</TableLayout>
	);
};

export default ClassesTable;
