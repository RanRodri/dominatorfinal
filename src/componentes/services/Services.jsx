import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

class Services extends Component {
  render() {
    const services = [
      {
        name: "Towing",
        desc: "Safe and reliable towing services for all types of vehicles, available 24/7.",
        path: "/towing",
        img: "/Images/towing.jpg",
      },
      {
        name: "Recovery",
        desc: "Assistance for vehicles stuck in ditches, mud, or off-road conditions.",
        path: "/recovery",
        img: "/Images/road.jpg",
      },
      {
        name: "Car Lockout",
        desc: "Quick help if you're locked out of your vehicle, with no damage to your car.",
        path: "/carlockout",
        img: "/Images/carlockout1.jpg",
      },
      {
        name: "Jump Start",
        desc: "Fast battery jump-starts to get your vehicle running again in minutes.",
        path: "/jumpstart",
        img: "/Images/jumpstart1.jpg",
      },
      {
        name: "Fuel Delivery",
        desc: "Out of gas? We’ll deliver fuel to your location anytime, anywhere.",
        path: "/fueldelivery",
        img: "/Images/fueldelivery2.jpg",
      },
      {
        name: "Impound Management",
        desc: "Support with impounded vehicles and coordination with local impound lots.",
        path: "/management",
        img: "/Images/delivery.jpg",
      },
      {
        name: "Emergency Roadside",
        desc: "Full roadside assistance including flat tires, breakdowns, and minor repairs.",
        path: "/roadside",
        img: "/Images/camaro.jpg",
      },
    ];

    return (
      <>
        <Header />
        <main>
          <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-screen-xl">
              {/* Heading */}
              <div className="flex justify-between items-center gap-3 px-4 pb-4">
                <p className="text-[#171412] text-[28px] sm:text-[32px] font-bold leading-tight">
                  Our Services
                </p>
              </div>

              {/* Service Cards */}
              {services.map((service, index) => (
                <div className="px-4 pb-4" key={index}>
                  <Link to={service.path}>
                    <div className="flex flex-col md:flex-row items-stretch gap-4 rounded-xl bg-white p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow duration-300 ease-in-out">
                      {/* Text */}
                      <div className="flex flex-col gap-4 flex-1">
                        <div className="flex flex-col gap-1">
                          <p className="text-[#171412] text-base font-bold leading-tight">
                            {service.name}
                          </p>
                          <p className="text-[#827568] text-sm font-normal leading-normal">
                            {service.desc}
                          </p>
                        </div>
                        <button className="w-fit bg-[#f4f2f1] text-[#171412] rounded-full h-8 px-4 text-sm font-medium">
                          Learn More
                        </button>
                      </div>

                      {/* Image */}
                      <div
                        className="w-full md:w-[300px] aspect-video bg-cover bg-center rounded-xl flex-shrink-0"
                        style={{ backgroundImage: `url(${service.img})` }}
                      ></div>
                    </div>
                  </Link>
                </div>
              ))}

              {/* Contact Section */}
              <h2 className="text-[#171412] text-xl sm:text-2xl font-bold px-4 pb-3 pt-5">
                Contact Us
              </h2>
              <p className="text-[#171412] text-base font-normal px-4 pb-3">
                For immediate assistance or to learn more about our services, please contact us.
              </p>
              <div className="flex px-4 py-3">
                <Link
                  to="/request"
                  className="flex items-center justify-center h-10 px-4 rounded-full bg-[#f9f2eb] text-[#171412] text-sm font-bold"
                >
                  Request Assistance
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
