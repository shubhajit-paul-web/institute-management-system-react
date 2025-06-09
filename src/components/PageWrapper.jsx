const PageWrapper = ({pageName, children}) => {
	return (
		<section className="flex-1 p-7 dark:bg-bg-dark rounded-2xl">
			<h1 className="text-xl font-medium text-zinc-100 mb-5">{pageName}</h1>
			{children}
		</section>
	);
};

export default PageWrapper;
