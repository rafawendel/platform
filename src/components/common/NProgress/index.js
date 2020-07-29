import React, { useEffect, useRef, useState } from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { makeStyles } from './styles'

export default function NextProgress({
  startPosition,
  stopDelayMs,
  color,
  height,
  isLoading,
  options
}) {
  const timer = useRef(null)
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    if (options) NProgress.configure(options)

    const routeChangeStart = () => {
      setActive(true)
    }

    const routeChangeEnd = () => {
      timer.current = setTimeout(() => {
        setActive(false)
      }, stopDelayMs)
    }

    Router.events.on('routeChangeStart', routeChangeStart)
    Router.events.on('routeChangeComplete', routeChangeEnd)
    Router.events.on('routeChangeError', routeChangeEnd)

    return () => {
      clearTimeout(timer.current)
    }
  }, [options, stopDelayMs])

  useEffect(() => {
    if (isActive || isLoading) {
      NProgress.set(startPosition)
      NProgress.start()
    } else {
      NProgress.done(true)
    }
  }, [isActive, isLoading, startPosition])

  return (
    <style jsx global>
      {makeStyles(color, height)}
    </style>
  )
}

NextProgress.propTypes = {
  startPosition: PropTypes.number,
  stopDelayMs: PropTypes.number,
  color: PropTypes.string,
  height: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  options: PropTypes.shape({
    minimum: PropTypes.number,
    easing: PropTypes.string,
    positionUsing: PropTypes.string,
    speed: PropTypes.number,
    trickle: PropTypes.bool,
    trickleRate: PropTypes.number,
    trickleSpeed: PropTypes.number,
    showSpinner: PropTypes.bool,
    barSelector: PropTypes.string,
    spinnerSelector: PropTypes.string,
    parent: PropTypes.string,
    template: PropTypes.string
  })
}

NextProgress.defaultProps = {
  startPosition: 0.3,
  stopDelayMs: 200,
  color: '#29d',
  height: 3
}
