import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Imágenes locales
import towing from "../Images/towing.jpeg";
import recovery from "../Images/recovery.jpeg";
import lockout from "../Images/lockout.jpeg"; // Si esta imagen es en video, deberías reemplazarla por un .jpeg o usar un <video>
import jump from "../Images/jump.jpeg";
import delivery from "../Images/delivery.jpeg";
import management from "../Images/management.jpeg";
import emergenci from "../Images/emergenci.jpeg";
import about from "../Images/about.jpeg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const services = [
      { name: "Towing", img: towing },
      { name: "Recovery", img: recovery },
      { name: "Car Lockout", img: management }, // O usa otra si tienes una imagen más específica
      { name: "Jump Start", img: jump },
      { name: "Fuel Delivery", img: delivery },
      { name: "Impound Management", img: management },
      { name: "Emergency Roadside", img: emergenci },
    ];

    return (
      <>
        <Header />
        <main>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              {/* Hero */}
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5bPRnatyI2yj8SKDY0i1gtlxTChMHxlGHzd-sZ1z-MuXsuNQqvKONkBN4P8LgA_iOzIpYnGAIyFQVhKfpEs0r1aZ9P6H-FyFkIh64ape4o3VP0Jc9m0g1MHyoVWiZB13bQFHkaLpWq1fVLfiBGhKOdirduoFuBQK0yKcPFJzM3ekTl7p6hw1OENUMz5dbUdBb5bmzzCXxdyeY5wp4Te0k332f_dayax7VrHm4rUTHJMzHKBk8AgpCANGsBaxfPxwxYk1F4M_jzywY")',
                    }}
                  >
                    <div className="flex flex-col gap-2 text-left">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                        Fast, Reliable Towing 24/7 in Denton, TX
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">
                        We're here when you need us most.
                      </h2>
                    </div>
                 <Link
  to="/request"
  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 md:h-12 md:px-5 bg-[#f39420] text-[#181511] text-sm font-bold leading-normal tracking-[0.015em] md:text-base"
>
  <span className="truncate">Call Now</span>
</Link>
                  </div>
                </div>
              </div>

              {/* Services */}
              <h2 className="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Our Services
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {services.map((service, index) => (
                  <div className="flex flex-col gap-3 pb-3" key={index}>
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                      style={{ backgroundImage: `url(${service.img})` }}
                    ></div>
                    <p className="text-[#181511] text-base font-medium leading-normal">
                      {service.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* About */}
              <h2 className="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                About Us
              </h2>
              <div className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-lg">
                  <div className="flex flex-col gap-1 flex-[2_2_0px]">
                    <p className="text-[#8a7760] text-sm font-normal leading-normal">
                      Dominator Towing & Recovery LLC
                    </p>
                    <p className="text-[#181511] text-base font-bold leading-tight">
                      Your Trusted Towing Partner in Denton
                    </p>
                    <p className="text-[#8a7760] text-sm font-normal leading-normal">
                      With years of experience serving the Denton community, our
                      team is dedicated to providing fast, reliable, and professional
                      towing and recovery services. We're available 24/7 to assist
                      you, ensuring your safety and peace of mind.
                    </p>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                   style={{
  backgroundImage: `url(${about})`,
}}

                  ></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
