import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../Images/logo.png";
import servicio from "../Images/servicio.jpg";

const Request = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plate: "",
    model: "",
    year: "",
    issue: "",
    accident: "",
    service: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const missingFields = [];

    if (!form.name) missingFields.push("Name");
    if (!form.email) missingFields.push("Email");
    if (!form.phone) missingFields.push("Phone Number");
    if (!form.plate) missingFields.push("License Plate");
    if (!form.model) missingFields.push("Car Model");
    if (!form.year) missingFields.push("Year of Vehicle");
    if (!form.issue) missingFields.push("Description of the incident");
    if (!form.accident) missingFields.push("Was it an accident?");
    if (!form.service) missingFields.push("Service needed");

    if (missingFields.length > 0) {
      toast.error(
        `Please complete the following fields:\n${missingFields.join(", ")}`
      );
      return;
    }

    const message = `*Service Request*

*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Plate:* ${form.plate}
*Model:* ${form.model}
*Year:* ${form.year}

*What happened:* ${form.issue}
*Accident involved:* ${form.accident}
*Service needed:* ${form.service}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/14698090244?text=${encoded}`, "_blank");

    toast.success("Message sent successfully! 🚀");
    setForm({
      name: "",
      email: "",
      phone: "",
      plate: "",
      model: "",
      year: "",
      issue: "",
      accident: "",
      service: "",
    });
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <Header />
      <main>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-row gap-8 max-w-[960px] flex-1">
            <div className="flex flex-col flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#181411] text-[32px] font-bold">
                  Request Assistance
                </p>
              </div>

              <FormInput placeholder="Full Name" icon="User" name="name" value={form.name} onChange={handleChange} />
              <FormInput placeholder="Email" icon="Envelope" name="email" value={form.email} onChange={handleChange} />
              <FormInput placeholder="Phone Number" icon="Phone" name="phone" value={form.phone} onChange={handleChange} />
              <FormInput placeholder="License Plate" icon="Car" name="plate" value={form.plate} onChange={handleChange} />

              {/* Modelo y año */}
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <input
                  name="model"
                  value={form.model}
                  onChange={handleChange}
                  placeholder="Car Model"
                  className="form-input flex w-full rounded-xl border border-[#e6e0db] bg-white h-14 placeholder:text-[#8a7560] p-[15px]"
                />
                <input
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  placeholder="Year of Vehicle"
                  className="form-input flex w-full rounded-xl border border-[#e6e0db] bg-white h-14 placeholder:text-[#8a7560] p-[15px]"
                />
              </div>

              {/* Descripción */}
              <div className="flex max-w-[480px] px-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-[#181411] font-medium pb-2">Description of the incident</p>
                  <textarea
                    name="issue"
                    value={form.issue}
                    onChange={handleChange}
                    placeholder="What happened?"
                    className="form-input w-full resize-none rounded-xl border border-[#e6e0db] bg-white min-h-36 placeholder:text-[#8a7560] p-[15px]"
                  />
                </label>
              </div>

              <SelectInput
                label="Was it an accident?"
                name="accident"
                value={form.accident}
                onChange={handleChange}
                options={["Yes", "No"]}
              />
              <SelectInput
                label="Service needed"
                name="service"
                value={form.service}
                onChange={handleChange}
                options={[
                  "Towing",
                  "Jump Start",
                  "Fuel Delivery",
                  "Lockout",
                  "Impound Management",
                  "Roadside Assistance",
                ]}
              />

              <div className="flex px-4 py-3 justify-end">
                <button
                  onClick={sendToWhatsApp}
                  className="bg-[#f58413] text-[#181411] font-bold text-sm h-10 px-4 rounded-full"
                >
                  Send via WhatsApp
                </button>
              </div>
            </div>

            {/* Right images */}
            <div className="hidden md:flex flex-col gap-6 w-[260px] items-center mx-auto">
              <img src={logo} alt="Company Logo" className="rounded-xl object-contain h-[160px] w-full" />
              <img src={servicio} alt="Service Preview" className="rounded-xl object-contain h-[160px] w-full" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const FormInput = ({ placeholder, icon, name, value, onChange }) => (
  <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
    <label className="flex flex-col min-w-40 flex-1">
      <div className="flex w-full flex-1 items-stretch rounded-xl">
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-input flex w-full flex-1 rounded-xl text-[#181411] border border-[#e6e0db] bg-white h-14 placeholder:text-[#8a7560] p-[15px] rounded-r-none border-r-0 pr-2 text-base"
        />
        <div className="text-[#8a7560] flex border border-[#e6e0db] bg-white items-center justify-center pr-[15px] rounded-r-xl border-l-0">
          <i className={`ph-${icon.toLowerCase()}`} style={{ fontSize: 24 }}></i>
        </div>
      </div>
    </label>
  </div>
);

const SelectInput = ({ label, name, value, onChange, options }) => (
  <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
    <label className="flex flex-col min-w-40 flex-1">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-input flex w-full rounded-xl text-[#181411] border border-[#e6e0db] bg-white h-14 placeholder:text-[#8a7560] p-[15px]"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  </div>
);

export default Request;
