import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Companies from "./Components/Companies/Companies";
import Resedency from "./Components/Resedency/Resedency";
import Value from "./Components/Value/Value";
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className='App'>
      <div>
        <div className="white-gradient"></div>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Resedency/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App
