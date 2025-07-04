import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

class Recovery extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div className="flex justify-center py-5 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
            <div className="w-full max-w-screen-xl">
              <div className="flex flex-col gap-6 rounded-xl bg-cover bg-center bg-no-repeat min-h-[480px] items-start justify-end p-6 md:p-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(/Images/recovery.jpg)',
                }}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-tight">Recovery</h1>
                  <h2 className="text-white text-sm sm:text-base font-normal leading-normal">
                    Safe and professional recovery in off-road or accident situations.
                  </h2>
                </div>
                <Link
                  to="/request"
                  className="mt-4 inline-flex items-center justify-center h-10 sm:h-12 px-4 sm:px-5 bg-[#f9911a] text-[#181511] text-sm sm:text-base font-bold rounded-full"
                >
                  Request this service
                </Link>
              </div>

              <section className="px-4">
                <h2 className="text-[#181411] text-xl sm:text-2xl font-bold pt-5 pb-3">What is Recovery?</h2>
                <p className="text-[#181411] text-base pb-3">
                  The Recovery service is designed to help drivers whose vehicles are stuck in difficult conditions...
                </p>

                <h2 className="text-[#181411] text-xl sm:text-2xl font-bold pt-5 pb-3">Service Areas Covered</h2>
                <p className="text-[#181411] text-base pb-3">We proudly serve the following areas:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Denton, Texas", "Flower Mound, Texas", "Lewisville, Texas",
                    "Dallas, Texas", "Garland, Texas", "Arlington, Texas", "Fort Worth, Texas"
                  ].map((city, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 border rounded-lg bg-white">
                      {idx === 0 && (
                        <svg width="24" height="24" fill="currentColor" className="text-[#181411]" viewBox="0 0 256 256">
                          <path d="M128,64a40,40...Z" />
                        </svg>
                      )}
                      <h2 className="text-[#181411] text-base font-bold">{city}</h2>
                    </div>
                  ))}
                </div>

                <h2 className="text-[#181411] text-xl sm:text-2xl font-bold pt-5 pb-3">Common Issues This Service Resolves</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Stuck in mud or snow", "Vehicle off-road",
                    "Post-accident recovery", "Vehicle overturned or in a ditch"
                  ].map((issue, idx) => (
                    <div key={idx} className="p-4 border rounded-lg bg-white text-[#181411] font-bold">{issue}</div>
                  ))}
                </div>

                <h2 className="text-[#181411] text-xl sm:text-2xl font-bold pt-5 pb-3">Why is This Service Important?</h2>
                <p className="text-[#181411] text-base pb-3">
                  The Recovery service is vital for extracting your vehicle from dangerous or inaccessible situations...
                </p>

                <h2 className="text-[#181411] text-xl sm:text-2xl font-bold pt-5 pb-3">What's Included?</h2>
                <div>
                  {[
                    "On-site recovery assistance",
                    "Specialized tools and equipment",
                    "Damage-free recovery techniques",
                    "Trained and professional personnel"
                  ].map((item, i) => (
                    <label key={i} className="flex items-center gap-3 py-2">
                      <input type="checkbox" className="h-5 w-5 text-[#f9891a] border-[#e6e0db]" />
                      <span className="text-[#181411] text-base">{item}</span>
                    </label>
                  ))}
                </div>

                <h2 className="text-[#181411] text-xl sm:text-2xl font-bold pt-5 pb-3">How Does it Work?</h2>
                <div className="grid grid-cols-[40px_1fr] gap-x-2">
                  {[
                    { icon: "📍", text: "Share your location and incident" },
                    { icon: "⏱️", text: "Team responds quickly" },
                    { icon: "🚗", text: "Vehicle towing" },
                  ].map((step, i) => (
                    <React.Fragment key={i}>
                      <div className="flex flex-col items-center pt-3">
                        <div className="text-[#181511] text-lg">{step.icon}</div>
                        {i < 2 && <div className="w-[1.5px] bg-[#e6e1db] grow my-1"></div>}
                      </div>
                      <div className="pt-3 pb-5 text-[#181511] text-base font-medium">{step.text}</div>
                    </React.Fragment>
                  ))}
                </div>

                <h2 className="text-[#181411] text-xl sm:text-2xl font-bold pt-5 pb-3">Call Us Anytime</h2>
                <p className="text-[#181411] text-base pb-10">
                  We're available 24/7. Don't hesitate to call us at <strong>+1-469-809-0244</strong>.
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Recovery;
