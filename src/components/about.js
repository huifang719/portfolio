import { Container } from "react-bootstrap"
import { motion } from "framer-motion"

function About() {
  return (
    <motion.div style={{maxHeight: "72vh"}}
      intial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
        
    </motion.div>
  )
}

export default About