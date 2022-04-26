import Image from "next/image"

import Champ from "../../../../public/sion.jpg"
const ChampImage = () => {
	return (
		<aside
			className="champion xl:hidden">
			<Image src={Champ} height="400px" width="400px" priority alt="Champion"/>
		</aside>
	)
}

export default ChampImage
