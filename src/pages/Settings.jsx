import { lazy } from "react";
import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";
const LeftSideSection = lazy(() => import("../components/Settings/LeftSideSection"));
const RightSideSection = lazy(() => import("../components/Settings/RightSideSection"));

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
