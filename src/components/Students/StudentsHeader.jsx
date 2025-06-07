import {UserRoundPlus} from "lucide-react";
import ButtonOne from "../ButtonOne";
import SearchBox from "../SearchBox";

const StudentsHeader = () => {
	return (
		<div className="bg-zinc-50 rounded-lg flex justify-between p-5">
			<form className="w-2/5">
				<SearchBox placeholder="Search students..." />
			</form>
			<div className="flex gap-6">
				<select className="px-6 rounded-lg bg-zinc-100">
					<option value="" selected disabled>
						Export
					</option>
					<option value="">PDF</option>
					<option value="">XLS</option>
				</select>
				<ButtonOne icon={<UserRoundPlus size="1.05rem" />} text="Admission" />
			</div>
		</div>
	);
};

export default StudentsHeader;
