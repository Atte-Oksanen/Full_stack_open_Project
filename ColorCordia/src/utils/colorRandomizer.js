import { hsvToRgb, rgbToHex } from "./colorConverters"
import { analogousHarmony, complementaryHarmony, compoundHarmony, doubleSplitComplementary, monoHarmony, shadeHarmony, splitComplementaryHarmony, squareHarmony, triadHarmony } from "./colorHarmonies"

export const randomizeColor = () => {
  return rgbToHex({
    r: Math.floor(Math.random() * 245 + 10),
    g: Math.floor(Math.random() * 245 + 10),
    b: Math.floor(Math.random() * 245 + 10)
  })
}

export const randomizeColorWheelPos = () => {
  return rgbToHex(hsvToRgb({
    h: Math.random(),
    s: (Math.random() + 0.1) % 0.98,
    v: 1
  }))
}

export const createRandomHarmony = hex => {
  const harmonyNum = Math.round(Math.random() * 9)
  console.log(hex)
  switch (harmonyNum) {
    case 1:
      return analogousHarmony(hex)
    case 2:
      return monoHarmony(hex)
    case 3:
      return triadHarmony(hex)
    case 4:
      return complementaryHarmony(hex)
    case 5:
      return splitComplementaryHarmony(hex)
    case 6:
      return doubleSplitComplementary(hex)
    case 7:
      return squareHarmony(hex)
    case 8:
      return compoundHarmony(hex)
    default:
      return shadeHarmony(hex)
  }
}