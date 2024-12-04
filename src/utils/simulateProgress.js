export default function simulateProgress(setProgress) {
  const interval = setInterval(() => {
    setProgress((prevProgress) => {
      if (prevProgress >= 100) {
        clearInterval(interval)
        return 100
      }
      return prevProgress + 10
    })
  }, 500)
  return interval
}
