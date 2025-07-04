import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Services from './componentes/services/Services';
import Towing from './componentes/services/Towing';
import Recovery from './componentes/services/Recovery';
import CarLockout from './componentes/services/CarLockout';
import JumpStart from './componentes/services/JumpStart';
import FuelDelivery from './componentes/services/FuelDelivery';
import Management from './componentes/services/Management';
import RoadSide from './componentes/services/RoadSide';
import About from './componentes/About';
import Contact from './componentes/Contact';
import Gallery from './componentes/Gallery';
import Request from './componentes/Request';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/towing" element={<Towing />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/carlockout" element={<CarLockout />} />
        <Route path="/jumpstart" element={<JumpStart />} />
        <Route path="/fueldelivery" element={<FuelDelivery />} />
        <Route path="/management" element={<Management />} />
        <Route path="/roadside" element={<RoadSide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/request" element={<Request />} />
      </Routes>

      {/* Botón flotante de WhatsApp */}
     <a
  href="https://wa.me/14698090244"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
  aria-label="WhatsApp"
>
  <FaWhatsapp className="w-6 h-6" />
</a>

    </Router>
  );
}

export default App;
