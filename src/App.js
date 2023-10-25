import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
// import { ContactUs } from './pages/contact/ContactForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
      {/* <ContactUs/> */}
    </div>
  );
}

export default App;
//#026085 :color