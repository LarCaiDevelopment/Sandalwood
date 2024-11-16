import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact.jsx";
import './Styles/global.scss'

function App() {
  return (
    <>
    <div id="root">
    <Header/>
    <div className="main-content">
      {/* Your main content goes here */}
      <h1>Welcome to My Website</h1>
      <Contact/>
    </div>
    <Footer />
  </div>
    
    </>
  );
}

export default App;
