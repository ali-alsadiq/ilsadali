import React, { useEffect  } from 'react';
import { motion } from "framer-motion";
import logoState from '../local_storage/logoState';
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";

function PageAbout() {
    useEffect(() => {
        document.title = 'ilsadali | About';
    });
        
    const logoStateAndActions = logoState();
    const logoLocalState = logoStateAndActions[0];
    const logoLocalActions = logoStateAndActions[1];

    function toggleVisabitly(){
        setTimeout(function(){logoLocalActions.changeVisabilty('true')}, 3500);
    }

    return (
        <>
            {(logoLocalState.visable ==='true' ?

            <motion.section
                initial={{ scale:0, opacity:0, y:'-80vh'}}
                animate={{ scale:1, opacity:1 , y:0}}
                transition={{ type: 'tween', duration: .5 }}
                exit={{ scale:0.0, opacity:0,y:'80vh',transition:{ ease: 'easeInOut', duration: .5}  }}>
               
                <h2>Page About...</h2>
                        <FaIcons.FaReact className='icon react-icon'></FaIcons.FaReact>
                        <FaIcons.FaSass className='icon sass-icon'></FaIcons.FaSass>
                        <DiIcons.DiJavascript1 className= 'icon js-icon'></DiIcons.DiJavascript1>
                        <SiIcons.SiAdobeillustrator className='icon ai-icon'></SiIcons.SiAdobeillustrator>
                        <SiIcons.SiAdobephotoshop className='icon ps-icon'></SiIcons.SiAdobephotoshop>
                        <SiIcons.SiAdobexd className='icon xd-icon'></SiIcons.SiAdobexd>
                        <FaIcons.FaReact className='icon react-icon'></FaIcons.FaReact>
                        <FaIcons.FaSass className='icon sass-icon'></FaIcons.FaSass>
                        <DiIcons.DiJavascript1 className='icon js-icon'></DiIcons.DiJavascript1>
                        <SiIcons.SiAdobeillustrator className='icon ai-icon'></SiIcons.SiAdobeillustrator>
                        <SiIcons.SiAdobephotoshop className='icon ps-icon'></SiIcons.SiAdobephotoshop>
                        <SiIcons.SiAdobexd className='icon xd-icon'></SiIcons.SiAdobexd>
                        <FaIcons.FaSass className='icon sass-icon'></FaIcons.FaSass>
                        <DiIcons.DiJavascript1 className='icon js-icon'></DiIcons.DiJavascript1>
                        <FaIcons.FaPhp className='icon php-icon'></FaIcons.FaPhp>
                        <FaIcons.FaWordpress className='icon wp-icon'></FaIcons.FaWordpress>
                        <SiIcons.SiWoocommerce className="icon woo-icon"></SiIcons.SiWoocommerce><br></br>
                        <SiIcons.SiAdobeillustrator className='icon ai-icon'></SiIcons.SiAdobeillustrator>
                        <SiIcons.SiAdobephotoshop className='icon ps-icon'></SiIcons.SiAdobephotoshop>
                        <SiIcons.SiAdobexd className='icon xd-icon'></SiIcons.SiAdobexd>

            </motion.section>
        :toggleVisabitly() )}
        </>
    )
}

export default PageAbout
