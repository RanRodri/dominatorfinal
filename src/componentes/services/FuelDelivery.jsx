import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

class FuelDelivery extends Component {
    state = {
    currentImageIndex: 0,
    images: [
      "/Images/fueldelivery1.jpg",
      "/Images/fueldelivery2.jpg",
      "/Images/fueldelivery3.jpg",
    ],
  };
    componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        currentImageIndex:
          (prevState.currentImageIndex + 1) % prevState.images.length,
      }));
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
     const { images, currentImageIndex } = this.state;
    const currentImage = images[currentImageIndex];
    return (
      <>
        <Header />
        <main>
               <div className="px-4 sm:px-6 md:px-10 lg:px-20 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-5xl">
              <div className="@container">
                <div className="@sm:p-4">
                  <div
                    className="relative flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @sm:gap-8 @sm:rounded-xl items-start justify-end px-4 pb-10 @sm:px-10 transition-all duration-1000 ease-in-out"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${currentImage})`,
                    }}
                  >
                    <div className="flex flex-col gap-2 text-left">
                      <h1 className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
                        Fuel Delivery
                      </h1>
                      <h2 className="text-white text-sm sm:text-base font-normal leading-normal">
                        We bring fuel to you, wherever and whenever you need it.
                      </h2>
                    </div>
                    <Link
                      to="/request"
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 sm:h-12 sm:px-5 bg-[#f9911a] text-[#181511] text-sm font-bold leading-normal tracking-[0.015em]"
                    >
                      <span className="truncate">Request this service</span>
                    </Link>
                  </div>
                </div>
              </div>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What is Fuel Delivery?</h2>
            <p class="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Fuel Delivery is a service designed for situations where your vehicle has run out of fuel. Instead of walking long distances or seeking help, our team quickly
              delivers the type of fuel your vehicle needs directly to your location.
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
                <div class="text-[#181411]" data-icon="GasPump" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Running out of gas on the road</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="GasPump" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Incorrect or insufficient fuel</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="GasPump" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">Forgetting low fuel level</h2>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
                <div class="text-[#181411]" data-icon="GasPump" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-[#181411] text-base font-bold leading-tight">No nearby gas stations</h2>
              </div>
            </div>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why is This Service Important?</h2>
            <p class="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              This service offers a quick, safe, and reliable solution for one of the most common roadside situations. Avoid risks of walking on highways or dangerous areas and
              reduce wait times with immediate delivery.
            </p>
            <h2 class="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What's Included?</h2>
            <div class="px-4">
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f9a047] checked:bg-[#f9a047] checked:border-[#f9a047] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Fuel delivery to your location</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f9a047] checked:bg-[#f9a047] checked:border-[#f9a047] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Verification of correct fuel type</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f9a047] checked:bg-[#f9a047] checked:border-[#f9a047] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Additional technical assistance if the vehicle doesn't start</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f9a047] checked:bg-[#f9a047] checked:border-[#f9a047] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">24/7 availability with fast arrival</p>
              </label>
              <label class="flex gap-x-3 py-3 flex-row">
                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-[#e6e0db] border-2 bg-transparent text-[#f9a047] checked:bg-[#f9a047] checked:border-[#f9a047] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e6e0db] focus:outline-none"
                />
                <p class="text-[#181411] text-base font-normal leading-normal">Safe and secure fuel handling</p>
              </label>
            </div>
<h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How Does it Work?</h2>
<div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
  <div className="flex flex-col items-center gap-1 pt-3">
    <div className="text-[#181411]">
      {/* MapPin Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
      </svg>
    </div>
    <div className="w-[1.5px] bg-[#e6e0db] h-2 grow"></div>
  </div>
  <div className="flex flex-1 flex-col pt-3 pb-5">
    <p className="text-[#181411] text-base font-medium leading-normal">Share your location and incident type</p>
  </div>

  <div className="flex flex-col items-center gap-1">
    <div className="w-[1.5px] bg-[#e6e0db] h-2"></div>
    <div className="text-[#181411]">
      {/* Truck Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z" />
      </svg>
    </div>
    <div className="w-[1.5px] bg-[#e6e0db] h-2 grow"></div>
  </div>
  <div className="flex flex-1 flex-col pt-3 pb-5">
    <p className="text-[#181411] text-base font-medium leading-normal">Our team heads to your location</p>
  </div>

  <div className="flex flex-col items-center gap-1 pb-3">
    <div className="w-[1.5px] bg-[#e6e0db] h-2"></div>
    <div className="text-[#181411]">
      {/* Key Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
      </svg>
    </div>
  </div>
  <div className="flex flex-1 flex-col pt-3 pb-5">
    <p className="text-[#181411] text-base font-medium leading-normal">Vehicle is safely unlocked</p>
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

export default FuelDelivery;
