import Slider from '@material-ui/core/Slider'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useEffect, useRef } from 'react'

const useStyles = makeStyles({
  root: {
    color: 'var(--color-dark-primary)'
  }
})

function valuetext(value) {
  return `${value}°C`
}

export function DiscreteSlider({ options, helper }) {
  const slider = useRef(null)
  const { marks, minLabel, maxLabel } = options
  if (Array.isArray(marks) && minLabel && maxLabel) {
    marks[0].label = minLabel
    marks[marks.length - 1].label = maxLabel
  }

  const classes = useStyles()
  return (
    <div className="w-full mt-4 py-6">
      <Slider
        ref={slider}
        className={classes.root}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={(_, value) => helper.setValue(value)}
        {...options}
      />
    </div>
  )
}
