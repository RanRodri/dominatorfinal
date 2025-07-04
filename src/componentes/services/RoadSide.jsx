import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";


class RoadSide extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(/Images/road.jpg)',
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                Emergency Roadside
              </h1>
              <h2 className="text-white text-sm @[480px]:text-base">
                Immediate assistance wherever your vehicle breaks down.
              </h2>
            </div>
            <Link
              to="/request"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f9911a] text-[#181511] text-sm font-bold @[480px]:text-base"
            >
              <span className="truncate">Request this service</span>
            </Link>
          </div>
        </div>
      </div>
          <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What is Emergency Roadside?</h2>
            <p class="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Emergency Roadside is a comprehensive service designed to help you when facing unexpected issues on the road. Whether it's a flat tire, dead battery, lack of fuel, or
              any minor incident, our team is available 24/7 to assist you wherever you are.
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
                <div class="text-[#181411]" data-icon="Boot" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M192,112H160V56a16,16,0,0,0-16-16H32a8,8,0,0,0-7.47,10.86c11.06,28.84,8.76,83.71-.22,114.93A8.25,8.25,0,0,0,24,168v32a16,16,0,0,0,16,16H66.11a16,16,0,0,0,7.16-1.69L85.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69h28.22a16,16,0,0,0,7.16-1.69L169.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69H232a16,16,0,0,0,16-16V168A56.06,56.06,0,0,0,192,112ZM42.86,56H144V80H112a8,8,0,0,0,0,16h32v16H112a8,8,0,0,0,0,16h80a40.07,40.07,0,0,1,39.2,32H42.25C49,129.16,50.41,85.83,42.86,56ZM232,200H205.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H169.89a16,16,0,0,0-7.16,1.69L150.11,200H121.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H85.89a16,16,0,0,0-7.16,1.69L66.11,200H40V176H232Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Flat or deflated tire</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="BatteryHigh" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8ZM144,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm-40,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM64,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm192,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Dead battery</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="GasPump" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Vehicle out of gas</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="Car" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Immobilization due to minor failures</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="Key" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Accidental vehicle lockout</h2>
              </div>
            </div>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why is This Service Important?</h2>
            <p class="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Having immediate access to roadside assistance is key for your safety, peace of mind, and time-saving. This service reduces the stress of an emergency and prevents
              you from depending on strangers or risking walking in dangerous areas.
            </p>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What's Included?</h2>
            <div class="px-4">
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f5a356] checked:bg-[#f5a356] checked:border-[#f5a356] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Tire change or inflation</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f5a356] checked:bg-[#f5a356] checked:border-[#f5a356] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Jump start</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f5a356] checked:bg-[#f5a356] checked:border-[#f5a356] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Fuel delivery</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f5a356] checked:bg-[#f5a356] checked:border-[#f5a356] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Unlocking of doors (Lockout)</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f5a356] checked:bg-[#f5a356] checked:border-[#f5a356] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Basic on-site problem assessment</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f5a356] checked:bg-[#f5a356] checked:border-[#f5a356] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Towing if necessary</p>
              </label>
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
    <p className="text-[#181511] text-base font-medium leading-normal">Call or request assistance</p>
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
    <p className="text-[#181511] text-base font-medium leading-normal">Team arrives and diagnoses the issue</p>
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
    <p className="text-[#181511] text-base font-medium leading-normal">Issue resolved or towing coordinated</p>
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

export default RoadSide;
