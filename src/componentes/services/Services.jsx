import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

import towing from "../../Images/towing.jpeg";
import recovery from "../../Images/recovery.jpeg";
import lockout from "../../Images/emergenci.jpeg"; // o el nombre correcto
import jumpstart from "../../Images/IMG_3076.jpeg"; // si esa es la que representa
import delivery from "../../Images/delivery.jpeg";
import management from "../../Images/IMG_6054.jpeg"; // si esa representa management
import emergency from "../../Images/road.jpeg";


class Services extends Component {
  render() {
    const services = [
      {
        name: "Towing",
        desc: "Safe and reliable towing services for all types of vehicles, available 24/7.",
        path: "/towing",
        img: towing,
      },
      {
        name: "Recovery",
        desc: "Assistance for vehicles stuck in ditches, mud, or off-road conditions.",
        path: "/recovery",
        img: recovery,
      },
      {
        name: "Car Lockout",
        desc: "Quick help if you're locked out of your vehicle, with no damage to your car.",
        path: "/carlockout",
        img: lockout,
      },
      {
        name: "Jump Start",
        desc: "Fast battery jump-starts to get your vehicle running again in minutes.",
        path: "/jumpstart",
        img: jumpstart,
      },
      {
        name: "Fuel Delivery",
        desc: "Out of gas? We’ll deliver fuel to your location anytime, anywhere.",
        path: "/fueldelivery",
        img: delivery,
      },
      {
        name: "Impound Management",
        desc: "Support with impounded vehicles and coordination with local impound lots.",
        path: "/management",
        img: management,
      },
      {
        name: "Emergency Roadside",
        desc: "Full roadside assistance including flat tires, breakdowns, and minor repairs.",
        path: "/roadside",
        img: emergency,
      },
    ];

    return (
      <>
        <Header />
        <main>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between items-center gap-3 p-4">
  <p className="text-[#171412] tracking-light text-[32px] font-bold leading-tight min-w-72">
    Our Services
  </p>
  
</div>


              {/* Services Cards */}
              {services.map((service, index) => (
                <div className="p-4" key={index}>
                  <Link to={service.path}>
                    <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow duration-300 ease-in-out">
                      <div className="flex flex-[2_2_0px] flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <p className="text-[#171412] text-base font-bold leading-tight">
                            {service.name}
                          </p>
                          <p className="text-[#827568] text-sm font-normal leading-normal">
                            {service.desc}
                          </p>
                        </div>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#f4f2f1] text-[#171412] text-sm font-medium leading-normal w-fit">
                          <span className="truncate">Learn More</span>
                        </button>
                      </div>
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                        style={{
                          backgroundImage: `url(${service.img})`,
                        }}
                      ></div>
                    </div>
                  </Link>
                </div>
              ))}

              {/* Contact Section */}
              <h2 className="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Contact Us
              </h2>
              <p className="text-[#171412] text-base font-normal leading-normal pb-3 pt-1 px-4">
                For immediate assistance or to learn more about our services,
                please contact us.
              </p>
              <div className="flex px-4 py-3 justify-start">
                <Link
  to="/request"
  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f9f2eb] text-[#171412] text-sm font-bold leading-normal tracking-[0.015em]"
>
  <span className="truncate">Request Assistance</span>
</Link>

              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Services;
