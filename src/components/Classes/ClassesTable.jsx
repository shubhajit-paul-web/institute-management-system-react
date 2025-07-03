import { Edit, Trash2 } from "lucide-react";
import TableCell from "../TableUtils/TableCell";
import TableLayout from "../TableUtils/TableLayout";
import TableRow from "../TableUtils/TableRow";

const ClassesTable = () => {
	const classesData = [
		{
			id: 1,
			classTopic: "Class 12 Science",
			course: "Physics",
			section: "A",
			batch: "2025",
			teacher: "Mr. Sinha",
			noOfStudents: 40,
			classroom: "Room 302",
			timing: "9:00 AM - 10:00 AM",
			status: "Active",
			actions: ["Edit", "Delete", "View"],
		},
		{
			id: 2,
			classTopic: "Class 9 English",
			course: "English Literature",
			section: "B",
			batch: "2025",
			teacher: "Ms. Fernandez",
			noOfStudents: 30,
			classroom: "Room 203",
			timing: "11:30 AM - 12:30 PM",
			status: "Active",
			actions: ["Edit", "Delete", "View"],
		},
		{
			id: 3,
			classTopic: "Class 8 Maths Class 8 MathsClass 8 Maths 8 Maths 8 Maths",
			course: "Mathematics",
			section: "A",
			batch: "2024",
			teacher: "Mr. Gupta",
			noOfStudents: 28,
			classroom: "Room 101",
			timing: "1:00 PM - 2:00 PM",
			status: "Inactive",
			actions: ["Edit", "Delete", "View"],
		},
		{
			id: 4,
			classTopic: "Class 11 Commerce",
			course: "Economics",
			section: "C",
			batch: "2025",
			teacher: "Mrs. Sharma",
			noOfStudents: 35,
			classroom: "Room 305",
			timing: "10:15 AM - 11:15 AM",
			status: "Active",
			actions: ["Edit", "Delete", "View"],
		},
		{
			id: 5,
			classTopic: "Class 10 Arts",
			course: "History",
			section: "B",
			batch: "2024",
			teacher: "Ms. Roy",
			noOfStudents: 27,
			classroom: "Room 204",
			timing: "12:45 PM - 1:45 PM",
			status: "Inactive",
			actions: ["Edit", "Delete", "View"],
		},
	];

	return (
		<TableLayout tableName="classes" tableFields={["#", "Class Name", "Course", "Batch", "Teacher", "No. of Students", "Classroom", "Timing", "Status", "Actions"]}>
			{classesData?.length === 0 ||
				classesData?.map((classDetails, index) => {
					return (
						<TableRow>
							<TableCell>{index + 1}</TableCell>
							<TableCell>
                <span>{classDetails.classTopic}</span>
              </TableCell>
							<TableCell>{classDetails.course}</TableCell>
							<TableCell>{classDetails.batch}</TableCell>
							<TableCell>{classDetails.teacher}</TableCell>
							<TableCell>{classDetails.noOfStudents}</TableCell>
							<TableCell>{classDetails.classroom}</TableCell>
							<TableCell>{classDetails.timing}</TableCell>
							<TableCell className="text-center">{classDetails.status === "Active" ? "🟢" : "🔴"}</TableCell>
              <TableCell className="flex items-center gap-2">
                <button className="bg-green-600/60 p-2 rounded-md"><Edit size="1.2rem" /></button>
                <button className="bg-red-600/60 p-2 rounded-md"><Trash2 size="1.2rem" /></button>
              </TableCell>
						</TableRow>
					);
				})}
		</TableLayout>
	);
};

export default ClassesTable;
