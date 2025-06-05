import {UserRoundPlus} from "lucide-react";
import ButtonOne from "../ButtonOne";

const StudentsHeader = () => {
	return (
		<div className="bg-zinc-50 rounded-lg flex justify-between p-5">
			<form className="w-2/5">
				<input type="search" placeholder="Search students..." className="w-full py-3 px-4 rounded-lg text-lg border border-zinc-400 bg-white focus:outline-zinc-500" />
			</form>
			<div className="flex gap-6">
				<select className="px-6 rounded-lg bg-zinc-100">
					<option value="" selected disabled>
						Export
					</option>
					<option value="">PDF</option>
					<option value="">XLS</option>
				</select>
				<ButtonOne icon={<UserRoundPlus size="1.2rem" />} text="Admission" />
			</div>
		</div>
	);
};

export default StudentsHeader;
