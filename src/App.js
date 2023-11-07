import './App.css';
import Header from "./components/Header/Header.jsx"
import Intro from "./components/Intro/Intro.jsx"
import About from './components/About/About.jsx';
import Work from './components/Work/Work';
import Gallery from './components/Gallery/Gallery.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Order from './components/Order/Order.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div class="content grid-12">
      <Header />
      <Intro/>
      <About/>
      <Work/>
      <Gallery/>
      <Reviews/>
      <Order/>
      <Footer/>
    
    </div>
  );
}

export default App;
