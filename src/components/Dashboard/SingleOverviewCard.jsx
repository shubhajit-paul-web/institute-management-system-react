const SingleOverviewCard = ({icon, name, data}) => {
  return (
	<div className="w-fit px-9 py-7 rounded-xl flex justify-center items-center gap-4 bg-green-200">
		{/* left */}
		<div className="bg-white w-[4.3rem] aspect-square flex justify-center items-center rounded-full">
			<div>{icon}</div>
		</div>
		{/* right */}
		<div>
			<strong className="text-2xl">{name}</strong>
			<div>{data}</div>
		</div>
	</div>
  )
}

export default SingleOverviewCard