"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const imageUrls = [
  "/assets/1.png",
  "/assets/1.png",
  "/assets/1.png",
  "/assets/1.png",
];

const items = imageUrls.map((url) => ({
  original: url,
  thumbnail: url,
  renderItem: () => (
    <PhotoProvider>
      <PhotoView src={url}>
        <img
          src={url}
          alt="Drift sneaker"
          style={{ width: "100%", borderRadius: 8 }}
        />
      </PhotoView>
    </PhotoProvider>
  ),
}));
function ProductDetails() {
  return (
    <div className="w-full h-[1404px] px-4 py-8 md:px-16 md:py-20">
      <div className="w-full h-full flex flex-col md:flex-row justify-center gap-y-20 md:gap-y-0">
        <div className="w-[350px] md:w-[500px] mx-auto">
          <ImageGallery items={items} showPlayButton={false} />{" "}
        </div>

        <div className="w-full h-[1722px] md:w-[50%] md:h-full bg-yellow-400">
          <p>Colours</p>
          <p>Sizes</p>
          <p>Product Price</p>
          <p>Product Name</p>
          <p>Rating Stars</p>
          <button>Pre Order</button>
          <p>Details</p>
          <p>Manufacturing Details</p>
          <p>Shipping Details</p>
          <p>Return Policy</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
