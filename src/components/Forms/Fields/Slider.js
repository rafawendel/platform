import Slider from '@material-ui/core/Slider'

function valuetext(value) {
  return `${value}°C`
}

export function DiscreteSlider({ options }) {
  return (
    <div className="w-full mt-4 py-6">
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        {...options}
        min={10}
        max={110}
      />
    </div>
  )
}
