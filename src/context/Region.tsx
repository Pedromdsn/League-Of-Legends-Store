import { createContext, Dispatch, SetStateAction, useState } from "react"

interface RegionContextProps {
	children: JSX.Element
}

interface RegionContextReturn {
	region: string
	setRegion: Dispatch<SetStateAction<string>>
}

export const RegionContext = createContext({} as RegionContextReturn)

export const RegionProvider = ({ children }: RegionContextProps) => {
	const [region, setRegion] = useState("")

	return <RegionContext.Provider value={{ region, setRegion }}>{children}</RegionContext.Provider>
}
