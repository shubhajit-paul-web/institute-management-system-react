const SkeletonBlock = ({width = "w-full", height = "h-10", className, children}) => {
	return <div className={`${width} ${height} ${className} dark:bg-bg-dark rounded-lg animate-pulse`}>{children}</div>;
};

export default SkeletonBlock;
