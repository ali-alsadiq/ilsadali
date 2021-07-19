import { motion } from "framer-motion";
const footer ={
    hidden:{
    scale:0, 
    opacity:0, 
    },
    visable:{ 
        scale:1, 
        opacity:1 , 
        transition:{
            type: 'tween',
            delay:1, 
            duration: 2
        }
    },
}
function Footer() {
    return (
        <motion.footer
        variants={footer}
        initial="hidden"
        animate="visable">
            <p>Footer</p>
  
        </motion.footer>
    )
}

export default Footer
