import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div
            className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
            style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
          >
            <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-16 py-5">
              <div className="flex flex-col max-w-[960px] w-full">
                {/* Hero */}
                <div className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 sm:p-8 min-h-[320px]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("/Images/logo.png")',
                  }}
                >
                  <div className="text-center text-white">
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Contact Us</h1>
                    <h2 className="text-sm sm:text-base font-normal mt-2">
                      We're here when you need us — reach out anytime.
                    </h2>
                  </div>

                  <Link
                    to="/request"
                    className="mt-4 bg-[#f5eadf] text-[#161412] text-sm sm:text-base font-bold px-6 py-2 rounded-full hover:bg-[#ebdbc7] transition"
                  >
                    Call Now
                  </Link>
                </div>

                {/* Contact Info */}
                <h2 className="text-[#161412] text-xl font-bold px-4 pt-6 pb-3">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                  {/* Address */}
                  <div className="flex flex-col gap-3 p-4 rounded-lg border border-[#e3e0dd]">
                    <div className="text-[#161412]">
                      {/* Map Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-[#161412]">Address</h2>
                      <p className="text-sm text-[#81756a]">6601 Grissom Rd Denton TX 76208 – USA</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-3 p-4 rounded-lg border border-[#e3e0dd]">
                    <div className="text-[#161412]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-[#161412]">Phone</h2>
                      <p className="text-sm text-[#81756a]">+1-469-809-0244</p>
                      <p className="text-sm text-[#81756a]">+1-940-442-9806</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col gap-3 p-4 rounded-lg border border-[#e3e0dd]">
                    <div className="text-[#161412]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-[#161412]">Hours</h2>
                      <p className="text-sm text-[#81756a]">Available 24/7 — including holidays</p>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <h2 className="text-[#161412] text-xl font-bold px-4 pt-6 pb-3">Our Location</h2>
                <div className="px-4 pb-8">
                  <iframe
  title="Dominator Towing Location"
  src="https://www.google.com/maps?q=33.202985,-97.062940&z=15&output=embed"
  className="w-full h-[400px] rounded-lg"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  style={{ border: 0 }}
></iframe>

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
