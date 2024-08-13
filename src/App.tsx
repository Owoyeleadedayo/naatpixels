import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutMe" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
