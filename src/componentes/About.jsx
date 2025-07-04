import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div
            className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
            style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
          >
            <div className="flex justify-center px-4 sm:px-8 md:px-16 py-5 w-full">
              <div className="flex flex-col w-full max-w-[960px]">
                {/* Hero */}
                <div
                  className="flex flex-col gap-6 sm:gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10 sm:px-10 min-h-[320px]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("/Images/about.jpeg")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-left text-white">
                    <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
                      About Us
                    </h1>
                    <h2 className="text-sm sm:text-base font-normal">
                      Decades of Trust. A Lifetime of Roadside Support.
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Link
                      to="/request"
                      className="flex items-center justify-center rounded-xl h-10 sm:h-12 px-4 sm:px-5 bg-[#d09761] text-[#171412] text-sm font-bold"
                    >
                      <span>Schedule Service</span>
                    </Link>
                    <Link
                      to="/gallery"
                      className="flex items-center justify-center rounded-xl h-10 sm:h-12 px-4 sm:px-5 bg-[#f4f2f1] text-[#171412] text-sm font-bold"
                    >
                      <span>View Our Gallery</span>
                    </Link>
                  </div>
                </div>

                {/* Who We Are */}
                <h2 className="text-[#171412] text-[22px] font-bold px-4 pb-3 pt-5">Who We Are</h2>
                <div className="p-4">
                  <div className="flex flex-col md:flex-row gap-4 rounded-xl">
                    <div className="flex flex-col gap-1 md:flex-[2]">
                      <p className="text-[#171412] text-base font-bold">Dominator Towing &amp; Recovery LLC</p>
                      <p className="text-[#827568] text-sm font-normal">
                        Dominator Towing &amp; Recovery LLC offers comprehensive roadside assistance, towing, and emergency support services.
                        We are committed to reliability, speed, safety, and 24/7 availability. Serving Denton and surrounding communities,
                        we ensure you're never stranded.
                      </p>
                    </div>
                    <div
                      className="bg-center bg-no-repeat aspect-video bg-cover rounded-xl md:flex-1"
                      style={{ backgroundImage: 'url("/Images/about1.jpeg")' }}
                    />
                  </div>
                </div>

                {/* Impact Numbers */}
                <h2 className="text-[#171412] text-[22px] font-bold px-4 pb-3 pt-5">Impact Numbers</h2>
                <div className="flex flex-wrap gap-4 p-4">
                  {[
                    ["Customer Satisfaction", "98%"],
                    ["Vehicles Towed", "+5,000"],
                    ["Years of Experience", "10+"],
                    ["Tow Trucks in Our Fleet", "15"],
                  ].map(([label, value], i) => (
                    <div key={i} className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f4f2f1]">
                      <p className="text-[#171412] text-base font-medium">{label}</p>
                      <p className="text-[#171412] text-2xl font-bold">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Our Proud Heritage */}
                <h2 className="text-[#171412] text-[22px] font-bold px-4 pb-3 pt-5">Our Proud Heritage</h2>
                <div className="p-4">
                  <div className="flex flex-col md:flex-row gap-4 rounded-xl">
                    <div className="flex flex-col gap-1 md:flex-[2]">
                      <p className="text-[#171412] text-base font-bold">Our Proud Heritage</p>
                      <p className="text-[#827568] text-sm font-normal">
                        Since our beginnings in Denton, we’ve grown with one mission: to provide quick and trustworthy roadside support.
                        Our legacy is built on trust, hard work, and a strong bond with our community.
                      </p>
                    </div>
                    <div
                      className="bg-center bg-no-repeat aspect-video bg-cover rounded-xl md:flex-1"
                      style={{ backgroundImage: 'url("/Images/about2.jpeg")' }}
                    />
                  </div>
                </div>

                {/* Mission & Vision */}
                <h2 className="text-[#171412] text-[22px] font-bold px-4 pb-3 pt-5">Our Mission and Vision</h2>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 border-t border-solid border-t-[#e4e0dd] py-4">
                    <p className="text-[#827568] text-sm font-normal">Mission</p>
                    <p className="text-[#171412] text-sm font-normal">
                      Deliver fast, safe, and reliable roadside support using trained professionals and modern equipment.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 border-t border-solid border-t-[#e4e0dd] py-4">
                    <p className="text-[#827568] text-sm font-normal">Vision</p>
                    <p className="text-[#171412] text-sm font-normal">
                      Become the most trusted towing and recovery company in North Texas, strengthening community ties and exceeding customer expectations.
                    </p>
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

export default About;
