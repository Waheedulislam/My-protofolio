import './App.css';
import Contact from './Coponents/Contact/Contact';
import Experience from './Coponents/Experience/Experience';
import Intro from './Coponents/Intro/Intro';
import Navbar from './Coponents/Navbar/Navbar';
import Protoflio from './Coponents/Protoflio/Protoflio';
import Services from './Coponents/Services/Services';
import Works from './Coponents/Works/Works';

function App() {
  return (
    <div className="App" style={{ margin: '5px' }}>
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experience></Experience>
      <Works></Works>
      <Protoflio></Protoflio>
      <Contact></Contact>
    </div>
  );
}

export default App;
