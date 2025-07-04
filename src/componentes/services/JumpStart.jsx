import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const images = [
  "/Images/jumpstart2.jpg",
  "/Images/jumpstart3.jpg",
  "/Images/jumpstart4.jpg",
];

class JumpStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % images.length,
      }));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentIndex } = this.state;
    return (
      <>
        <Header />
        <main className="bg-white">
          <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 flex justify-center py-5">
            <div className="flex flex-col w-full max-w-6xl">
              {/* Banner */}
              <div className="relative min-h-[480px] rounded-xl overflow-hidden mb-6">
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
                  />
                ))}

                <div className="relative z-20 flex flex-col gap-2 text-left px-4 pb-10 justify-end min-h-[480px] items-start">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
                    Jump Start
                  </h1>
                  <h2 className="text-white text-sm sm:text-base font-normal">
                    Quick and safe jump-start for your vehicle, wherever you are.
                  </h2>
                  <Link
                    to="/request"
                    className="mt-4 flex h-10 min-w-[84px] items-center justify-center rounded-full bg-[#f9911a] px-6 text-sm font-bold text-[#181511] hover:bg-[#e38212] transition-colors"
                  >
                    Request this service
                  </Link>
                </div>
              </div>

              {/* CONTENIDO PRINCIPAL */}
              <div className="space-y-10">
                {/* Secciones de texto */}
                {[
                  {
                    title: "What is Jump Start?",
                    text: `Jump Start is a service to assist you when your vehicle won't start due to a dead battery. Our team will arrive quickly to jump-start your battery, allowing you to continue your journey without needing a tow.`,
                  },
                  {
                    title: "Service Areas Covered",
                    text: "We provide jump-start services in the following areas:",
                  },
                ].map(({ title, text }, idx) => (
                  <div key={idx} className="px-4">
                    <h2 className="text-[#171412] text-xl sm:text-2xl font-bold leading-tight tracking-tight pb-3">{title}</h2>
                    <p className="text-[#171412] text-base leading-relaxed">{text}</p>
                  </div>
                ))}

                {/* Áreas de servicio */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 px-4">
                  {[
                    "Denton, Texas",
                    "Flower Mound, Texas",
                    "Lewisville, Texas",
                    "Dallas, Texas",
                    "Garland, Texas",
                    "Arlington, Texas",
                    "Fort Worth, Texas",
                  ].map((city, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4">
                      <svg className="text-[#171412]" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,64a40,40,0,1,0,40,40A40..." />
                      </svg>
                      <h2 className="text-[#171412] text-base font-bold">{city}</h2>
                    </div>
                  ))}
                </div>

                {/* Issues Resueltos */}
                <div className="px-4">
                  <h2 className="text-[#171412] text-xl sm:text-2xl font-bold leading-tight pb-3">
                    Common Issues This Service Resolves
                  </h2>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                    {[
                      "Dead battery",
                      "Lights left on accidentally",
                      "Vehicle stationary for several hours",
                      "Car stopped in parking lots or remote areas",
                    ].map((issue, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4">
                        <svg className="text-[#171412]" width="24px" height="24px" fill="currentColor" />
                        <h2 className="text-[#171412] text-base font-bold">{issue}</h2>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusiones */}
                <div className="px-4">
                  <h2 className="text-[#171412] text-xl sm:text-2xl font-bold leading-tight pb-3">What's Included?</h2>
                  <div className="space-y-3">
                    {[
                      "On-site assistance",
                      "Secure connection with professional cables",
                      "Quick battery diagnosis",
                      "Towing possibility if the battery is completely damaged",
                    ].map((item, i) => (
                      <label key={i} className="flex gap-3 items-center">
                        <input type="checkbox" className="h-5 w-5 border-2 border-[#e4e0dc] rounded" />
                        <p className="text-[#171412] text-base">{item}</p>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Instrucciones resumidas */}
                <div className="px-4">
                  <h2 className="text-[#171412] text-xl sm:text-2xl font-bold leading-tight pb-3">How Does it Work?</h2>
                  <ol className="space-y-4">
                    {[
                      "Share your location and mention the need for a jump-start",
                      "Our team arrives with the appropriate equipment",
                      "Battery is jump-started",
                      "Customer continues their route or towing is assessed",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-bold text-[#f9911a]">{i + 1}.</span>
                        <p className="text-[#171412]">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Contacto */}
                <div className="px-4">
                  <h2 className="text-[#171412] text-xl sm:text-2xl font-bold leading-tight pb-3">Call Us Anytime</h2>
                  <p className="text-[#171412]">We're available 24/7. Don't hesitate to call us at +1-469-809-0244.</p>
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

export default JumpStart;
