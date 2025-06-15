import ProfileField from "./ProfileField";
import ProfileFieldCol from "./ProfileFieldCol";
import ProfileFieldWrapper from "./ProfileFieldWrapper";
import {formatISOToReadableDateTime} from "../../utils/DateTimeUtils.js";

const RightSideSection = () => {
	return (
		<div className="flex-1/3 flex flex-col gap-4">
			{/* Section 1 */}
			<ProfileFieldWrapper>
				<ProfileFieldCol>
					<ProfileField lable="Institute Name" value="Sheryians Coding School" />
					<ProfileField lable="Registration Number" value="1234567890" />
					<ProfileField lable="Type" value="Private" />
				</ProfileFieldCol>
				<ProfileFieldCol>
					<ProfileField lable="Established Year" value="2005" />
					<ProfileField lable="About" value="Lorem ipsum dolor sit, amet consectetur." />
				</ProfileFieldCol>
			</ProfileFieldWrapper>
			{/* Section 2 */}
			<ProfileFieldWrapper>
				<ProfileFieldCol>
					<ProfileField lable="Address" value="Street 45, Main Road" />
					<ProfileField lable="City" value="Cooch Behar" />
					<ProfileField lable="State" value="West Bengal" />
					<ProfileField lable="Pincode" value="736101" />
				</ProfileFieldCol>
				<ProfileFieldCol>
					<ProfileField lable="Country" value="India" />
					<ProfileField lable="Phone Number" value="+91 1234567890" />
					<ProfileField lable="Official Website" value="sheryians.com" />
				</ProfileFieldCol>
			</ProfileFieldWrapper>
			{/* Section 3: Additional account info */}
			<ProfileFieldWrapper>
				<div>
					<p className="text-lg text-white/95 mb-4">Additional Account Info</p>

					<p className="text-base dark:text-white/70">Created at: {formatISOToReadableDateTime("2025-06-14T05:11:06.132+00:00")}</p>
					<p className="text-base dark:text-white/70">Updated at: {formatISOToReadableDateTime("2025-06-15T07:21:24.560+00:00")}</p>
					<p className="text-base dark:text-white/70">Accessed at: {formatISOToReadableDateTime("2025-06-15T07:21:24.558+00:00")}</p>
				</div>
			</ProfileFieldWrapper>
		</div>
	);
};

export default RightSideSection;
