import React, {useEffect} from 'react';
import { motion } from "framer-motion";

function PageAbout() {
    useEffect(() => {
        document.title = 'ilsadali | About';
    });
    return (
            <motion.section
                initial={{ x: '100vw'}}
                animate={{ x:0 }}
                transition={{ type: 'spring', stiffness: 90, duration: 0.3, delay:0.3, }}
                exit={{ x:'100vw', transition:{ ease: 'easeInOut', duration: 0.3} }}>
               
                <h2>Page About...</h2>
            </motion.section>
        
    )
}

export default PageAbout
