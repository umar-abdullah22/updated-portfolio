import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MainApp from './pages/main-app';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <MainApp>
            <Home />
          </MainApp>
        } />
        <Route path="/about" element={
          <MainApp>
            <About />
          </MainApp>
        } />
        <Route path="/portfolio" element={
          <MainApp>
            <Portfolio />
          </MainApp>
        } />
        <Route path="/contact" element={
          <MainApp>
            <Contact />
          </MainApp>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
