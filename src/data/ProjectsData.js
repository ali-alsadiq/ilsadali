import portfolio from '../images/portfolio.png'
import simplePleasures from '../images/ss.png'
import moviena from '../images/moviena.png'
import CodeSnippets from '../components/CodeSnippets';
import { CodeData } from './CodeData';
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";


// Use require to import images from a file
let sp_wireframes = []
for (let i = 1; i < 6; i++) {
    let image = require(`../images/smiple-pleasure/wireframes/page-${i}.jpg`)
    sp_wireframes.push(image.default);
}




export const ProjectsData = [
    {
        title: 'Portfolio',
        image: portfolio,
        skills: [<FaIcons.FaReact className='icon react-icon' />, <DiIcons.DiJavascript1 className='icon js-icon' />, <FaIcons.FaSass className='icon sass-icon' />],
        tools: 'React | SASS | XD | Illustrator | Photoshop',
        section_Cname: 'project-section portfolio-section',
        caseStudy_link: '/work/portfolio',
        github_link: 'https://github.com/ali-alsadiq/ilsadali',
        site_link: null,
        wireframes: null,
        overview: 'This website was created to highlight some of the projects I have worked on recently.',
        summary: 'I created this portfolio website to highlight some of the projects I have worked on recently. I chose to develop the site in React to practice the JSX syntax.',
        code: <CodeSnippets data={CodeData.portfolio} />
    },
    {
        title: 'Moviena',
        image: moviena,
        skills: [<FaIcons.FaPhp className='icon php-icon' />, <FaIcons.FaWordpress className='icon wp-icon' />, <SiIcons.SiWoocommerce className="icon woo-icon" />],
        tools: 'React | SASS | XD | Illustrator | Photoshop',
        section_Cname: 'project-section moviena-section',
        // caseStudy_link: '/work/movien',
        caseStudy_link: null,
        github_link: 'https://github.com/ali-alsadiq/ilsadali',
        site_link: 'https://ilsadali.com/moviena/',
        wireframes: null,
        overview: 'Moviena is a movie database web application that allows the user to create a favorite list of movies.'
    },
    {
        title: 'Simple Pleasures',
        image: simplePleasures,
        skills: [<FaIcons.FaWordpress className='icon wp-icon' />, <SiIcons.SiWoocommerce className="icon woo-icon" />, <FaIcons.FaSass className='icon sass-icon' />, <FaIcons.FaPhp className='icon php-icon' />,],
        tools: 'WordPress | WooCommerce | XD | Illustrator | Photoshop',
        section_Cname: 'project-section capstone-section',
        caseStudy_link: '/work/simplepleasures',
        // caseStudy_link: null,
        github_link: 'https://github.com/htpwebdesign/simple-pleasures',
        site_link: 'https://simplepreasures.bcitwebdeveloper.ca/',
        overview: 'Simple Pleasure is an E-commerce website for a sandwich shop. The website is built on WordPress CMS.',
        wireframes: sp_wireframes,
        wireframes_link: 'https://xd.adobe.com/view/8fd492ed-14b4-4318-b4f5-e7b48bad660f-da87/',
        summary: 'I was a part of a team of 3 to design and develop an E-commerce site for a sandwich shop that offers online ordering for delivery or pick up and table reservations service. We built the website on WordPress CMS and created a custom WordPress theme using the underscores base theme. The goal of this project was to duplicate the process of designing and developing a website for a client. In this case, our client was imaginary.',
        code: <CodeSnippets data={CodeData.simplePleasures} />
    },

]
