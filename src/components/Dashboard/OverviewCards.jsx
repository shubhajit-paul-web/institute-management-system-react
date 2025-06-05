import SingleOverviewCard from "./SingleOverviewCard";
import {CreditCard, GraduationCap, User, UserRound} from "lucide-react";

const OverviewCards = ({children}) => {
	return (
		<div className="bg-zinc-50 mt-5 p-5 rounded-xl">
			<div className="flex gap-5 justify-center">
				<SingleOverviewCard icon={<UserRound size="2rem" />} name="Students" data="2450" />
				<SingleOverviewCard icon={<User size="2rem" />} name="Teachers" data="120" />
				<SingleOverviewCard icon={<GraduationCap size="2rem" />} name="Courses" data="14" />
				<SingleOverviewCard icon={<CreditCard size="2rem" />} name="Payments" data="12500" />
			</div>
			{children}
		</div>
	);
};

export default OverviewCards;
