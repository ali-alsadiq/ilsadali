import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer.js'
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageWork from '../pages/PageWork';
import { AnimatePresence } from "framer-motion";

function App() {
  
  return (
    <>
      <div className="wrapper">
        <Header />
        <main id="main-body">
          <AnimatePresence exitBeforeEnter>
            <Switch >
              <Route path='/' exact ><PageHome /></Route>
              <Route path='/about' exact><PageAbout /></Route>
              <Route path='/work' exact><PageWork /></Route>
            </Switch>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
