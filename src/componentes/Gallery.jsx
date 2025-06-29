import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Importa todas las imágenes deseadas para la galería
import about from "../Images/about.jpeg";
import about1 from "../Images/about1.jpeg";
import about2 from "../Images/about2.jpeg";
import delivery from "../Images/delivery.jpeg";
import emergenci from "../Images/emergenci.jpeg";
import img2745 from "../Images/IMG_2745.jpeg";
import img3076 from "../Images/IMG_3076.jpeg";
import img6054 from "../Images/IMG_6054.jpeg";
import img6141 from "../Images/IMG_6141.jpeg";
import img6890 from "../Images/IMG_6890.jpeg";
import img6907 from "../Images/IMG_6907.jpeg";
import jump from "../Images/jump.jpeg";
import lockout from "../Images/lockout.jpeg";
// import lockout2 from "../Images/lockout2.mp4"; // omitido
// import logo from "../Images/logo.png"; // omitido
import management from "../Images/management.jpeg";
import recovery from "../Images/recovery.jpeg";
import road from "../Images/road.jpeg";
import towing from "../Images/towing.jpeg";

class Gallery extends Component {
  render() {
    // Todas las imágenes en un array para renderizarlas fácilmente
    const images = [
      about,
      about1,
      about2,
      delivery,
      emergenci,
      img2745,
      img3076,
      img6054,
      img6141,
      img6890,
      img6907,
      jump,
      lockout,
      management,
      recovery,
      road,
      towing,
    ];

    return (
      <>
        <Header />
        <main>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#161412] tracking-light text-[32px] font-bold leading-tight">
                    Gallery
                  </p>
                  <p className="text-[#81756a] text-sm font-normal leading-normal">
                    Explore our work and see how we handle your towing needs with precision and care.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {images.map((image, index) => (
                  <div className="flex flex-col gap-3" key={index}>
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="flex px-4 py-3 justify-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f2f1] text-[#161412] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">View More</span>
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Gallery;
