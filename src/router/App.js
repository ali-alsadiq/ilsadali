import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Header from '../components/Header'
import Footer from '../components/Footer.js'
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageWork from '../pages/PageWork';

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
              <Route path='/work' ><PageWork /></Route>
            </Switch>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
