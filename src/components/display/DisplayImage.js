import axiosInstance from "../api/axios";
import { useState, useEffect } from "react";
import "./DisplayImage.css";

let perPage = 0;

const DisplayImage = ({ images, setImages }) => {

  const showImage = async () => {
    try {
      const res = await axiosInstance.get(`?&offset=${perPage}`);
      setImages(res.data.results);
    } catch (error) {
      console.log(error);
    }
    perPage += 5;
  };

  useEffect(() => {
    showImage();
  }, []);

  const loadMore = () => {
    showImage();
  };

  const handleDelete = async (id) => {
    try {
      const result = await axiosInstance.delete(`${id}`);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="display-section">
        <div className="image-section">
          <div className="image-container">
            {images.map((image) => {
              return (
                <div className="image-control" key={image.id}>
                  <img src={image.image} alt={image.name} className="image" />
                  <p className="image-title">{image.title}</p>
                  <div className="delete-section">
                    <button className="delete" onClick={() => handleDelete()}>
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="loadmore">
          <button onClick={loadMore}>Loadmore</button>
        </div>
      </div>
    </>
  );
};

export default DisplayImage;
