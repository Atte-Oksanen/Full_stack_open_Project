import { HEX } from "../../types/colorTypes"
import ColorTweaker from "./ColorTweaker"
import PaletteGenerator from "./paletteGenerator"

interface props {
  color: HEX | null,
  setColor: React.Dispatch<React.SetStateAction<string | null>>
}

const PaletteView = ({ color, setColor }: props) => {
  if (!color) {
    return null
  }
  return (
    <div className="md:grid md:grid-cols-[1fr_4fr]">
      <div className="p-4 md:my-4 my-2 md:border-r-2  md:border-gray-200">
        <ColorTweaker color={color} setColor={setColor}></ColorTweaker>
      </div>
      <div className="md:h-screen overflow-y-auto">
        <PaletteGenerator color={color} setColor={setColor}></PaletteGenerator>
      </div>
    </div>
  )
}

export default PaletteView