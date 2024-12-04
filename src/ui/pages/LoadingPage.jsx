import { useAtom } from "jotai"
import { motion } from "motion/react"
import { useEffect } from "react"

import { progressAtom } from "$stores/loadingProgress"
import simulateProgress from "$utils/simulateProgress"

import logoSrc from "$assets/csi-logo.png"

export default function LoadingScreen() {
  const animateConfig = {
    duration: 1,
  }
  const [progress, setProgress] = useAtom(progressAtom)

  useEffect(() => {
    // Simulate loading progress
    const interval = simulateProgress(setProgress)

    return () => clearInterval(interval)
  }, [])
  return (
    <motion.div
      className="absolute top-0 left-0 w-svw h-svh flex flex-col items-center justify-center bg-black-russian-950 z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: animateConfig.duration }}
      id="loadingScreen"
    >
      <section className="flex flex-col items-center justify-center gap-4 p-4">
        <motion.div
          className="text-black-russian-50/80 text-2xl font-medium font-mono text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: animateConfig.duration }}
        >
          <img src={logoSrc} alt="" className="aspect-auto w-32" />
        </motion.div>

        {/* progress bar */}
        <div className="w-full h-1  bg-black-russian-50/30 overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: animateConfig.duration }}
          />
        </div>
      </section>
    </motion.div>
  )
}
