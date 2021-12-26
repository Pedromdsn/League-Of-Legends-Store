import Image from "next/image"

import Champ from "../../../../public/sion.jpg"
const ChampImage = () => {
	return (
		<div
			className="border-[3px] border-blue-400 flex justify-center items-center 
			rounded-[100%] before:rounded-[100%] overflow-hidden
			before:border-dashed before:border-2 before:border-blue-500 before:w-[420px] before:h-[420px] before:absolute">
			<Image src={Champ} height="400px" width="400px" />
		</div>
	)
}

export default ChampImage
