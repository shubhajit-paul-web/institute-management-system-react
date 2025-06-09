import SectionWrapper from "../SectionWrapper";
import SingleOverviewCard from "./SingleOverviewCard";
import {CreditCard, GraduationCap, User, UserRound} from "lucide-react";

const OverviewCards = ({children}) => {
	return (
		<SectionWrapper>
			<div className="flex gap-5 justify-center">
				<SingleOverviewCard icon={<UserRound size="2rem" />} name="Students" data="2450" bgColor="bg-blue-800" />
				<SingleOverviewCard icon={<User size="2rem" />} name="Teachers" data="120" bgColor="bg-indigo-800" />
				<SingleOverviewCard icon={<GraduationCap size="2rem" />} name="Courses" data="14" bgColor="bg-teal-700" />
				<SingleOverviewCard icon={<CreditCard size="2rem" />} name="Payments" data="12500" bgColor="bg-green-700" />
			</div>
			{children}
		</SectionWrapper>
	);
};

export default OverviewCards;
