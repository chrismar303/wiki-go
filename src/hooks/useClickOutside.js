import {useEffect, useRef} from 'react'

export default function useClickOutside(callback) {
  let ref = useRef()

  useEffect(() => {
    const handler = event => {
      if (!ref.current?.contains(event.target)) callback()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])
  return ref
}
