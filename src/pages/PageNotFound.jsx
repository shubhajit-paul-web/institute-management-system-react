import PageWrapper from "../components/PageWrapper";
import PageNotFoundImg from "../assets/images/pagenotfound-img.svg";
import {useNavigate} from "react-router-dom";

const PageNotFound = () => {
	const navigate = useNavigate();

	return (
		<PageWrapper>
			<div className="h-full flex flex-col items-center justify-center py-5">
				{/* Page Not Found - Illustration */}
				<img className="w-1/5 opacity-85 mb-5 transition-all duration-500 hover:scale-105" src={PageNotFoundImg} alt="Page Not Found - Illustration" />
				{/* Page Not Found - Contents */}
				<h2 className="text-6xl font-bold text-orange-400 mb-2">404</h2>
				<h3 className="dark:text-[#F5F5F5] text-3xl font-semibold">Oops! Page Not Found</h3>
				<p className="dark:text-[#B0BEC5] text-lg my-3">We couldn’t find what you were looking for.</p>
				<button className="mt-8 text-lg font-medium text-white dark:bg-[#FF6E40] py-3 px-5 rounded-lg hover:bg-[#FF6E40]/80" onClick={() => navigate("/")}>
					Go to Homepage
				</button>
			</div>
		</PageWrapper>
	);
};

export default PageNotFound;
