import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AboutUs from './pages/about-us';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='BrandonApps/' element={<Home />} />
        <Route path='BrandonApps/services/offered' element={<Services />} />
        <Route path='BrandonApps/contact' element={<Contact />} />
        <Route path='BrandonApps/about-us' element={<AboutUs />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App