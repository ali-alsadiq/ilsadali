
export const CodeData = {
    simplePleasures: [
        {
            code: `<?php
if ( function_exists( 'get_field' ) ) {
$bannerImage = get_field('banner_image');
if( !empty( $bannerImage ) ): ?>
    <div class="banner-image-cover"></div>
	<?php echo wp_get_attachment_image( $bannerImage, 'full', "", array( "class" => "banner-image" ) )?> 
    <?php endif; ?>			
    <a class="reserve-table" href="<?php the_permalink(163); ?>"> Reserve Your Table</a>
    <?php
	$args = array(
        'page_id' => '12',
	);
    $loop = new WP_Query( $args );
	while ( $loop->have_posts() ) : $loop->the_post(); 
	global $product;
	$ID = $loop->post->ID ?>
	<a class="order-online" href="<?php the_permalink(); ?>" id="id-<?php the_id(); ?>" title="<?php the_title(); ?>">
		Order Online
	</a>
	<?php endwhile; ?>
	<?php wp_reset_query(); 
}`,
            language: 'php',
            blurb: 'We used Advanced Custom Fields for the home page.'
        },
        {
            code: `<?php 
$featuredProducts = wc_get_featured_product_ids();
if (count($featuredProducts) >= 3) {
            
    foreach ($featuredProducts as $id) { ?>
        <div class='image-container'>
            <a href="<?php the_permalink($id); ?>" id="-<?php $id ?>" title="<?php the_title($id); ?>">
                <?php echo get_the_post_thumbnail($id, 'large') ?>
            </a>
            <h3><?php echo get_the_title($id); ?></h3>
            <?php echo do_shortcode('[add_to_cart id=' . $id . ' class=" add-to-cart"  style=""]'); ?>
        </div><?php
    }
}`,
            language: 'php',
            blurb: 'We used wc_get_featured_product_ids(); to show the featured prodects added in the Backend of WordPress.'
        },

    ],
    moviena: [
        // {
        //     code: '',
        //     language: '',
        //     blurb: ''
        // }
    ],
    portfolio: [
        {
            code: `import { Prism as Code } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';            
            
function CodeSnippets({ data }) {
    return (
        <section className='code-snippet'>
            {data.map((code, index) => {
                return (
                    <div key={index}>
                        <p>{code.blurb}</p>
                        <Code showLineNumbers language={code.language} style={vscDarkPlus}>
                            {code.code}
                        </Code>
                    </div>);
            })}
        </section>
    )
}            
export default CodeSnippets`,
            language: 'jsx',
            blurb: 'I used React Syntax Highlighter to show these code blocks.'
        },
        {
            code: `import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AnimationData } from '../data/AnimationData'


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function showSideBar() {
        setIsOpen(!isOpen);

        let main = document.getElementById("main-body");
        main.classList.add(\`padding-\${!isOpen}\`);
        main.classList.remove(\`padding-\${isOpen}\`);
    }
    return (
        <>
            ...

            <button className='menu-bars'>
                <motion.svg
                    variants={AnimationData.navBar.menuIcon}
                    onClick={showSideBar}
                    initial='hidden'
                    animate='visable'
                    whileHover='menuHover'
                    width="40" height="60" viewBox="0 0 35.63 31.49" stroke-width='2' stroke-miterlimit='10'>
                    <motion.rect variants={AnimationData.navBar.top} initial='closed' animate={isOpen ? "opened" : "closed"} className="cls-1" x="0.5" y="12.33" width="34.63" height="6.83" rx="3.42" />
                    <motion.rect variants={AnimationData.navBar.center} initial='closed' animate={isOpen ? "opened" : "closed"} className="cls-1" x="0.5" y="24.16" width="34.63" height="6.83" rx="3.42" />
                    <motion.rect variants={AnimationData.navBar.bottom} initial='closed' animate={isOpen ? "opened" : "closed"} className="cls-1" x="0.5" y="0.5" width="34.63" height="6.83" rx="3.42" />
                </motion.svg>
            </button>
            
            ...
        </>
        )
}
    
export default NavBar`,
            language: 'jsx',
            blurb: 'I used Framer Motion Library for most of the animation on this website. Here is an example of how the menu button works'
        }, {
            code: `import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { ProjectsData } from '../data/ProjectsData';
import Header from '../components/Header'
import Footer from '../components/Footer.js'
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageWork from '../pages/PageWork';
import CaseStudy from '../components/CaseStudy';
import Page404 from '../pages/Page404'


function App() {
  const location = useLocation();
  return (
    <>
      <div className="wrapper">
        <main id="main-body">
          <Header />
          <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.key} >
              <Route path='/' exact ><PageHome /></Route>
              <Route path='/about' ><PageAbout /></Route>
              <Route path='/work' exact ><PageWork /></Route>
              <Route path='/work/portfolio'><CaseStudy project={ProjectsData[0]} /></Route>
              <Route path='/work/moviena'><CaseStudy project={ProjectsData[1]} /></Route>
              <Route path='/work/simplepleasures'><CaseStudy project={ProjectsData[2]} /></Route>
              <Route path='' ><Page404 /></Route>
            </Switch>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
`,
            language: 'jsx',
            blurb: 'I used <AnimatePresence exitBeforeEnter > to animate between Routes and moved React Router to index.js'
        }
    ]
}