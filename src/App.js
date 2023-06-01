import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Home from './pages/Home/Home';
import FAQ from './pages/FAQ/FAQ';
import Careers from './pages/Careers/Careers';
import News from './pages/News/News';
import Footer from './components/Footer/Footer';
import Cafe from './pages/Menus/Cafe/Cafe';
import Dinner from './pages/Menus/Dinner/Dinner';
import Bar from './pages/Menus/Bar/Bar';
import Candidate from './pages/Candidate/Candidate';
import Management from './pages/Management/Management';

function App() {
  return (
    <div className='bg-[#F5ECE6]'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/brand" element={ <Home /> } />
          <Route path="/cafe" element={ <Cafe /> } />
          <Route path="/dinner" element={ <Dinner /> } />
          <Route path="/bar" element={ <Bar /> } />
          <Route path="/faq" element={ <FAQ /> } />
          <Route path="/careers" element={ <Careers /> } />
          <Route path="/news" element={ <News /> } />
          <Route path="/candidate" element={ <Candidate /> } />
          <Route path="/manage" element={ <Management /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
