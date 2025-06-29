import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import recovery from "../../Images/jump.jpeg";
import { Link } from "react-router-dom";

class JumpStart extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="@container">
              <div class="@[480px]:p-4">
               <div
  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
   style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${recovery})`,
}}
>

                  <div class="flex flex-col gap-2 text-left">
                    <h1
                      class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Jump Start
                    </h1>
                    <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Quick and safe jump-start for your vehicle, wherever you are.
                    </h2>
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
            <h2 class="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What is Jump Start?</h2>
            <p class="text-[#171412] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Jump Start is a service to assist you when your vehicle won't start due to a dead battery. Our team will arrive quickly to jump-start your battery, allowing you to
              continue your journey without needing a tow.
            </p>
            <h2 class="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Service Areas Covered</h2>
            <p class="text-[#171412] text-base font-normal leading-normal pb-3 pt-1 px-4">We provide jump-start services in the following areas:</p>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4 items-center">
                <div class="text-[#171412]" data-icon="MapPin" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#171412] text-base font-bold leading-tight">Denton, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4 items-center">
                <h2 class="text-[#171412] text-base font-bold leading-tight">Flower Mound, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4 items-center">
                <h2 class="text-[#171412] text-base font-bold leading-tight">Lewisville, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4 items-center">
                <h2 class="text-[#171412] text-base font-bold leading-tight">Dallas, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4 items-center">
                <h2 class="text-[#171412] text-base font-bold leading-tight">Garland, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4 items-center">
                <h2 class="text-[#171412] text-base font-bold leading-tight">Arlington, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4 items-center">
                <h2 class="text-[#171412] text-base font-bold leading-tight">Fort Worth, Texas</h2>
              </div>
            </div>
            <h2 class="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Common Issues This Service Resolves</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4 items-center">
                <div class="text-[#171412]" data-icon="BatteryCharging" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8Zm48-80v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM138.81,123.79a8,8,0,0,1,.35,7.79l-16,32a8,8,0,0,1-14.32-7.16L119.06,136H100a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L112.94,120H132A8,8,0,0,1,138.81,123.79Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#171412] text-base font-bold leading-tight">Dead battery</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4 items-center">
                <div class="text-[#171412]" data-icon="Lightbulb" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#171412] text-base font-bold leading-tight">Lights left on accidentally</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4 items-center">
                <div class="text-[#171412]" data-icon="Clock" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#171412] text-base font-bold leading-tight">Vehicle stationary for several hours</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e4e0dc] bg-white p-4 items-center">
                <div class="text-[#171412]" data-icon="Garage" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,192h-8V98.67a16,16,0,0,0-7.12-13.31l-88-58.67a16,16,0,0,0-17.75,0l-88,58.67A16,16,0,0,0,24,98.67V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,98.67,128,40l88,58.66V192H192V136a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v56H40ZM176,144v16H136V144Zm-56,16H80V144h40ZM80,176h40v16H80Zm56,0h40v16H136Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#171412] text-base font-bold leading-tight">Car stopped in parking lots or remote areas</h2>
              </div>
            </div>
            <h2 class="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why is This Service Important?</h2>
            <p class="text-[#171412] text-base font-normal leading-normal pb-3 pt-1 px-4">
              A jump-start service can save you from stress and unnecessary delays. It's an efficient alternative to towing when the issue is only the battery. It's also helpful
              for drivers with limited technical knowledge.
            </p>
            <h2 class="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What's Included?</h2>
            <div class="px-4">
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e4e0dc] border-2 bg-transparent text-[#f9efe5] checked:bg-[#f9efe5] checked:border-[#f9efe5] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e4e0dc] focus:outline-none"
                />
                <p class="text-[#171412] text-base font-normal leading-normal">On-site assistance</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e4e0dc] border-2 bg-transparent text-[#f9efe5] checked:bg-[#f9efe5] checked:border-[#f9efe5] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e4e0dc] focus:outline-none"
                />
                <p class="text-[#171412] text-base font-normal leading-normal">Secure connection with professional cables</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e4e0dc] border-2 bg-transparent text-[#f9efe5] checked:bg-[#f9efe5] checked:border-[#f9efe5] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e4e0dc] focus:outline-none"
                />
                <p class="text-[#171412] text-base font-normal leading-normal">Quick battery diagnosis</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e4e0dc] border-2 bg-transparent text-[#f9efe5] checked:bg-[#f9efe5] checked:border-[#f9efe5] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e4e0dc] focus:outline-none"
                />
                <p class="text-[#171412] text-base font-normal leading-normal">Towing possibility if the battery is completely damaged</p>
              </label>
            </div>
            <h2 class="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How Does it Work?</h2>
            <div class="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div class="flex flex-col items-center gap-1 pt-3">
                <div class="text-[#171412]" data-icon="MapPin" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                    ></path>
                  </svg>
                </div>
                <div class="w-[1.5px] bg-[#e4e0dc] h-2 grow"></div>
              </div>
              <div class="flex flex-1 flex-col pt-3 pb-5">
                <p class="text-[#171412] text-base font-medium leading-normal">Share your location and mention the need for a jump-start</p>
              </div>
              <div class="flex flex-col items-center gap-1">
                <div class="w-[1.5px] bg-[#e4e0dc] h-2"></div>
                <div class="text-[#171412]" data-icon="Truck" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z"
                    ></path>
                  </svg>
                </div>
                <div class="w-[1.5px] bg-[#e4e0dc] h-2 grow"></div>
              </div>
              <div class="flex flex-1 flex-col pt-3 pb-5"><p class="text-[#171412] text-base font-medium leading-normal">Our team arrives with the appropriate equipment</p></div>
              <div class="flex flex-col items-center gap-1">
                <div class="w-[1.5px] bg-[#e4e0dc] h-2"></div>
                <div class="text-[#171412]" data-icon="BatteryCharging" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8Zm48-80v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM138.81,123.79a8,8,0,0,1,.35,7.79l-16,32a8,8,0,0,1-14.32-7.16L119.06,136H100a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L112.94,120H132A8,8,0,0,1,138.81,123.79Z"
                    ></path>
                  </svg>
                </div>
                <div class="w-[1.5px] bg-[#e4e0dc] h-2 grow"></div>
              </div>
              <div class="flex flex-1 flex-col pt-3 pb-5"><p class="text-[#171412] text-base font-medium leading-normal">Battery is jump-started</p></div>
              <div class="flex flex-col items-center gap-1 pb-3">
                <div class="w-[1.5px] bg-[#e4e0dc] h-2"></div>
                <div class="text-[#171412]" data-icon="Car" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-1 flex-col pt-3 pb-5">
                <p class="text-[#171412] text-base font-medium leading-normal">Customer continues their route or towing is assessed</p>
              </div>
            </div>
            <h2 class="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Call Us Anytime</h2>
            <p class="text-[#171412] text-base font-normal leading-normal pb-3 pt-1 px-4">We're available 24/7. Don't hesitate to call us at +1-469-809-0244.</p>
          </div>
        </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default JumpStart;
