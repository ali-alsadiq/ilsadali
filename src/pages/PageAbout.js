import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import logoState from '../local_storage/logoState';
// import * as FaIcons from "react-icons/fa";
// import * as DiIcons from "react-icons/di";
// import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";

import { NavLink } from 'react-router-dom';


function PageAbout() {
    useEffect(() => {
        document.title = 'Ali Alsadiq | About';
    });

    const logoStateAndActions = logoState();
    const logoLocalState = logoStateAndActions[0];
    const logoLocalActions = logoStateAndActions[1];
    const [isLogoVisable, setLogoVisability] = useState(`${logoLocalState.visable}`);

    function toggleVisabitly() {
        setTimeout(function () {
            logoLocalActions.changeVisabilty('true');
            setLogoVisability('true');
        }, 1000);
    }

    return (
        <>
            {(isLogoVisable === 'true' ?

                <motion.section className="page-section page-about"
                    initial={{ scale: 0, opacity: 0, y: '-30vh' }}
                    animate={{ scale: [0, 0.5, 0.5, 0.5, 1], opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.6 }}
                    exit={{ scale: [1, 0.5, 0.5, 0.5, 0.0], opacity: 0, y: '20vh', transition: { duration: 0.5 } }}>



                    <section className="intro">
                        <h1>About...</h1>
                        <p>Hello, I'm Ali, <br />
                            Front-End Web Developer &amp UX/UI designer based in Vancouver, BC <br />
                            Recent graduate of BCIT's Front-End Web Development Program <br /> </p>
                    </section>

                    <section className="tool-kit">
                        <h2>TOOL KIT</h2>

                        <section className="design">
                            <h3>Design</h3>
                            <div>Illustrator</div>
                            <div>XD</div>
                            <div>Photoshop</div>
                        </section>

                        <section className="development">
                            <h3>Development</h3>
                            <div>HTML5</div>
                            <div>CSS3/ SASS</div>
                            <div>JaveScript</div>
                            <div>PHP</div>
                            <div>WordPress</div>
                            <div>WooCommerce</div>
                            <div>React</div>
                        </section>

                    </section>

                    <section className="page-links">
                        <a href='mailto:ali6254@gmail.com' target="_blank" rel="noopener noreferrer">
                            <div className="nav-text">
                                <BiIcons.BiMailSend className='mail-icon' /> &nbsp;&nbsp; Say Hello
                            </div>
                        </a>
                        <NavLink onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} to="/work">
                            <div>View my work</div>
                        </NavLink>
                    </section>

                    {/* <FaIcons.FaReact className='icon react-icon'></FaIcons.FaReact>
                        <FaIcons.FaSass className='icon sass-icon'></FaIcons.FaSass>
                        <DiIcons.DiJavascript1 className= 'icon js-icon'></DiIcons.DiJavascript1>
                        <SiIcons.SiAdobeillustrator className='icon ai-icon'></SiIcons.SiAdobeillustrator>
                        <SiIcons.SiAdobephotoshop className='icon ps-icon'></SiIcons.SiAdobephotoshop>
                        <FaIcons.FaReact className='icon react-icon'></FaIcons.FaReact>
                        <FaIcons.FaSass className='icon sass-icon'></FaIcons.FaSass>
                        <DiIcons.DiJavascript1 className='icon js-icon'></DiIcons.DiJavascript1>
                        <SiIcons.SiAdobeillustrator className='icon ai-icon'></SiIcons.SiAdobeillustrator>
                        <SiIcons.SiAdobexd className='icon xd-icon'></SiIcons.SiAdobexd>
                        <FaIcons.FaSass className='icon sass-icon'></FaIcons.FaSass>
                        <DiIcons.DiJavascript1 className='icon js-icon'></DiIcons.DiJavascript1>
                        <FaIcons.FaPhp className='icon php-icon'></FaIcons.FaPhp>
                        <FaIcons.FaWordpress className='icon wp-icon'></FaIcons.FaWordpress>
                        <SiIcons.SiWoocommerce className="icon woo-icon"></SiIcons.SiWoocommerce><br></br>
                        <SiIcons.SiAdobeillustrator className='icon ai-icon'></SiIcons.SiAdobeillustrator>
                        <SiIcons.SiAdobephotoshop className='icon ps-icon'></SiIcons.SiAdobephotoshop>
                        <SiIcons.SiAdobexd className='icon xd-icon'></SiIcons.SiAdobexd> 
                        <a href='https://www.freepik.com/psd/mockup'>Mockup psd created by user17882893 - www.freepik.com</a>*/}

                </motion.section>
                : toggleVisabitly())}
        </>
    )
}

export default PageAbout
