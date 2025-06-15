import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";
import LeftSideSection from "../components/SettingsPage/LeftSideSection";
import RightSideSection from "../components/SettingsPage/RightSideSection";

const Settings = () => {
	return (
		<PageWrapper pageName="Account Settings">
			<SectionWrapper>
				<div className="flex justify-between items-start gap-5 p-5">
					<LeftSideSection />
					<RightSideSection />
				</div>
			</SectionWrapper>
		</PageWrapper>
	);
};

export default Settings;
