import { imageURL } from "../api/axios";
import { useState, useEffect } from "react";
import "./DisplayImage.css";

const DisplayImage = () => {
  const [images, setImages] = useState([]);

  const showImage = async () => {
    try {
    const res = await imageURL
      setImages(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showImage();
  }, []);

  return (
    <div className="display-section">
      <div className="image-section">
        <div className="image-container">
          {images.map((image) => {
            return (
              <div className="image-control">
                <img src={image.image} alt={image.name} className="image" />
                <p className="image-title">{image.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayImage;
