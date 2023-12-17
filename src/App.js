import "./App.scss";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import About from "./About/About";
import Countdown from "./Countdown/Countdown";
import Product from "./Product/Product";
import Partnership from "./Partnership/Partnership";
import Job from "./Jobb/Job";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Info />
      <About />
      <Countdown />
      <Product />
      <Partnership />
      <Job />
      <Footer />
    </div>
  );
}

export default App;
