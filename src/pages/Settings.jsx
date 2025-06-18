import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";
import LeftSideSection from "../components/Settings/LeftSideSection";
import RightSideSection from "../components/Settings/RightSideSection";

const Settings = () => {
	return (
		<PageWrapper pageName="Account Settings">
			<SectionWrapper>
				<div className="flex justify-between items-start gap-20 p-5">
					<LeftSideSection />
					<RightSideSection />
				</div>
			</SectionWrapper>
		</PageWrapper>
	);
};

export default Settings;
