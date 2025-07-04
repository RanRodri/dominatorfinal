import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    currentBackground: 0,
  };

  images = ["/Images/logo.png", "/Images/servicio.png"];

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        currentBackground: (prevState.currentBackground + 1) % this.images.length,
      }));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const services = [
      { name: "Towing", img: "/Images/towing.jpeg" },
      { name: "Recovery", img: "/Images/recovery.jpeg" },
      { name: "Car Lockout", img: "/Images/carlockout1.jpg" },
      { name: "Jump Start", img: "/Images/jumpstart1.jpg" },
      { name: "Fuel Delivery", img: "/Images/fueldelivery1.jpg" },
      { name: "Impound Management", img: "/Images/management.jpeg" },
      { name: "Emergency Roadside", img: "/Images/emergenci.jpeg" },
    ];

    return (
      <>
        <Header />
        <main>
          <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-screen-xl">
              {/* HERO */}
              <div className="relative overflow-hidden rounded-lg min-h-[360px] md:min-h-[480px] mb-5">
               {this.images.map((img, index) => (
  <div
    key={index}
    className={`absolute inset-0 bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
      this.state.currentBackground === index ? "opacity-100 z-10" : "opacity-0 z-0"
    }`}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0,0,0,0.4)), url(${img})`,
      backgroundSize: img.includes("servicio.png") ? "contain" : "cover",
      backgroundColor: img.includes("servicio.png") ? "#000" : "transparent",
      backgroundRepeat: "no-repeat",
    }}
  />
))}


                <div className="relative z-20 flex flex-col gap-6 items-start justify-end h-full px-4 pb-10 sm:px-10 text-white">
                  <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight">
                    Fast, Reliable Towing 24/7 in Denton, TX
                  </h1>
                  <h2 className="text-sm sm:text-base font-normal">
                    We're here when you need us most.
                  </h2>
                  <Link
                    to="/request"
                    className="flex w-full max-w-[300px] sm:max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#f39420] text-[#181511] text-sm sm:text-base font-bold mt-2"
                  >
                    <span className="truncate">Call Now: 940-442-9806</span>
                  </Link>
                </div>
              </div>

              {/* SERVICES */}
              <h2 className="text-[#181511] text-xl sm:text-2xl font-bold px-4 pb-3 pt-5">Our Services</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 pb-3">
               {services.map((service, index) => {
  // Mapeo personalizado de rutas
  const customRoutes = {
    "Car Lockout": "/carlockout",
    "Jump Start": "/jumpstart",
    "Fuel Delivery": "/fueldelivery",
    "Impound Management": "/management",
    "Emergency Roadside": "/roadside"
  };

  const route = customRoutes[service.name] || `/${service.name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Link
      to={route}
      key={index}
      className="transform transition-transform hover:scale-[1.03] hover:shadow-lg cursor-pointer"
    >
      <div className="flex flex-col gap-2">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
          style={{ backgroundImage: `url(${service.img})` }}
        ></div>
        <p className="text-[#181511] text-sm sm:text-base font-medium leading-normal text-center">
          {service.name}
        </p>
      </div>
    </Link>
  );
})}

              </div>

              {/* ABOUT */}
              <h2 className="text-[#181511] text-xl sm:text-2xl font-bold px-4 pb-3 pt-5">About Us</h2>
              <div className="px-4 pb-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex flex-col gap-2 flex-1 text-center md:text-left">
                    <p className="text-[#8a7760] text-sm">
                      Dominator Towing & Recovery LLC
                    </p>
                    <p className="text-[#181511] text-base font-bold">
                      Your Trusted Towing Partner in Denton
                    </p>
                    <p className="text-[#8a7760] text-sm">
                      With years of experience serving the Denton community, our team is
                      dedicated to providing fast, reliable, and professional towing and
                      recovery services. We're available 24/7 to assist you, ensuring your
                      safety and peace of mind.
                    </p>
                  </div>
                  <div
                    className="w-full md:w-1/2 bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                    style={{ backgroundImage: `url("/Images/about.jpeg")` }}
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
