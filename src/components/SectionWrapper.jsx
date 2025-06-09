const SectionWrapper = ({extraStyles = "mt-5", children}) => {
	return <div className={`dark:bg-bg-surface-dark border dark:border-dark-one p-5 rounded-xl ${extraStyles}`}>{children}</div>;
};

export default SectionWrapper;
