import './App.css';
import Intro from './Coponents/Intro/Intro';
import Navbar from './Coponents/Navbar/Navbar';
import Services from './Coponents/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
    </div>
  );
}

export default App;
