const PageWrapper = ({pageName, children}) => {
	return (
		<section className="flex-1 p-7 bg-white rounded-xl">
			<h1 className="text-xl font-medium text-zinc-700 mb-5">{pageName}</h1>
			{children}
		</section>
	);
};

export default PageWrapper;
