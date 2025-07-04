import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const images = [
  "/Images/about.jpg",
  "/Images/about1.jpg",
  "/Images/about2.jpg",
  "/Images/about5.jpg",
  "/Images/camaro.jpg",
  "/Images/carlockout1.jpg",
  "/Images/carlockout2.jpg",
  "/Images/carlockout3.jpg",
  "/Images/delivery.jpg",
  "/Images/emergenci.jpg",
  "/Images/fueldelivery1.jpg",
  "/Images/fueldelivery2.jpg",
  "/Images/fueldelivery3.jpg",
  "/Images/IMG_2745.jpg",
  "/Images/IMG_3076.jpg",
  "/Images/IMG_6054.jpg",
  "/Images/IMG_6141.jpg",
  "/Images/IMG_6890.jpg",
  "/Images/IMG_6907.jpg",
  "/Images/jump.jpg",
  "/Images/jumpstart1.jpg",
  "/Images/jumpstart2.jpg",
  "/Images/jumpstart3.jpg",
  "/Images/jumpstart4.jpg",
  "/Images/kia1.jpg",
  "/Images/kia2.jpg",
  "/Images/kia3.jpg",
  "/Images/lockout.jpg",
  "/Images/management.jpg",
  "/Images/recovery.jpg",
  "/Images/road.jpg",
  "/Images/servicio.jpg",
  "/Images/servicio.png",
  "/Images/towing.jpg",
];

const videos = [
  "https://kiouasep27008e5e7a244f70b5f0e84199ca9be3191418-dev.s3.us-east-1.amazonaws.com/public/video1.mp4",
  "https://kiouasep27008e5e7a244f70b5f0e84199ca9be3191418-dev.s3.us-east-1.amazonaws.com/public/video2.mp4",
  "https://kiouasep27008e5e7a244f70b5f0e84199ca9be3191418-dev.s3.us-east-1.amazonaws.com/public/video3.mp4",
  "https://kiouasep27008e5e7a244f70b5f0e84199ca9be3191418-dev.s3.us-east-1.amazonaws.com/public/video4.mp4",
  "https://kiouasep27008e5e7a244f70b5f0e84199ca9be3191418-dev.s3.us-east-1.amazonaws.com/public/video5.mp4",
  "https://kiouasep27008e5e7a244f70b5f0e84199ca9be3191418-dev.s3.us-east-1.amazonaws.com/public/video6.mp4",
];

const repossessions = [
  "https://kiouasep27008e5e7a244f70b5f0e84199ca9be3191418-dev.s3.us-east-1.amazonaws.com/public/repo1.mp4",
  "https://kiouasep27008e5e7a244f70b5f0e84199ca9be3191418-dev.s3.us-east-1.amazonaws.com/public/repo2.mp4",
  "https://kiouasep27008e5e7a244f70b5f0e84199ca9be3191418-dev.s3.us-east-1.amazonaws.com/public/repo3.mp4",
  "https://kiouasep27008e5e7a244f70b5f0e84199ca9be3191418-dev.s3.us-east-1.amazonaws.com/public/repo4.mp4",
];

const ITEMS_PER_PAGE = 6;

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState("images");
  const [modalSrc, setModalSrc] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [page, setPage] = useState(1);

  const handleOpenModal = (src, type) => {
    setModalSrc(src);
    setModalType(type);
  };

  const closeModal = () => {
    setModalSrc(null);
    setModalType(null);
  };

  const getCurrentItems = () => {
    const list =
      selectedTab === "images"
        ? images
        : selectedTab === "videos"
        ? videos
        : repossessions;

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return list.slice(startIndex, endIndex);
  };

  const totalPages = () => {
    const list =
      selectedTab === "images"
        ? images
        : selectedTab === "videos"
        ? videos
        : repossessions;
    return Math.ceil(list.length / ITEMS_PER_PAGE);
  };

  const renderGrid = (items, type) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="cursor-pointer" onClick={() => handleOpenModal(item, type)}>
          {type === "image" ? (
            <div
              className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl"
              style={{ backgroundImage: `url(${item})` }}
            />
          ) : (
            <video className="w-full aspect-video rounded-xl" muted>
              <source src={item} type="video/mp4" />
            </video>
          )}
        </div>
      ))}
    </div>
  );

  const currentItems = getCurrentItems();
  const currentType = selectedTab === "images" ? "image" : "video";

  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-4 sm:px-8 md:px-12 py-8">
        <div className="max-w-screen-xl w-full">
          <h1 className="text-3xl font-bold text-[#161412] mb-4">Gallery</h1>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            {[
              ["images", "Images"],
              ["videos", "Videos"],
              ["repos", "Repossessions"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => {
                  setSelectedTab(value);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                  selectedTab === value
                    ? "bg-[#161412] text-white border-[#161412]"
                    : "bg-white text-[#161412] border-[#ccc]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {renderGrid(currentItems, currentType)}

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages() }, (_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx + 1)}
                className={`px-4 py-2 text-sm rounded-full ${
                  page === idx + 1
                    ? "bg-[#161412] text-white"
                    : "bg-[#f4f2f1] text-[#161412]"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Modal */}
        {modalSrc && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="relative bg-white rounded-lg max-w-4xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-black text-xl font-bold"
                onClick={closeModal}
              >
                ×
              </button>
              {modalType === "image" ? (
                <img src={modalSrc} alt="Preview" className="w-full h-auto rounded-md" />
              ) : (
                <video
                  src={modalSrc}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-md"
                />
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Gallery;