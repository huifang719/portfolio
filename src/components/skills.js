import { motion } from "framer-motion"

function Skills() {
  return(
    <motion.div 
      intial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>

    </motion.div>
  )
}

export default Skills