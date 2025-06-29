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
      <svg
  className="w-6 h-6"
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16.004c0 2.824.745 5.587 2.154 8.024L2 30l6.155-2.807a13.217 13.217 0 0 0 6.442 1.643h.004c7.365 0 13.337-5.973 13.337-13.336 0-3.563-1.387-6.914-3.905-9.432A13.225 13.225 0 0 0 16.004 2.667zm0 23.944a11.362 11.362 0 0 1-5.783-1.576l-.415-.24-3.662 1.668.781-3.865-.238-.397a11.285 11.285 0 0 1-1.736-6.073c0-6.265 5.096-11.36 11.36-11.36a11.286 11.286 0 0 1 8.043 3.327 11.287 11.287 0 0 1 3.318 8.037c0 6.265-5.096 11.36-11.368 11.36zm6.233-8.504c-.341-.171-2.017-.998-2.33-1.112-.312-.114-.539-.17-.767.171-.227.341-.88 1.111-1.08 1.339-.199.227-.398.256-.739.085s-1.445-.533-2.75-1.7c-1.016-.91-1.703-2.036-1.9-2.377-.199-.341-.021-.525.15-.696.154-.153.341-.398.512-.597.17-.199.227-.341.341-.569.114-.227.057-.427-.028-.597-.085-.17-.767-1.853-1.052-2.539-.277-.667-.561-.575-.767-.586-.199-.011-.427-.011-.656-.011-.228 0-.597.085-.911.427s-1.194 1.168-1.194 2.844c0 1.676 1.224 3.296 1.395 3.525.171.228 2.408 3.675 5.837 5.148.816.353 1.453.564 1.95.722.82.262 1.567.225 2.158.137.658-.098 2.017-.826 2.304-1.623.284-.797.284-1.481.199-1.623-.085-.142-.312-.227-.653-.398z" />
</svg>

      </a>
    </Router>
  );
}

export default App;
