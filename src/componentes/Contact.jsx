import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
         <div
  className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
  style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
>
      <div class="layout-container flex h-full grow flex-col">
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="@container">
              <div class="@[480px]:p-4">
               <div
  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
  style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${logo})`,
                        }}
>
                  <div class="flex flex-col gap-2 text-center">
                    <h1
                      class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Contact Us
                    </h1>
                    <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      We're here when you need us — reach out anytime.
                    </h2>
                  </div>
                 <Link
  to="/request"
  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f5eadf] text-[#161412] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
>
  <span className="truncate">Call Now</span>
</Link>

                </div>
              </div>
            </div>
            <h2 class="text-[#161412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact Information</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e3e0dd] bg-white p-4 flex-col">
                <div class="text-[#161412]" data-icon="MapPin" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-[#161412] text-base font-bold leading-tight">Address</h2>
                  <p class="text-[#81756a] text-sm font-normal leading-normal">6601 Grissom Rd Denton TX 76208 – USA</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e3e0dd] bg-white p-4 flex-col">
                <div class="text-[#161412]" data-icon="Phone" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-[#161412] text-base font-bold leading-tight">Phone</h2>
                  <p class="text-[#81756a] text-sm font-normal leading-normal">+1-469-809-0244</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#e3e0dd] bg-white p-4 flex-col">
                <div class="text-[#161412]" data-icon="Clock" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-[#161412] text-base font-bold leading-tight">Hours</h2>
                  <p class="text-[#81756a] text-sm font-normal leading-normal">Available 24/7 — including holidays</p>
                </div>
              </div>
            </div>
           
            <h2 class="text-[#161412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Location</h2>
            <div class="flex px-4 py-3">
           <iframe
  title="Dominator Towing Location"
  src="https://www.google.com/maps?q=6601+Grissom+Rd+Denton+TX+76208&output=embed"
  width="100%"
  height="400"
style={{ border: 0 }}
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>


            </div>
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

export default Contact;
