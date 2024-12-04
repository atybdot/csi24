import { useState,lazy,Suspense,useEffect } from "react"

import { AnimatePresence } from "motion/react"
import { useSplineLoader } from "$hooks/useSplineLoader"
import LoadingScreen from "$pages/LoadingPage"

import { setScrollBehavior } from "$utils/setScrollBehavior"

const Spline = lazy(() => import("@splinetool/react-spline"))
export default function SplineScene() {
  const [isAnimating, setIsAnimating] = useState(true)
  const { isLoading, onLoad } = useSplineLoader();

  useEffect(()=>{
    setScrollBehavior(isLoading,isAnimating)
  },[isAnimating,isLoading])

  const handleLoad = () => {
    onLoad()
    setIsAnimating(false)
  }

  return (
    <>
      <AnimatePresence>
        {(isLoading || isAnimating) && <LoadingScreen />}
      </AnimatePresence>
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/uodjXa3wgHek1QPa/scene.splinecode"
          onLoad={handleLoad}
        />
      </Suspense>
    </>
  )
}
