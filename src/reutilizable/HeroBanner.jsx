import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Solo rutas de imagen, sin importar archivos
const images = ["/Images/carlockout2.jpg", "/Images/carlockout3.jpg"];

function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[480px] rounded-xl overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      <div className="relative z-20 flex flex-col gap-2 text-left px-4 pb-10 justify-end min-h-[480px] items-start">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
          Car Lockout
        </h1>
        <h2 className="text-white text-sm @[480px]:text-base font-normal">
          Fast, damage-free assistance to regain access to your vehicle.
        </h2>
        <Link
          to="/request"
          className="mt-4 flex h-10 min-w-[84px] max-w-[480px] items-center justify-center rounded-full bg-[#f9911a] px-4 text-sm font-bold text-[#181511] hover:bg-[#e38212] transition-colors"
        >
          Request this service
        </Link>
      </div>
    </div>
  );
}

export default HeroBanner;
