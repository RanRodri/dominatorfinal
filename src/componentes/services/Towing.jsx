import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

class Towing extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div className="px-4 sm:px-8 lg:px-20 flex flex-1 justify-center py-5">
            <div className="flex flex-col max-w-[960px] w-full">
              {/* Hero Section */}
              <div className="flex min-h-[320px] sm:min-h-[480px] flex-col gap-6 sm:gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10 sm:px-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(/Images/towing.jpg)',
                }}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight tracking-tight">
                    Emergency Towing
                  </h1>
                  <h2 className="text-white text-sm sm:text-base font-normal">
                    Fast, reliable, and 24/7 roadside assistance.
                  </h2>
                </div>
                <Link
                  to="/request"
                  className="flex items-center justify-center rounded-full h-10 sm:h-12 px-4 sm:px-5 bg-[#f9911a] text-[#181511] text-sm sm:text-base font-bold"
                >
                  <span className="truncate">Request this service</span>
                </Link>
              </div>

              {/* Content Sections */}
              <Section title="What is Emergency Towing?">
                Emergency towing is a crucial service designed to assist drivers when their vehicles become immobilized due to unexpected issues such as breakdowns, accidents, or other mechanical failures. It ensures the safe and efficient transport of your vehicle to a repair shop or your desired location, minimizing further risks and inconveniences.
              </Section>

              <Section title="Service Areas Covered">
                <p className="pb-3">We proudly serve the following areas in Texas:</p>
                <ResponsiveGrid>
                  {["Denton, Texas", "Flower Mound, Texas", "Lewisville, Texas", "Dallas, Texas", "Garland, Texas", "Arlington, Texas", "Fort Worth, Texas"].map((city, idx) => (
                    <ServiceCard key={idx} icon={idx === 0}>
                      {city}
                    </ServiceCard>
                  ))}
                </ResponsiveGrid>
              </Section>

              <Section title="Common Issues This Service Resolves">
                <p className="pb-3">Emergency towing is essential for resolving various vehicle issues, including:</p>
                <ResponsiveGrid>
                  {["Engine breakdowns", "Flat tires", "Accidents", "Battery failures"].map((issue, idx) => (
                    <ServiceCard key={idx}>{issue}</ServiceCard>
                  ))}
                </ResponsiveGrid>
              </Section>

              <Section title="Why is This Service Important?">
                Emergency towing is vital for ensuring safety and reducing stress in difficult situations. Quick action prevents further damage to your vehicle and minimizes risks on busy roads. Our service provides peace of mind, knowing help is on the way.
              </Section>

              <Section title="What's Included?">
                {[
                  "Rapid response to your location",
                  "Safe and secure vehicle towing",
                  "Professional and courteous service",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 py-2">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-[#e6e1db] text-[#f9911a] focus:ring-0 focus:outline-none"
                    />
                    <p className="text-[#181511] text-base">{item}</p>
                  </label>
                ))}
              </Section>

              <Section title="How Does it Work?">
                <div className="grid grid-cols-[40px_1fr] gap-x-2">
                  {[
                    {
                      icon: (
                        <MapPinIcon />
                      ),
                      text: "Share your location and incident"
                    },
                    {
                      icon: (
                        <ClockIcon />
                      ),
                      text: "Team responds quickly"
                    },
                    {
                      icon: (
                        <CarIcon />
                      ),
                      text: "Vehicle towing"
                    }
                  ].map(({ icon, text }, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col items-center gap-1 pt-3">
                        {icon}
                        {idx < 2 && <div className="w-[1.5px] bg-[#e6e1db] h-2 grow" />}
                      </div>
                      <div className="flex flex-1 flex-col pt-3 pb-5">
                        <p className="text-[#181511] text-base font-medium">{text}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </Section>

              <Section title="Call Us Anytime">
                We're available 24/7. Don’t hesitate to call us at <strong>+1-469-809-0244</strong>.
              </Section>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

// 🔹 COMPONENTES AUXILIARES 🔹
const Section = ({ title, children }) => (
  <>
    <h2 className="text-[#181511] text-[22px] font-bold px-4 pb-3 pt-5">{title}</h2>
    <div className="px-4 text-[#181511] text-base leading-relaxed">{children}</div>
  </>
);

const ResponsiveGrid = ({ children }) => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4">{children}</div>
);

const ServiceCard = ({ children, icon = false }) => (
  <div className="flex items-center gap-3 p-4 border border-[#e6e1db] rounded-lg bg-white">
    {icon && <MapPinIcon />}
    <h2 className="text-[#181511] text-base font-bold">{children}</h2>
  </div>
);

// 🔹 ICONOS SVG 🔹
const MapPinIcon = () => (
  <svg className="text-[#181511]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg className="text-[#181511]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
  </svg>
);

const CarIcon = () => (
  <svg className="text-[#181511]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z"></path>
  </svg>
);

export default Towing;
