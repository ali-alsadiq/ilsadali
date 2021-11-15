import React, { useEffect } from 'react';
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const mouNav = {
    // nextArrow: <MdIcons.MdArrowForwardIos />,
    // prevArrow: < MdIcons.MdArrowBackIos />,
    lazyLoad: 'ondemand',
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    draggable: true,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

function CaseStudy({ project }) {
    useEffect(() => {
        document.title = `${project.title} Case Study | Ali Alsadiq`;
    }, [project]);

    return (
        <section className='case-study'>
            <img className='project-image' src={project.image} alt="project mockup" />
            <h1>{project.title}</h1>
            <section className='intro-grid'>
                <div className="page-links">
                    <a className='project-links' href={project.github_link} target="_blank" rel="noopener noreferrer">
                        <div>
                            <FaIcons.FaGithub className="social-icon" />
                        GitHub
                    </div>
                    </a>
                    {project.site_link !== null &&
                        <a className='project-links' href={project.site_link} target="_blank" rel="noopener noreferrer">
                            <div>
                                <RiIcons.RiComputerLine className='comp-icon social-icon' />
                        Live Site
                    </div>
                        </a>
                    }
                </div>
                <div className='overview'>
                    <h3 className='overview-heading'>
                        <MdIcons.MdOutlineSummarize className='icon' />
                        Overview
                    </h3>
                    <p>{project.summary}</p>
                </div>
                <div className='tools'>
                    <h3 className='tools-heading'><GiIcons.GiPencilBrush className='icon' /> Project tools</h3>
                    <p >
                        {project.skills.map((icon, index) => {
                            return (
                                <span key={index} >
                                    {icon}
                                </span>
                            )
                        })
                        }
                    </p>
                </div>

            </section>

            {project.wireframes !== null &&
                <section className='wireframes-section'>
                    <h3><FaIcons.FaSitemap className='icon' />Wireframes</h3>
                    <a href={project.wireframes_link} className='links' target="_blank" rel="noopener noreferrer">
                        <div className="nav-text">
                            View on<SiIcons.SiAdobexd className='icon xd-icon' /></div>
                    </a>
                    <div className='wireframes-swipe'>Swipe to view more slides <MdIcons.MdOutlineSwipe className='icon swipe-icon' /></div>
                    <Slider className="mou-slider" {...mouNav}>
                        {project.wireframes.map((imagePath, index) => {
                            return (
                                <div key={index} >
                                    <img src={imagePath} alt="memo of understanding" />
                                </div>
                            )
                        })
                        }
                    </Slider>
                </section >
            }

            {project.code !== null &&
                <>
                    <h3><FaIcons.FaCode className='icon' />Development</h3>
                    {project.code}
                </>
            }


        </section>
    )
}

export default CaseStudy
