"use client";
import React, { useState, useEffect } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const GalleryLightbox = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track the selected image index

  const handleImageClick = (image: any, index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };
  const galleryImages = [
    "https://unsplash.it/900",
    "https://unsplash.it/1000",
    "https://unsplash.it/1100",
    "https://unsplash.it/1200",
    "https://unsplash.it/500",
    "https://unsplash.it/600",
    "https://unsplash.it/700",
    "https://unsplash.it/800",
    "https://unsplash.it/900",
    "https://unsplash.it/1000",
    "https://unsplash.it/1100",
    "https://unsplash.it/1200",
  ];

  const goLeft = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(galleryImages.length - 1);
    }
  };

  const goRight = () => {
    if (selectedImageIndex < galleryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    } else {
      setSelectedImageIndex(0);
    }
  };

  return (
    <>
      <div className="bg-white min-h-screen lg:p-5 p-7">
        <div className="text-center mb-5 text-2xl">Gallery</div>
        <div
          className={`relative grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 overflow-hidden rounded-md   ${
            modalOpen && "blur-lg pointer-events-none "
          }`}
        >
          {galleryImages.map((Image: any, index: number) => (
            <img
              className="rounded-md transform hover:scale-105 transition-transform duration-300 ease-in cursor-pointer "
              key={index}
              onClick={() => {
                handleImageClick(Image, index);
              }}
              src={Image}
              alt=""
            />
          ))}
        </div>
      </div>
      <div
        className={`justify-center items-center fixed top-[30%] left-[0%] lg:top-[25%] lg:left-[16%]  ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div className="w-[100vw] h-[40vh] lg:w-[70vw] lg:h-[60vh] flex items-center gap-3 ">
          <button
            className="bg-gray-500 text-white  h-fit p-2 rounded-full"
            onClick={goLeft}
          >
            <BiChevronLeft size={24} />
          </button>
          <div className="h-[100%] w-[100%]">
            <div className="flex justify-between bg-white">
              <div className="px-4 py-1">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>
              <button
                className="px-4 py-1"
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            <img
              className="h-[100%] w-[100%] object-cover p-2 bg-white"
              src={galleryImages[selectedImageIndex]}
              alt=""
            />
          </div>
          <button
            className="bg-gray-500 text-white h-fit p-2 rounded-full"
            onClick={goRight}
          >
            <BiChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default GalleryLightbox;
