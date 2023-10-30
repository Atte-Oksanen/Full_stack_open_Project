/* eslint-disable react/prop-types */
import ColorTweaker from "./ColorTweaker"
import PaletteGenerator from "./paletteGenerator"

const PaletteView = ({ color, setColor }) => {
  return (
    <>
      <ColorTweaker color={color} setColor={setColor}></ColorTweaker>
      <PaletteGenerator color={color} setColor={setColor}></PaletteGenerator>
    </>
  )
}

export default PaletteView