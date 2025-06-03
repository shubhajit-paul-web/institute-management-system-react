import React from "react";
import SingleOverviewCard from "./SingleOverviewCard";
import {UserRound} from "lucide-react";

const OverviewCards = () => {
	return (
		<div className="bg-zinc-50 mt-5 p-5 rounded-xl flex gap-5 justify-center">
			<SingleOverviewCard icon={<UserRound />} name="Students" data="2450" />
			<SingleOverviewCard icon={<UserRound />} name="Students" data="2450" />
			<SingleOverviewCard icon={<UserRound />} name="Students" data="2450" />
			<SingleOverviewCard icon={<UserRound />} name="Students" data="2450" />
		</div>
	);
};

export default OverviewCards;
