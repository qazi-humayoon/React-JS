
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Anpak from './Components/Anpak/Anpak'
import Overons from "./Components/Overons/Overons";
import StarterKits from "./Components/StarterKits/StarterKits";
import Inzichiten from "./Components/Inzichiten/Inzichiten";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/anpak' element={<Anpak />} />
          <Route path='/overons' element={<Overons />} />
          <Route path='/starterkits' element={<StarterKits />} />
          <Route path='/inzichiten' element={<Inzichiten />} />
          <Route path='/about' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
