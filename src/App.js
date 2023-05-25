import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Home from './pages/Home/Home';
import FAQ from './pages/FAQ/FAQ';
import Careers from './pages/Careers/Careers';
import News from './pages/News/News';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <div className='bg-[#F5ECE6]'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <Home /> } />
          <Route path="/faq" element={ <FAQ /> } />
          <Route path="/careers" element={ <Careers /> } />
          <Route path="/news" element={ <News /> } />
          <Route path="/admin" element={ <Admin /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
