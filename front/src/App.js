import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Users/Login';
import Home from './components/Home/Home'
import Chargers from './components/Chargers/Chargers'
import StopCharging from './components/StopCharging/StopCharging'
import Charging from './components/Charging/Charging'


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chargers" element={<Chargers />} />
        <Route path="/charging" element={<Charging />} />
        <Route path="/stop-charging" element={<StopCharging />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
