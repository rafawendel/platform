import { useEffect, useState } from 'react'

export const useStorage = (key, value, setter, local = false) => {
  const [isFirstRender, setFirstRender] = useState(true)
  useEffect(() => {
    const storage = local ? window.localStorage : window.sessionStorage
    if (isFirstRender) {
      const sessionValue = storage.getItem(key)
      if (sessionValue) setter(JSON.parse(sessionValue))
      setFirstRender(false)
    } else {
      storage.setItem(key, value ? JSON.stringify(value) : '')
    }
  }, [isFirstRender, value, key, setter, local])
}
