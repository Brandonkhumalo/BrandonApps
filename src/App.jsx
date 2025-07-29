import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AboutUs from './pages/about-us';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services/offered' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;