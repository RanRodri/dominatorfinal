import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import aboutImage from "../Images/about.jpeg";
import aboutImage1 from "../Images/about1.jpeg";
import aboutImage2 from "../Images/about2.jpeg"; // Corregido: nombre del archivo debe ser .jpeg, no .2jpeg
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div
            className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
            style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
          >
            <div className="layout-container flex h-full grow flex-col">
              <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                  <div className="@container">
                    <div className="@[480px]:p-4">
                      <div
                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${aboutImage})`,
                        }}
                      >
                        <div className="flex flex-col gap-2 text-left">
                          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                            About Us
                          </h1>
                          <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">
                            Decades of Trust. A Lifetime of Roadside Support.
                          </h2>
                        </div>
                        <div className="flex-wrap gap-3 flex">
                          <div className="flex-wrap gap-3 flex">
  <Link
    to="/request"
    className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#d09761] text-[#171412] text-sm font-bold"
  >
    <span className="truncate">Schedule Service</span>
  </Link>
  <Link
    to="/gallery"
    className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f4f2f1] text-[#171412] text-sm font-bold"
  >
    <span className="truncate">View Our Gallery</span>
  </Link>
</div>

                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Who We Are */}
                  <h2 className="text-[#171412] text-[22px] font-bold px-4 pb-3 pt-5">Who We Are</h2>
                  <div className="p-4">
                    <div className="flex items-stretch justify-between gap-4 rounded-xl">
                      <div className="flex flex-col gap-1 flex-[2_2_0px]">
                        <p className="text-[#171412] text-base font-bold">Dominator Towing &amp; Recovery LLC</p>
                        <p className="text-[#827568] text-sm font-normal">
                          Dominator Towing &amp; Recovery LLC offers comprehensive roadside assistance, towing, and emergency support services. We are committed to reliability, speed,
                          safety, and 24/7 availability. Serving Denton and surrounding communities, we ensure you're never stranded.
                        </p>
                      </div>
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                        style={{ backgroundImage: `url(${aboutImage1})` }}
                      ></div>
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
                    <div className="flex items-stretch justify-between gap-4 rounded-xl">
                      <div className="flex flex-col gap-1 flex-[2_2_0px]">
                        <p className="text-[#171412] text-base font-bold">Our Proud Heritage</p>
                        <p className="text-[#827568] text-sm font-normal">
                          Since our beginnings in Denton, we’ve grown with one mission: to provide quick and trustworthy roadside support. Our legacy is built on trust, hard work, and a
                          strong bond with our community.
                        </p>
                      </div>
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                        style={{ backgroundImage: `url(${aboutImage2})` }}
                      ></div>
                    </div>
                  </div>

                  {/* Mission & Vision */}
                  <h2 className="text-[#171412] text-[22px] font-bold px-4 pb-3 pt-5">Our Mission and Vision</h2>
                  <div className="p-4 grid grid-cols-2">
                    <div className="flex flex-col gap-1 border-t border-solid border-t-[#e4e0dd] py-4 pr-2">
                      <p className="text-[#827568] text-sm font-normal">Mission</p>
                      <p className="text-[#171412] text-sm font-normal">
                        Deliver fast, safe, and reliable roadside support using trained professionals and modern equipment.
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 border-t border-solid border-t-[#e4e0dd] py-4 pl-2">
                      <p className="text-[#827568] text-sm font-normal">Vision</p>
                      <p className="text-[#171412] text-sm font-normal">
                        Become the most trusted towing and recovery company in North Texas, strengthening community ties and exceeding customer expectations.
                      </p>
                    </div>
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
