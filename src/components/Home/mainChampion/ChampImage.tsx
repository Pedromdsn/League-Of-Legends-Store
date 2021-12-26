import Image from "next/image"

import Champ from "../../../../public/sion.jpg"
const ChampImage = () => {
	return (
		<div
			className="champion xl:hidden">
			<Image src={Champ} height="400px" width="400px" />
		</div>
	)
}

export default ChampImage
