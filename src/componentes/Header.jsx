import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"

const Header = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f5f2f0] px-10 py-3">
      <div className="flex items-center gap-4 text-[#181511]">
       <div className="h-11 w-auto">
  <img src={logo} alt="Dominator Towing Logo" className="h-full w-auto object-contain" />
</div>


    
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-[#181511] text-sm font-medium leading-normal"
            >
              {name}
            </Link>
          ))}
        </nav>

       <Link to="/request" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f39420] text-[#181511] text-sm font-bold leading-normal tracking-[0.015em]">
  <span className="truncate">Request Assistance</span>
</Link>

      </div>
    </header>
  );
};

export default Header;
