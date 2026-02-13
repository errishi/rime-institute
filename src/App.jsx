import React from 'react'
import Navbar from './components/Home/utils/Navbar';
import Footer from './components/Home/utils/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Program from './pages/Program';
import Admission from './pages/Admission';
import Gallary from './pages/Gallary';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/programs' element={<Program />} />
        <Route path='/admissions' element={<Admission />} />
        <Route path='/gallery' element={<Gallary />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;