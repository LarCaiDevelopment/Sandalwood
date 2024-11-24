import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Contact from "./Components/Contact/Contact.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx"
import HowWeWork from "./Components/HowWeWork/HowWeWork.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import './Styles/global.scss'
import Gallery from "./Components/Gallery/Gallery.jsx";
import Services from "./Components/Services/Services.jsx"

function App() {
  return (
    <>
    <div id="root">
    <Header/>
    <div className="main-content">
      <Hero/>
      <AboutUs/>
      <HowWeWork/>
      <Services />
      <Reviews/>
      <Gallery />
      <Contact/>
    </div>
    <Footer />
  </div>
    
    </>
  );
}

export default App;
