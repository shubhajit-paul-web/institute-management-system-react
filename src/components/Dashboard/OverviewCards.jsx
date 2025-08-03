import {useSelector} from "react-redux";
import SectionWrapper from "../SectionWrapper";
import SingleOverviewCard from "./SingleOverviewCard";
import {CreditCard, GraduationCap, User, UserRound} from "lucide-react";

const OverviewCards = ({amountPaid, children}) => {
	const studentsData = useSelector((state) => state.studentsReducer.students);
	const coursesData = useSelector((state) => state.coursesReducer.courses);

	return (
		<SectionWrapper>
			<div className="flex gap-5 justify-center">
				<SingleOverviewCard icon={<UserRound size="2rem" />} name="Students" data={studentsData.length || "N/A"} route="/students" bgColor="bg-blue-800" />
				<SingleOverviewCard icon={<User size="2rem" />} name="Teachers" data="120" route="/teachers" bgColor="bg-indigo-800" />
				<SingleOverviewCard icon={<GraduationCap size="2rem" />} name="Courses" data={coursesData.length || "N/A"} route="/courses" bgColor="bg-teal-700" />
				<SingleOverviewCard icon={<CreditCard size="2rem" />} name="Payments" data={amountPaid ? "₹" + amountPaid : "N/A"} route="/payments" bgColor="bg-green-700" />
			</div>
			{children}
		</SectionWrapper>
	);
};

export default OverviewCards;
