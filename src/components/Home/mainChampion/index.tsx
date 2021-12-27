import ChampImage from "./ChampImage"

const MainChampion = () => {
	return (
		<div className="bg-champion w-screen bg-cover pt-60 pb-60 overflow-hidden">
			<div className="max-w-[1350px] w-[90vw] flex justify-between text-white mx-auto items-center">
				<div className="flex flex-col gap-5 w-[60%] xl:w-full">
					<h1 className="text-4xl font-bold uppercase">
						Labore duis dolor deserunt minim elit aliquip mollit sunt sint.
					</h1>
					<h2 className="text-xl">
						Tempor ipsum mollit tempor quis. Laboris nostrud ea elit consectetur voluptate laboris culpa proident
						commodo aliqua culpa consectetur nulla. Commodo occaecat Lorem labore dolore officia proident consequat
						occaecat ut ut anim cupidatat eiusmod id.
					</h2>
					<div className="flex gap-7 uppercase ">
						<div className="bg-blue-400 px-14 md:px-5 py-3 rounded font-medium">Button #1</div>
						<div className="bg-green-400 px-14 md:px-5 py-3 rounded font-medium">Button #2</div>
					</div>
				</div>
				<ChampImage/>
			</div>
		</div>
	)
}

export default MainChampion
