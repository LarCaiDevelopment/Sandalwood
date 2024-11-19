import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Contact from "./Components/Contact/Contact.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx"
import './Styles/global.scss'

function App() {
  return (
    <>
    <div id="root">
    <Header/>
    <div className="main-content">
      <Hero/>
      <Reviews/>
      <Contact/>
    </div>
    <Footer />
  </div>
    
    </>
  );
}

export default App;
