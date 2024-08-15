import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Portrait from './pages/Portrait';
import WedandBridal from './pages/WedandBridal';
import Lifestyle from './pages/Lifestyle';
import Kiddies from './pages/Kiddies';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/portrait" element={<Portrait />} />
          <Route path="/wedandbridal" element={<WedandBridal />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/kiddies" element={<Kiddies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
