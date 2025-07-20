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
import {Tooltip} from "antd";
import StatusBadge from "../StatusBadge";
import shortenTextWithDots from "../../utils/shortenTextWithDots";
import {Clock} from "lucide-react";

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

	function classStatusBadge(status) {
		if (status === "Active") {
			return <StatusBadge status={status} color="green" />;
		} else if (status === "Inactive") {
			return <StatusBadge status={status} color="red" />;
		}
	}

	return loading ? (
		<SkeletonBlock height="h-25" className="text-lg text-white/70 text-center content-center">
			Loading...
		</SkeletonBlock>
	) : (
		<TableLayout tableName="classes" tableFields={["#", "Topic", "Course", "Batch", "Instructor", "Students", "Room", "Schedule", "Status", "Actions"]} dataLength={classesData.length}>
			{classesData?.length === 0 ||
				classesData?.map((classDetails, index) => {
					return (
						<TableRow key={index}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>
								<span>{shortenTextWithDots(classDetails.classTopic, 25)}</span>
							</TableCell>
							<TableCell>{shortenTextWithDots(classDetails.course, 20)}</TableCell>
							<TableCell>{classDetails.batch}</TableCell>
							<TableCell>{classDetails.teacher}</TableCell>
							<TableCell className="text-center">{classDetails.noOfStudents}</TableCell>
							<TableCell>{classDetails.classroom}</TableCell>
							<TableCell>
								<span className="min-h-8 w-full inline-flex justify-center items-center">
									<Tooltip title={classDetails.timing}>
										<Clock size="1.3rem" />
									</Tooltip>
								</span>
							</TableCell>
							<TableCell className="cursor-default">{classStatusBadge(classDetails.status)}</TableCell>
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
