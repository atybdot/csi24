import { progressAtom } from "$stores/loadingProgress"
import { useSetAtom } from "jotai"
import { useState } from "react"

export function useSplineLoader() {
  const x = ""
  const [isLoading, setIsLoading] = useState(true)
  const setProgress = useSetAtom(progressAtom)
  const onLoad = () => {
    setProgress(100)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }
  return { isLoading, onLoad }
}
