import { motion } from "framer-motion"

const pageTransitionVariants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
  pageExit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      when: "afterChildren",
    },
  },
}

const PageTransition = ({children}) => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
