import { HEX, HSV } from '../types/colorTypes'
import { hexToRgb, hsvToRgb, rgbToHex, rgbToHsv } from './colorConverters'

const checkColorArray = (array: HSV[]) => {
  return transformToHexArray(array.map(color => {
    if (color.h > 360) {
      color.h = color.h - 360
    } else if (color.h < 0) {
      color.h = color.h + 360
    }
    if (color.s > 1) {
      color.s = 1
    }
    if (color.v > 1) {
      color.v = 1
    }
    color.h = color.h / 360
    return color
  }))
}

const transformToHsv = (hex: HEX): HSV => {
  const hsv = rgbToHsv(hexToRgb(hex))
  return { ...hsv, h: hsv.h * 360 }
}

const transformToHexArray = (hsvArray: HSV[]) => {
  return hsvArray.map(hsv => rgbToHex(hsvToRgb(hsv)))
}

const getMultiplier = (attribute: number) => {
  if (attribute > 0.6) {
    return 0.8
  }
  return 1.2
}

export const analogousHarmony = (hex: HEX) => {
  const hsv = transformToHsv(hex)
  const vMultiplier = getMultiplier(hsv.v)
  let returnArray = [
    { ...hsv, h: hsv.h + 15 },
    { ...hsv, h: hsv.h + 30, v: hsv.v * vMultiplier },
    { ...hsv },
    { ...hsv, h: hsv.h - 15 },
    { ...hsv, h: hsv.h - 30, v: hsv.v * vMultiplier },
  ]
  return checkColorArray(returnArray)
}

export const monoHarmony = (hex: HEX) => {
  const hsv = transformToHsv(hex)
  const vMultiplier = getMultiplier(hsv.v)
  const saturationMultiplier = getMultiplier(hsv.s)
  return checkColorArray([
    { ...hsv, v: hsv.v * vMultiplier * 0.75, s: hsv.s * saturationMultiplier },
    { ...hsv, v: hsv.v * vMultiplier * 0.8 },
    { ...hsv },
    { ...hsv, v: hsv.v * vMultiplier * 1.1 },
    { ...hsv, v: hsv.v / vMultiplier, s: hsv.s * saturationMultiplier },
  ])
}

export const triadHarmony = (hex: HEX) => {
  const hsv = transformToHsv(hex)
  const saturationMultiplier = getMultiplier(hsv.s)
  const valueMultiplier = getMultiplier(hsv.v)
  let returnArray = [
    { ...hsv, v: hsv.v * valueMultiplier },
    { ...hsv, h: hsv.h + 110, s: hsv.s * saturationMultiplier },
    { ...hsv },
    { ...hsv, h: hsv.h - 110 },
    { ...hsv, h: hsv.h - 110, v: hsv.v * valueMultiplier },
  ]

  return checkColorArray(returnArray)
}

export const complementaryHarmony = (hex: HEX) => {
  const hsv = transformToHsv(hex)
  const saturationMultiplier = getMultiplier(hsv.s)
  let returnArray = [
    { ...hsv, s: hsv.s * saturationMultiplier * saturationMultiplier },
    { ...hsv, s: hsv.s * saturationMultiplier },
    { ...hsv },
    { ...hsv, h: hsv.h - 180 },
    { ...hsv, h: hsv.h - 180, v: hsv.v * getMultiplier(hsv.v) },
  ]

  return checkColorArray(returnArray)
}

export const splitComplementaryHarmony = (hex: HEX) => {
  const hsv = transformToHsv(hex)
  const saturationMultiplier = getMultiplier(hsv.s)
  let returnArray = [
    { ...hsv, h: hsv.h - 150 },
    { ...hsv, h: hsv.h - 150, s: hsv.s * saturationMultiplier },
    { ...hsv },
    { ...hsv, h: hsv.h + 150 },
    { ...hsv, h: hsv.h + 150, v: hsv.v * getMultiplier(hsv.v) },
  ]

  return checkColorArray(returnArray)
}

export const doubleSplitComplementary = (hex: HEX) => {
  const hsv = transformToHsv(hex)
  let returnArray = [
    { ...hsv, h: hsv.h - 30 },
    { ...hsv, h: hsv.h - 150 },
    { ...hsv },
    { ...hsv, h: hsv.h + 30 },
    { ...hsv, h: hsv.h + 150 },
  ]

  return checkColorArray(returnArray)
}

export const squareHarmony = (hex: HEX) => {
  const hsv = transformToHsv(hex)
  const valueMultiplier = getMultiplier(hsv.v)
  let returnArray = [
    { ...hsv, v: hsv.v * valueMultiplier },
    { ...hsv, h: hsv.h + 90 },
    { ...hsv },
    { ...hsv, h: hsv.h + 180 },
    { ...hsv, h: hsv.h + 270 },
  ]

  return checkColorArray(returnArray)
}

export const compoundHarmony = (hex: HEX) => {
  const hsv = transformToHsv(hex)
  const valueMultiplier = getMultiplier(hsv.v)
  const saturationMultiplier = getMultiplier(hsv.s)
  let returnArray = [
    { ...hsv, h: hsv.h + 160, v: hsv.v * valueMultiplier },
    { ...hsv, h: hsv.h + 170 },
    { ...hsv },
    { ...hsv, h: hsv.h + 20, s: hsv.s * saturationMultiplier, v: hsv.v * valueMultiplier * 1.2 },
    { ...hsv, h: hsv.h + 10, v: hsv.v * valueMultiplier },
  ]

  return checkColorArray(returnArray)
}

export const shadeHarmony = (hex: HEX) => {
  const hsv = transformToHsv(hex)
  const vMultiplier = getMultiplier(hsv.v)
  if (hsv.v > 0.8) {
    return checkColorArray([
      { ...hsv, v: hsv.v * vMultiplier / 1.6 },
      { ...hsv, v: hsv.v * vMultiplier / 1.1 },
      { ...hsv },
      { ...hsv, v: hsv.v * vMultiplier },
      { ...hsv, v: hsv.v * vMultiplier * 1.1 },
    ])
  }
  return checkColorArray([
    { ...hsv, v: hsv.v * vMultiplier / 1.6 },
    { ...hsv, v: hsv.v * vMultiplier },
    { ...hsv },
    { ...hsv, v: hsv.v / vMultiplier },
    { ...hsv, v: hsv.v / vMultiplier * 1.1 },
  ])
}