const SearchBox = ({placeholder}) => {
  return (
	<input type="search" placeholder={placeholder} className="w-full py-3 px-4 rounded-lg text-lg border dark:border-dark-one dark:bg-bg-dark dark:text-text-main-dark transition ease-linear outline-0 duration-150 focus:shadow-[0_0_0_4px_rgba(0,0,0,0.10)]" />
  )
}

export default SearchBox