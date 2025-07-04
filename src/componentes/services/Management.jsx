import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

class Management extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
           <div className="px-4 sm:px-6 md:px-10 lg:px-20 flex justify-center py-5">
            <div className="flex flex-col w-full max-w-5xl">
              <div className="container mx-auto">
                <div className="p-4 sm:p-6 md:p-10 flex min-h-[480px] flex-col gap-6 sm:gap-8 rounded-xl items-start justify-end bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(/Images/delivery.jpg)',
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight tracking-tight">
                      Impound Management
                    </h1>
                    <h2 className="text-white text-sm sm:text-base font-normal">
                      We help you recover your vehicle from any legal impound lot quickly and safely.
                    </h2>
                  </div>
                  <Link
                    to="/request"
                    className="mt-4 flex w-full sm:w-auto items-center justify-center rounded-full h-10 sm:h-12 px-4 sm:px-5 bg-[#f9911a] text-[#181511] text-sm sm:text-base font-bold"
                  >
                    <span className="truncate">Request this service</span>
                  </Link>
                </div>
              </div>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What is Impound Management?</h2>
            <p class="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Impound Management is a service designed to help you when your vehicle has been towed and is in an impound lot. Our team guides, supports, and manages the entire
              process required for you to recover your vehicle as quickly as possible, complying with legal and logistical requirements.
            </p>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Service Areas Covered</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="MapPin" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Denton, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <h2 class="text-[#181411] text-base font-bold leading-tight">Flower Mound, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <h2 class="text-[#181411] text-base font-bold leading-tight">Lewisville, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <h2 class="text-[#181411] text-base font-bold leading-tight">Dallas, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <h2 class="text-[#181411] text-base font-bold leading-tight">Garland, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <h2 class="text-[#181411] text-base font-bold leading-tight">Arlington, Texas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <h2 class="text-[#181411] text-base font-bold leading-tight">Fort Worth, Texas</h2>
              </div>
            </div>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Common Issues This Service Resolves</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="Garage" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,192h-8V98.67a16,16,0,0,0-7.12-13.31l-88-58.67a16,16,0,0,0-17.75,0l-88,58.67A16,16,0,0,0,24,98.67V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,98.67,128,40l88,58.66V192H192V136a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v56H40ZM176,144v16H136V144Zm-56,16H80V144h40ZM80,176h40v16H80Zm56,0h40v16H136Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Vehicle towed for illegal parking</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="Buildings" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Vehicle in a municipal impound lot</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="Question" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Difficulties understanding the recovery process</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="Car" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Lack of transportation to reach the impound lot</h2>
              </div>
            </div>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why is This Service Important?</h2>
            <p class="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Recovering a towed vehicle can be confusing and stressful. This service is key to saving time, avoiding errors in procedures, and expediting the process with
              professional support. It also prevents additional charges due to delays.
            </p>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What's Included?</h2>
            <div class="px-4">
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f6ab5f] checked:bg-[#f6ab5f] checked:border-[#f6ab5f] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Advice on the legal and administrative process</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f6ab5f] checked:bg-[#f6ab5f] checked:border-[#f6ab5f] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Support in identifying the impound lot location</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f6ab5f] checked:bg-[#f6ab5f] checked:border-[#f6ab5f] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Physical accompaniment if necessary</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f6ab5f] checked:bg-[#f6ab5f] checked:border-[#f6ab5f] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Transportation to the location if the client requires it</p>
              </label>
            </div>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How Does it Work?</h2>
            <div class="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div class="flex flex-col items-center gap-1 pt-3">
                <div class="text-[#181411]" data-icon="Phone" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"
                    ></path>
                  </svg>
                </div>
                <div class="w-[1.5px] bg-[#e6e0db] h-2 grow"></div>
              </div>
              <div class="flex flex-1 flex-col pt-3 pb-5"><p class="text-[#181411] text-base font-medium leading-normal">Contact us and tell us what happened</p></div>
              <div class="flex flex-col items-center gap-1">
                <div class="w-[1.5px] bg-[#e6e0db] h-2"></div>
                <div class="text-[#181411]" data-icon="MapPin" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                    ></path>
                  </svg>
                </div>
                <div class="w-[1.5px] bg-[#e6e0db] h-2 grow"></div>
              </div>
              <div class="flex flex-1 flex-col pt-3 pb-5"><p class="text-[#181411] text-base font-medium leading-normal">We confirm the location and impound requirements</p></div>
              <div class="flex flex-col items-center gap-1">
                <div class="w-[1.5px] bg-[#e6e0db] h-2"></div>
                <div class="text-[#181411]" data-icon="ListChecks" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,64L56,132.69,45.66,122.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm0,64L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z"
                    ></path>
                  </svg>
                </div>
                <div class="w-[1.5px] bg-[#e6e0db] h-2 grow"></div>
              </div>
              <div class="flex flex-1 flex-col pt-3 pb-5"><p class="text-[#181411] text-base font-medium leading-normal">We guide you step by step through the process</p></div>
              <div class="flex flex-col items-center gap-1 pb-3">
                <div class="w-[1.5px] bg-[#e6e0db] h-2"></div>
                <div class="text-[#181411]" data-icon="Car" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-1 flex-col pt-3 pb-5">
                <p class="text-[#181411] text-base font-medium leading-normal">We help you retrieve the vehicle and resolve the case</p>
              </div>
            </div>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Call Us Anytime</h2>
            <p class="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">We're available 24/7. Don't hesitate to call us at +1-469-809-0244.</p>
          </div>
        </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Management;
