import { IconType } from "react-icons"
import { IoTelescopeOutline } from "react-icons/io5"

const Why = () => {
	return (
		<div className="max-w-[1350px] w-[90vw] mx-auto -mt-28 mb-28 flex justify-center flex-wrap gap-10">
			<WhyItem
				Icon={IoTelescopeOutline}
				title="Qui dolor dolor duis sint fugiat sint."
				description="Ea elit adipisicing elit ea aliquip ullamco magna aliqua magna enim. Nisi anim cupidatat id Lorem tempor non ad."
			/>
			<WhyItem
				Icon={IoTelescopeOutline}
				title="Qui dolor dolor duis sint fugiat sint."
				description="Ea elit adipisicing elit ea aliquip ullamco magna aliqua magna enim. Nisi anim cupidatat id Lorem tempor non ad."
			/>
			<WhyItem
				Icon={IoTelescopeOutline}
				title="Qui dolor dolor duis sint fugiat sint."
				description="Ea elit adipisicing elit ea aliquip ullamco magna aliqua magna enim. Nisi anim cupidatat id Lorem tempor non ad."
			/>
		</div>
	)
}

interface WhyItemProps {
	title: string
	Icon: IconType
	description: string
}

const WhyItem = ({ Icon, title, description }: WhyItemProps) => {
	return (
		<div className="z-10 relative w-[30%] min-w-[330px]">
			<div
				className="flex flex-col px-6 py-5 gap-3 bg-white rounded-md shadow-md shadow-gray-500 after-border after:-translate-x-3 after:-translate-y-1">
				<div className="flex items-center gap-5">
					<Icon className="bg-blue-500 text-white w-[60px] h-[50px] p-2 rounded shadow-good shadow-gray-500/40" />
					<div className="text-xl font-bold">{title}</div>
				</div>
				<div className="text-lg text-gray-600">{description}</div>
			</div>
		</div>
	)
}

export default Why
