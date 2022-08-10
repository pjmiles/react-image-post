import axiosInstance from "../api/axios";
import { useState, useEffect } from "react";
import "./DisplayImage.css";

const DisplayImage = ({ images, setImages, err, setErr }) => {
  const [perPage, setPerPage] = useState("");

  useEffect(() => {
    const showImage = async () => {
      try {
        const { data } = await axiosInstance.get(`?&offset=${perPage}`);
        console.log(data)
        setImages(data.results);
        if(!data.next){
          setErr("No more images")
        }
      } catch {
        setErr("Error showing images");
      }
    };
    showImage();
  }, [setImages, perPage, setErr]);

  const loadMore = () => {
    setPerPage((more) => more + 1); //not perfect yet
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
          <div className="error-container">
            <div className="error-display">{err}</div>
          </div>
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
