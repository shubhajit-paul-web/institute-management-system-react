import {Spin} from "antd";
import Wrapper from "./Wrapper";

const AlreadyLoggedInSkeleton = () => {
	return (
		<Wrapper>
			<div className="w-[24rem] h-[14rem] dark:bg-bg-dark/80 rounded-xl animate-pulse flex justify-center items-center flex-col gap-3">
				<Spin size="large" />
				<p className="text-white/70">Loading...</p>
			</div>
		</Wrapper>
	);
};

export default AlreadyLoggedInSkeleton;
