import { useEffect, useState } from 'react'

export function useUpdate(cb, deps = []) {
  const [isFirstRender, setFirstRender] = useState(true)

  useEffect(() => {
    if (isFirstRender) {
      setFirstRender(false)
    } else {
      cb()
    }
  }, deps)
}
