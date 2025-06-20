import ProfileField from "./ProfileField";
import ProfileFieldCol from "./ProfileFieldCol";
import ProfileFieldWrapper from "./ProfileFieldWrapper";
import {formatISOToReadableDateTime} from "../../utils/DateTimeUtils.js";
import { useSelector } from "react-redux";

const RightSideSection = () => {
	const {InstituteName, RegistrationNumber, Type, EstablishedYear, About, Address, City, State, Pincode, Country, PhoneNumber, OfficialWebsite, $createdAt, 
$updatedAt} = useSelector((data) => data.authReducer.instituteDetails);

	return (
		<div className="flex-1/3 flex flex-col gap-4">
			{/* Section 1 */}
			<ProfileFieldWrapper>
				<ProfileFieldCol>
					<ProfileField lable="Institute Name" value={InstituteName} />
					<ProfileField lable="Registration Number" value={RegistrationNumber} />
					<ProfileField lable="Type" value={Type} />
				</ProfileFieldCol>
				<ProfileFieldCol>
					<ProfileField lable="Established Year" value={EstablishedYear} />
					<ProfileField lable="About" value={About} className="line-clamp-3" />
				</ProfileFieldCol>
			</ProfileFieldWrapper>
			{/* Section 2 */}
			<ProfileFieldWrapper>
				<ProfileFieldCol>
					<ProfileField lable="Address" value={Address} className="line-clamp-3" />
					<ProfileField lable="City" value={City} />
					<ProfileField lable="State" value={State} />
					<ProfileField lable="Pincode" value={Pincode} />
				</ProfileFieldCol>
				<ProfileFieldCol>
					<ProfileField lable="Country" value={Country} />
					<ProfileField lable="Phone Number" value={PhoneNumber} />
					<ProfileField lable="Official Website" value={OfficialWebsite || "N/A"} className="line-clamp-3" />
				</ProfileFieldCol>
			</ProfileFieldWrapper>
			{/* Section 3: Additional account info */}
			<ProfileFieldWrapper>
				<div>
					<p className="text-lg text-white/95 mb-4">Additional Account Info</p>

					<p className="text-base dark:text-white/70">Created at: {formatISOToReadableDateTime($createdAt)}</p>
					<p className="text-base dark:text-white/70">Updated at: {formatISOToReadableDateTime($updatedAt)}</p>
				</div>
			</ProfileFieldWrapper>
		</div>
	);
};

export default RightSideSection;
