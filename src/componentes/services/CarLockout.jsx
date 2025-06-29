import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import recovery from "../../Images/lockout.jpeg";
import { Link } from "react-router-dom";

class CarLockout extends Component {
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
                      Car Lockout
                    </h1>
                    <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Fast, damage-free assistance to regain access to your vehicle.
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
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What is Car Lockout?</h2>
            <p class="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Car Lockout is a service designed to help you when you've lost your keys, left them inside your vehicle, or the locking system has failed. Our trained technicians can
              open your vehicle safely and quickly, without causing any damage.
            </p>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Service Areas Covered</h2>
            <p class="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">We proudly serve the following areas:</p>
            <div class="flex gap-3 p-3 flex-wrap pr-4">
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f5f2f0] pl-4 pr-4">
                <p class="text-[#181411] text-sm font-medium leading-normal">Denton, Texas</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f5f2f0] pl-4 pr-4">
                <p class="text-[#181411] text-sm font-medium leading-normal">Flower Mound, Texas</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f5f2f0] pl-4 pr-4">
                <p class="text-[#181411] text-sm font-medium leading-normal">Lewisville, Texas</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f5f2f0] pl-4 pr-4">
                <p class="text-[#181411] text-sm font-medium leading-normal">Dallas, Texas</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f5f2f0] pl-4 pr-4">
                <p class="text-[#181411] text-sm font-medium leading-normal">Garland, Texas</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f5f2f0] pl-4 pr-4">
                <p class="text-[#181411] text-sm font-medium leading-normal">Arlington, Texas</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f5f2f0] pl-4 pr-4">
                <p class="text-[#181411] text-sm font-medium leading-normal">Fort Worth, Texas</p>
              </div>
            </div>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Common Issues This Service Resolves</h2>
            <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div class="text-[#181411] flex items-center justify-center rounded-lg bg-[#f5f2f0] shrink-0 size-12" data-icon="Key" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-[#181411] text-base font-medium leading-normal line-clamp-1">Keys Left Inside</p>
                <p class="text-[#8c755f] text-sm font-normal leading-normal line-clamp-2">Keys left inside the car</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div class="text-[#181411] flex items-center justify-center rounded-lg bg-[#f5f2f0] shrink-0 size-12" data-icon="Key" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-[#181411] text-base font-medium leading-normal line-clamp-1">Lost Keys</p>
                <p class="text-[#8c755f] text-sm font-normal leading-normal line-clamp-2">Lost keys</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div class="text-[#181411] flex items-center justify-center rounded-lg bg-[#f5f2f0] shrink-0 size-12" data-icon="Lock" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-[#181411] text-base font-medium leading-normal line-clamp-1">Damaged Locking System</p>
                <p class="text-[#8c755f] text-sm font-normal leading-normal line-clamp-2">Damaged locking system</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div class="text-[#181411] flex items-center justify-center rounded-lg bg-[#f5f2f0] shrink-0 size-12" data-icon="Lock" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-[#181411] text-base font-medium leading-normal line-clamp-1">Accidental Auto-Lock</p>
                <p class="text-[#8c755f] text-sm font-normal leading-normal line-clamp-2">Accidental auto-lock</p>
              </div>
            </div>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why is This Service Important?</h2>
            <p class="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Our service ensures a quick response, safety, and efficient access to your vehicle without causing any damage.
            </p>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What's Included?</h2>
            <div class="px-4">
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#faaa5a] checked:bg-[#faaa5a] checked:border-[#faaa5a] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Quick 24/7 response</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#faaa5a] checked:bg-[#faaa5a] checked:border-[#faaa5a] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Damage-free unlocking</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#faaa5a] checked:bg-[#faaa5a] checked:border-[#faaa5a] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Professional technicians</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#faaa5a] checked:bg-[#faaa5a] checked:border-[#faaa5a] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Specialized tools</p>
              </label>
            </div>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How Does it Work?</h2>
            <div class="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div class="flex flex-col items-center gap-1 pt-3">
                <div class="text-[#181411]" data-icon="MapPin" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                    ></path>
                  </svg>
                </div>
                <div class="w-[1.5px] bg-[#e6e0db] h-2 grow"></div>
              </div>
              <div class="flex flex-1 flex-col pt-3 pb-5"><p class="text-[#181411] text-base font-medium leading-normal">Share your location and incident type</p></div>
              <div class="flex flex-col items-center gap-1">
                <div class="w-[1.5px] bg-[#e6e0db] h-2"></div>
                <div class="text-[#181411]" data-icon="Truck" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z"
                    ></path>
                  </svg>
                </div>
                <div class="w-[1.5px] bg-[#e6e0db] h-2 grow"></div>
              </div>
              <div class="flex flex-1 flex-col pt-3 pb-5"><p class="text-[#181411] text-base font-medium leading-normal">Our team heads to your location</p></div>
              <div class="flex flex-col items-center gap-1 pb-3">
                <div class="w-[1.5px] bg-[#e6e0db] h-2"></div>
                <div class="text-[#181411]" data-icon="Key" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-1 flex-col pt-3 pb-5"><p class="text-[#181411] text-base font-medium leading-normal">Vehicle is safely unlocked</p></div>
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

export default CarLockout;
