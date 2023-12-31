import { useEffect, useRef, useState } from 'react'
import { hexToRgb, hsvToRgb, rgbToHex, rgbToHsv } from '../../utils/colorConverters'
import { useNavigate } from 'react-router-dom'
import { randomizeColorWheelPos } from '../../utils/colorRandomizer'
import NextIcon from '../icons/NextIcon'
import EyeDropperIcon from '../icons/EyeDropperIcon'

const ColorWheel = ({ setColor, setMessage, reRenderWheel }) => {
  const navigate = useNavigate()
  const pointer = useRef()
  const wheel = useRef()
  const pointerBox = useRef()
  const wheelBox = useRef()
  const valueWheel = useRef()
  const [windowWidth, setWidth] = useState(0)
  const [colorInput, setInput] = useState('')
  const [colorValue, setValue] = useState(100)

  useEffect(() => {
    document.addEventListener('mouseup', () => document.onmousemove = null)
    const wheelBoxTemp = wheel.current.getBoundingClientRect()
    const pointerBoxTemp = pointer.current.getBoundingClientRect()
    wheelBox.current = ({
      x: wheelBoxTemp.x + wheelBoxTemp.width / 2,
      y: wheelBoxTemp.y + wheelBoxTemp.height / 2,
      r: wheelBoxTemp.width / 2,
    })
    pointer.current.style.top = wheelBoxTemp.y + wheelBoxTemp.height / 2 - pointerBoxTemp.height / 2 + 'px'
    pointer.current.style.left = wheelBoxTemp.x + wheelBoxTemp.width / 2 - pointerBoxTemp.width / 2 + 'px'
    pointerBox.current = pointerBoxTemp
    let seedColor
    if (colorInput !== '') {
      seedColor = colorInput
    } else {
      seedColor = randomizeColorWheelPos()
    }
    movePointerOnInput(seedColor)
    setInput(seedColor)
  }, [windowWidth, reRenderWheel])

  useEffect(() => {
    window.onresize = () => setWidth(window.innerWidth)
  }, [windowWidth])

  useEffect(() => {
    valueWheel.current.style.opacity = 1 - colorValue / 100
  }, [colorValue])

  const handlePointerClick = event => {
    if (
      Math.sqrt(
        Math.pow(event.clientX - wheelBox.current.x, 2) + Math.pow(event.clientY - wheelBox.current.y, 2)
      ) < wheelBox.current.r
    ) {
      pointer.current.style.top = event.clientY - pointerBox.current.height / 2 + 'px'
      pointer.current.style.left = event.clientX - pointerBox.current.width / 2 + 'px'
    }
    document.onmousemove = pointerDrag
  }

  const pointerDrag = event => {
    event.preventDefault()
    movePointer(event.clientX, event.clientY)
  }

  const handleTouchStart = event => {
    movePointer(event.touches[0].clientX, event.touches[0].clientY)
  }

  const handleColorInput = (event) => {
    setInput(event.target.value)
    movePointerOnInput(event.target.value)
  }

  const movePointerOnInput = hex => {
    const rgb = hexToRgb(hex)
    if (rgb) {
      pointer.current.style.backgroundColor = hex
      const hsv = (rgbToHsv(rgb))
      const coords = { ...hsv, h: hsv.h * 360, s: hsv.s * wheelBox.current.r }
      const theta = coords.h * Math.PI / 180
      pointer.current.style.left = coords.s * Math.cos(theta) + wheelBox.current.x - pointerBox.current.width + 'px'
      pointer.current.style.top = coords.s * Math.sin(theta) + wheelBox.current.y - pointerBox.current.height + 'px'
      setValue(Math.round(hsv.v * 100))
    }
  }

  const movePointer = (clientX, clientY) => {
    const pointerElmt = pointer.current.getBoundingClientRect()
    const pointerPosition = {
      x: pointerElmt.x + pointerElmt.width / 2,
      y: pointerElmt.y + pointerElmt.height / 2,
    }
    if (
      (Math.sqrt(Math.pow(clientX - wheelBox.current.x, 2) + Math.pow(clientY - wheelBox.current.y, 2)) + 10) <
      wheelBox.current.r
    ) {
      pointer.current.style.top = clientY - pointerBox.current.height / 2 + 'px'
      pointer.current.style.left = clientX - pointerBox.current.width / 2 + 'px'
    }
    let degs = Math.atan2(pointerPosition.y - wheelBox.current.y, pointerPosition.x - wheelBox.current.x) * (180 / Math.PI)
    if (degs < 0) {
      degs = degs + 360
    }
    let saturationTemp = Math.sqrt(
      Math.pow(pointerPosition.x - wheelBox.current.x, 2) + Math.pow(pointerPosition.y - wheelBox.current.y, 2)
    ) / wheelBox.current.r * 1.1
    if (saturationTemp > 1) {
      saturationTemp = 1
    }
    const hsvTemp = {
      h: degs / 360,
      s: saturationTemp,
      v: colorValue / 100,
    }
    const pickedColor = rgbToHex(hsvToRgb(hsvTemp))
    pointer.current.style.backgroundColor = pickedColor
    setInput(pickedColor)
  }

  const handleColorSubmit = event => {
    event.preventDefault()
    if (checkColorInput(colorInput)) {
      setColor(colorInput)
      navigate(`/palettes/`)
    } else {
      setMessage('Invalid input')
    }
  }

  const checkColorInput = input => {
    return hexToRgb(input)
  }

  const handleSliderInput = event => {
    setValue(event.target.value)
    if (event.target.value === '0') {
      event.target.value += 1
    } else if (event.target.value >= 100) {
      event.target.value = 100
    }
    const currentHsv = rgbToHsv(hexToRgb(colorInput))
    const newHex = rgbToHex(hsvToRgb({ ...currentHsv, v: (event.target.value / 100) }))
    pointer.current.style.backgroundColor = newHex
    setInput(newHex)
  }

  const handleEyeDropper = () => {
    // eslint-disable-next-line no-undef
    const eyeDropper = new EyeDropper()
    eyeDropper.open().then(result => {
      setInput(result.sRGBHex)
      movePointerOnInput(result.sRGBHex)
    })
  }

  return (
    <>
      <div className='grid w-fit grid-cols-1 grid-rows-1'>
        <div ref={wheel} className='bottom-wheel border border-black'></div>
        <div className='top-wheel'></div>
        <div
          ref={pointer}
          className='pointer'
          onMouseDown={event => handlePointerClick(event)}
          onMouseUp={() => document.onmousemove = null}
          onTouchStart={event => {
            event.stopPropagation()
          }}
          onTouchMove={event => handleTouchStart(event)}
        ></div>
        <div className='value-wheel' ref={valueWheel}>
        </div>
      </div>
      <div className='flex mt-4 justify-between'>
        <label htmlFor='vSlider' className='mx-2'>
          V
        </label>
        <input className='w-full rounded-full m-auto border box-content border-black px-1'
          style={{ WebkitAppearance: 'none', appearance: 'none', outline: 'none', background: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)`, height: '0.5rem', accentColor: rgbToHex({ r: colorValue * 2.45, g: colorValue * 2.45, b: colorValue * 2.45 }) }}
          type="range" max={100} value={colorValue} id='vSlider' onChange={handleSliderInput} />
        <span className='w-6 mx-2'>
          {colorValue}
        </span>
      </div>
      <form onSubmit={handleColorSubmit} className='grid grid-cols-[2f_1fr] grid-rows-2'>
        <input className='text-input inline-block'
          type='text'
          value={colorInput}
          onChange={handleColorInput} />
        {window.EyeDropper && <button type='button' className='pill-button-empty inline-block h-fit w-fit m-auto' onClick={() => handleEyeDropper()}>
          <EyeDropperIcon sizeClass={'h-6 w-6'}></EyeDropperIcon>
        </button>}
        <button className='pill-button mt-4 col-span-2 mx-auto' type='submit'>
          Create palettes
          <div className='inline-block align-text-bottom ml-1'>
            <NextIcon sizeClass={'h-5 w-5'}></NextIcon>
          </div>
        </button>
      </form>
    </>
  )
}

export default ColorWheel
