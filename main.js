import './style.css'

const COLOR_PALETTE = {
  '#AD0042': 'Red',
  '#960854': 'Violet',
  '#3DFF77': 'Green',
  '#0FFF97': 'Aquamarine',
  '#FFE347': 'Yellow'
}

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker')

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option')
    option.value = color
    option.innerText = COLOR_PALETTE[color]

    colorPickerSelect.append(option)
  })
}

const addEventListenerToColorPicker = () => {
  const colorPickerInput = document.querySelector('#color-picker')
  const colorNameElement = document.querySelector('#color-name')

  colorPickerInput.addEventListener('input', (event) => {
    const newColor = event.target.value
    document.body.style.backgroundColor = newColor
    const colorNameText = newColor !== '' ? newColor : '-'
    colorNameElement.innerText = colorNameText
  })
}

addOptionsToColorPicker()
addEventListenerToColorPicker()
