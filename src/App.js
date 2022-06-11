import './App.css';
import Navbar from './Coponents/Navbar/Navbar';
import Footer from './Coponents/Footer.js/Footer';
import { Routes, Route } from "react-router-dom";
import Home from './Coponents/Home/Home';
import Contact from './Coponents/Contact/Contact';
import About from './Coponents/About/About';
import NotFound from './Coponents/NotFound/NotFound';
import Blogs from './Coponents/Blogs/Blogs';

function App() {
  return (
    <div>
      <div className="App ">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs></Blogs>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
