import { motion } from "framer-motion";

function PageAbout() {
    return (
        <motion.section
        initial={{ x: '100vw'}}
        animate={{ x:0 }}
        transition={{ type: 'spring', stiffness: 90, duration: 0.3 }}
        exit={{ x:'100vw', transition:{ ease: 'easeInOut'} }}>
            <h2>Page About...</h2>
        </motion.section>
    )
}

export default PageAbout
