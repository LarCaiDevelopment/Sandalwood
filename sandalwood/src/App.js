import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import './Styles/global.scss'

function App() {
  return (
    <>
    <div id="root">
    <Header/>
    <div className="main-content">
      {/* Your main content goes here */}
      <h1>Welcome to My Website</h1>
      <p>This is the main content of the page.</p>
    </div>
    <Footer />
  </div>
    
    </>
  );
}

export default App;
