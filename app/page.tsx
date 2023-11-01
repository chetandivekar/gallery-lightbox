"use client";
import GalleryLightbox from "@/components/Gallery";
import React from "react";
import { Gallery } from "gallery-lightbox";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Gallery />
      {/* <GalleryLightbox /> */}
    </>
  );
};

export default Home;
