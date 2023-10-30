/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import { createPalette } from "../../services/palettes"
import { useEffect, useState } from "react"
import PaletteCanvas from "../utils/PaletteCanvas"
import { GetColorNames } from "../../services/colorNames"

const SinglePaletteView = ({ setMessage, user, communityPalettes, setPalettes }) => {
  const [dataUrl, setDataUrl] = useState(null)
  const id = useParams().id
  const type = id.split('-')[0]
  const [colors, setColors] = useState(null)
  const [shareButtonDisabled, setButtonDisabled] = useState(false)

  useEffect(() => {
    (async () => {
      const colors = await GetColorNames(id.substring(id.indexOf('-') + 1))
      setColors(colors)
    })()
    if (!user) {
      setButtonDisabled(true)
    }
  }, [])

  const handlePaletteCreation = async () => {
    try {
      const newPalette = await createPalette(id)
      setPalettes(communityPalettes.concat(newPalette))
    } catch (error) {
      console.log(error)
      return
    }
    setMessage("palette created")
    setButtonDisabled(true)
  }

  const downloadImage = () => {
    const link = document.createElement('a')
    link.download = `${id}.png`
    link.href = dataUrl
    link.click()
  }

  if (!colors) {
    return null
  }
  return (
    <>
      <div>
        {`${type} pallette from ${colors[2].hex}`}
      </div>
      {colors.map(color => <div key={Math.random()} style={{ background: color.hex }}>{color.hex}-{color.name}</div>)}
      <button disabled={shareButtonDisabled} onClick={handlePaletteCreation}>Share</button>
      <button onClick={downloadImage}>Download</button>
      <PaletteCanvas palette={colors} type={type} setDataUrl={setDataUrl}></PaletteCanvas>
    </>

  )
}

export default SinglePaletteView