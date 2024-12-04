const setScrollBehavior = (isLoading,isAnimating) => {
    if (isLoading || isAnimating) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }
export {setScrollBehavior}