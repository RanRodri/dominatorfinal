import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Gallery extends Component {
  state = {
    selectedImage: null,
  };

  openModal = (image) => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { selectedImage } = this.state;

    const images = [
      "/Images/about.jpeg",
      "/Images/about1.jpeg",
      "/Images/about2.jpeg",
      "/Images/delivery.jpeg",
      "/Images/emergenci.jpeg",
      "/Images/IMG_2745.jpeg",
      "/Images/IMG_3076.jpeg",
      "/Images/IMG_6054.jpeg",
      "/Images/IMG_6141.jpeg",
      "/Images/IMG_6890.jpeg",
      "/Images/IMG_6907.jpeg",
      "/Images/jump.jpeg",
      "/Images/lockout.jpeg",
      "/Images/management.jpeg",
      "/Images/recovery.jpeg",
      "/Images/road.jpeg",
      "/Images/towing.jpeg",
    ];

    return (
      <>
        <Header />
        <main className="flex flex-col items-center px-4 sm:px-8 md:px-12 py-8">
          <div className="max-w-screen-xl w-full">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[#161412]">Gallery</h1>
              <p className="text-sm text-[#81756a] mt-2">
                Explore our work and see how we handle your towing needs with precision and care.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div key={index} className="cursor-pointer" onClick={() => this.openModal(image)}>
                  <div
                    className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <button className="rounded-full bg-[#f4f2f1] text-[#161412] font-bold text-sm px-6 py-2">
                View More
              </button>
            </div>
          </div>

          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
              onClick={this.closeModal}
            >
              <div
                className="relative bg-white rounded-lg max-w-4xl w-full p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-black text-xl font-bold"
                  onClick={this.closeModal}
                >
                  ×
                </button>
                <img src={selectedImage} alt="Expanded" className="w-full h-auto rounded-md" />
              </div>
            </div>
          )}
        </main>
        <Footer />
      </>
    );
  }
}

export default Gallery;
