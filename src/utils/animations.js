export const fadeIn = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };
  
  export const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  export const slideIn = (direction = "left") => ({
    initial: {
      x: direction === "left" ? -100 : 100,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    }
  });