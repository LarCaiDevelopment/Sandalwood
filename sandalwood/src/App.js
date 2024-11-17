import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Contact from "./Components/Contact/Contact.jsx";
import './Styles/global.scss'

function App() {
  return (
    <>
    <div id="root">
    <Header/>
    <div className="main-content">
      <Hero/>
      <Contact/>
    </div>
    <Footer />
  </div>
    
    </>
  );
}

export default App;
