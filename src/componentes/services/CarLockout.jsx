import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import HeroBanner from "../../reutilizable/HeroBanner";

function CarLockout() {


  return (
    <>
      <Header />
      <main>
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 flex flex-1 justify-center py-5">
          <div className="w-full max-w-screen-xl flex flex-col">
            <div className="@container">
              <div className="@[480px]:p-4">
                <HeroBanner />
              </div>
            </div>
            <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              What is Car Lockout?
            </h2>
            <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Car Lockout is a service designed to help you when you've lost your keys, left them inside your vehicle, or the locking system has failed. Our trained technicians can open your vehicle safely and quickly, without causing any damage.
            </p>

            <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Service Areas Covered</h2>
            <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">We proudly serve the following areas:</p>
            <div className="flex gap-3 p-3 flex-wrap px-4">
              {[
                "Denton, Texas",
                "Flower Mound, Texas",
                "Lewisville, Texas",
                "Dallas, Texas",
                "Garland, Texas",
                "Arlington, Texas",
                "Fort Worth, Texas"
              ].map((city, index) => (
                <div key={index} className="flex h-8 items-center justify-center rounded-full bg-[#f5f2f0] px-4">
                  <p className="text-[#181411] text-sm font-medium">{city}</p>
                </div>
              ))}
            </div>

            <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Common Issues This Service Resolves</h2>
            {[
              {
                title: "Keys Left Inside",
                description: "Keys left inside the car",
                iconType: "Key"
              },
              {
                title: "Lost Keys",
                description: "Lost keys",
                iconType: "Key"
              },
              {
                title: "Damaged Locking System",
                description: "Damaged locking system",
                iconType: "Lock"
              },
              {
                title: "Accidental Auto-Lock",
                description: "Accidental auto-lock",
                iconType: "Lock"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white px-4 py-2 min-h-[72px]">
                <div className="text-[#181411] flex items-center justify-center rounded-lg bg-[#f5f2f0] size-12 shrink-0">
                  {/* Puedes reemplazar este ícono si gustas */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d={item.iconType === "Key"
                      ? "M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                      : "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"
                    }></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#181411] text-base font-medium">{item.title}</p>
                  <p className="text-[#8c755f] text-sm font-normal">{item.description}</p>
                </div>
              </div>
            ))}

            <h2 className="text-[#181411] text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Why is This Service Important?</h2>
            <p className="text-[#181411] text-base px-4 pb-3">Our service ensures a quick response, safety, and efficient access to your vehicle without causing any damage.</p>

            <h2 className="text-[#181411] text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">What's Included?</h2>
            <div className="px-4">
              {[
                "Quick 24/7 response",
                "Damage-free unlocking",
                "Professional technicians",
                "Specialized tools"
              ].map((text, idx) => (
                <label key={idx} className="flex gap-x-3 py-3 items-center">
                  <input type="checkbox" className="h-5 w-5 rounded border-[#e6e0db] border-2 text-[#faaa5a] focus:ring-0 focus:outline-none checked:bg-[#faaa5a] checked:border-[#faaa5a]" />
                  <p className="text-[#181411] text-base">{text}</p>
                </label>
              ))}
            </div>

            <h2 className="text-[#181411] text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">How Does it Work?</h2>
            <div className="px-4 grid grid-cols-1 sm:grid-cols-[40px_1fr] gap-x-2">
              {[
                {
                  icon: "MapPin",
                  text: "Share your location and incident type"
                },
                {
                  icon: "Truck",
                  text: "Our team heads to your location"
                },
                {
                  icon: "Key",
                  text: "Vehicle is safely unlocked"
                }
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center gap-1 pt-3">
                    <div className="text-[#181411]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <path d={
                          step.icon === "MapPin"
                            ? "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                            : step.icon === "Truck"
                            ? "M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z"
                            : "M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                        } />
                      </svg>
                    </div>
                    <div className="w-[1.5px] bg-[#e6e0db] h-2 grow"></div>
                  </div>
                  <div className="flex flex-1 flex-col pt-3 pb-5">
                    <p className="text-[#181411] text-base font-medium">{step.text}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h2 className="text-[#181411] text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Call Us Anytime</h2>
            <p className="text-[#181411] text-base font-normal pb-5 px-4">We're available 24/7. Don't hesitate to call us at <a className="text-blue-600 font-semibold underline" href="tel:+14698090244">+1-469-809-0244</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CarLockout;
