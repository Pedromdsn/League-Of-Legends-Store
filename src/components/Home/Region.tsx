import { useContext } from "react"
import { RegionContext } from "../../context/Region"

import { BsCheckLg } from "react-icons/bs"

const Region = () => {
	return (
		<div className="max-w-[1350px] w-[90vw] mx-auto">
			<div className="text-shadown text-4xl text-white font-bold uppercase">Select Region...</div>
			<div className="flex flex-wrap mt-3 gap-5 flex-">
				<RegionBarItem name="EUW" description="Europe West" />
				<RegionBarItem name="NA" description="North America" />
				<RegionBarItem name="EUNE" description="Europe North and East" />
				<RegionBarItem name="OCE" description="Oceania" />
				<RegionBarItem name="TR" description="Turkey" />
				<RegionBarItem name="BR" description="Brazil" />
				<RegionBarItem name="LAN" description="Latin America North" />
			</div>
			<div className="flex flex-wrap mt-6 gap-5 justify-center">
				<RegionToBuyItem price={9.99} />
				<RegionToBuyItem price={9.99} />
				<RegionToBuyItem price={9.99} />
				<RegionToBuyItem price={9.99} />
				<RegionToBuyItem price={9.99} />
			</div>
		</div>
	)
}

interface RegionItemBarProps {
	name: string
	description: string
}

const RegionBarItem = ({ name, description }: RegionItemBarProps) => {
	const { region, setRegion } = useContext(RegionContext)
	return (
		<div
			className={`text-white px-7 py-4 bg-black/90 rounded min-w-[18%] ${
				region == name && "border-b-4 border-blue-500"
			}`}
			onClick={() => setRegion(name)}>
			<div className="text-2xl">{name}</div>
			<div className="text-xl">{description}</div>
		</div>
	)
}

interface RegionToBuyBarProps {
	price: number
}

const RegionToBuyItem = ({ price }: RegionToBuyBarProps) => {
	return (
		<div
			className="px-10 py-6 flex flex-col justify-center items-center rounded-xl gap-4 shadow-xl
				after:translate-x-3 after:translate-y-3 relative bg-white after:-z-10
				after:w-full after:h-full after:absolute after:border-2 after:border-blue-500 after:rounded-lg">
			<div className="text-4xl font-bold">$ {price}</div>
			<div className="text-blue-500">Personal</div>
			<div className="text-gray-500">For you and your nibba</div>
			<div>
				<Line text="Yasuo AirBlade Skill" />
				<Line text="Yasuo AirBlade Skill" />
				<Line text="Yasuo AirBlade Skill" />
				<Line text="Yasuo AirBlade Skill" />
			</div>
			<button className="w-[90%] py-2 bg-green-500 text-white font-semibold text-xl rounded-lg">Buy</button>
		</div>
	)
}

interface LineProps {
	text: string
}

const Line = ({ text }: LineProps) => {
	return (
		<div className="flex items-center gap-1 text-gray-500">
			<BsCheckLg />
			<h4>{text}</h4>
		</div>
	)
}

export default Region
