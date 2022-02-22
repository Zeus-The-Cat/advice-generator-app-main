import { useState, useCallback, useEffect } from 'react'

/**
 * React Hook changes with screen width
 * @param width - smallest/largest screen size
 * @returns {Boolean} - React State true if RealWidth < width
 */
export const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false)
    
    const updateTarget = useCallback((e) => {
        if (e.matches){
            setTargetReached(true);
        }else{
            setTargetReached(false);
        }
    },[]);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`)
        media.addEventListener('change', e => updateTarget(e))
    
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
          setTargetReached(true)
        }
    
        return () => media.removeEventListener('change', e => updateTarget(e))
      }, [])

      return targetReached;
}