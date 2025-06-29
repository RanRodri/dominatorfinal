import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import recovery from "../../Images/recovery.jpeg";
import { Link } from "react-router-dom";

class Recovery extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
           <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                   style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${recovery})`,
}}
                  >
                     <div className="flex flex-col gap-2 text-left">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">Recovery</h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">Safe and professional recovery in off-road or accident situations.</h2>
                    </div>
                   <Link
  to="/request"
  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f9911a] text-[#181511] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
>
  <span className="truncate">Request this service</span>
</Link>

                  </div>
                </div>
              </div>

              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What is Recovery?</h2>
              <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
                The Recovery service is designed to help drivers whose vehicles are stuck in difficult conditions such as mud, ditches, sand, or after an accident. We use specialized tools to recover your vehicle without causing further damage and ensuring your safety.
              </p>

              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Service Areas Covered</h2>
              <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">We proudly serve the following areas:</p>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {["Denton, Texas", "Flower Mound, Texas", "Lewisville, Texas", "Dallas, Texas", "Garland, Texas", "Arlington, Texas", "Fort Worth, Texas"].map((city, idx) => (
                  <div key={idx} className="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                    {idx === 0 && (
                      <div className="text-[#181411]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
                        </svg>
                      </div>
                    )}
                    <h2 className="text-[#181411] text-base font-bold leading-tight">{city}</h2>
                  </div>
                ))}
              </div>

              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Common Issues This Service Resolves</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {["Stuck in mud or snow", "Vehicle off-road", "Post-accident recovery", "Vehicle overturned or in a ditch"].map((issue, idx) => (
                  <div key={idx} className="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                    <h2 className="text-[#181411] text-base font-bold leading-tight">{issue}</h2>
                  </div>
                ))}
              </div>

              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why is This Service Important?</h2>
              <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
                The Recovery service is vital for extracting your vehicle from dangerous or inaccessible situations. Quick action prevents further damage and additional risks. Our team ensures a safe and efficient recovery.
              </p>

              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What's Included?</h2>
              <div className="px-4">
                {["On-site recovery assistance", "Specialized tools and equipment", "Damage-free recovery techniques", "Trained and professional personnel"].map((item, i) => (
                  <label key={i} className="flex gap-x-3 py-3 flex-row">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f9891a] checked:bg-[#f9891a] checked:border-[#f9891a] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                    />
                    <p className="text-[#181411] text-base font-normal leading-normal">{item}</p>
                  </label>
                ))}
              </div>

            <h2 className="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How Does it Work?</h2>
<div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
  <div className="flex flex-col items-center gap-1 pt-3">
    <div className="text-[#181511]">
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
      </svg>
    </div>
    <div className="w-[1.5px] bg-[#e6e1db] h-2 grow"></div>
  </div>
  <div className="flex flex-1 flex-col pt-3 pb-5">
    <p className="text-[#181511] text-base font-medium leading-normal">Share your location and incident</p>
  </div>

  <div className="flex flex-col items-center gap-1">
    <div className="w-[1.5px] bg-[#e6e1db] h-2"></div>
    <div className="text-[#181511]">
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
      </svg>
    </div>
    <div className="w-[1.5px] bg-[#e6e1db] h-2 grow"></div>
  </div>
  <div className="flex flex-1 flex-col pt-3 pb-5">
    <p className="text-[#181511] text-base font-medium leading-normal">Team responds quickly</p>
  </div>

  <div className="flex flex-col items-center gap-1 pb-3">
    <div className="w-[1.5px] bg-[#e6e1db] h-2"></div>
    <div className="text-[#181511]">
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z" />
      </svg>
    </div>
  </div>
  <div className="flex flex-1 flex-col pt-3 pb-5">
    <p className="text-[#181511] text-base font-medium leading-normal">Vehicle towing</p>
  </div>
</div>


              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Call Us Anytime</h2>
              <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">We're available 24/7. Don't hesitate to call us at +1-469-809-0244.</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Recovery;
