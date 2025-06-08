import {UserRoundPlus} from "lucide-react";
import PageHeader from "../PageHeader";

const StudentsHeader = () => {
	return (
		<PageHeader placeholder="Search students..." btnIcon={<UserRoundPlus size="1.05rem" />} btnText="Admission">
			<select className="px-7 py-[0.9rem] rounded-lg bg-zinc-100 border border-zinc-300">
				<option value="" defaultValue>
					Export
				</option>
				<option value="PDF">PDF</option>
				<option value="XLS">XLS</option>
			</select>
		</PageHeader>
	);
};

export default StudentsHeader;
