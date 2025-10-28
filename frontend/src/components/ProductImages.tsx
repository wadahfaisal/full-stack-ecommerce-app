import { useState, useEffect } from "react";
import { ProductImagesProps as Props } from "../types/propsTypes";

const ProductImages = ({ images }: Props) => {
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (images) {
      setMainImage(images[0]);
    }
  }, [images]);

  return (
    <section className="product-images">
      {mainImage && <img src={mainImage} alt="main" className="main" />}
      <div className="gallery">
        {images?.map((img, index) => {
          return (
            <img
              // src={img}
              src={img}
              key={index}
              onClick={() => setMainImage(images[index])}
              className={img === mainImage ? "active" : ""}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
