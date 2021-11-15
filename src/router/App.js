import { Route, Switch, useLocation } from 'react-router-dom';
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
