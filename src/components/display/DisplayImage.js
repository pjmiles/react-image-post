import axiosInstance from "../api/axios";
import { useState, useEffect } from "react";
import "./DisplayImage.css";

const DisplayImage = () => {
  const [images, setImages] = useState([]);
  // const [showMore, setShowMore] = useState(5);

  useEffect(() => {
    const showImage = async () => {
      try {
        const res = await axiosInstance.get();
        setImages(res.data.results);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    showImage();
  }, []);

  const handleDelete = async (id) => {
    try {
      const result = await axiosInstance.delete(id);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = async () => {
    // try {
    //   const next = await axiosInstance.get("/")
    //   setShowMore(next.data.results)
    //   console.log(setShowMore)
    // } catch (error) {
    //   console.log(error)
    // }
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
                  <button onClick={() => handleDelete()}>delete</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="loadmore">
          <button onClick={() => loadMore()}>LoadMore</button>
        </div>
      </div>
    </>
  );
};

export default DisplayImage;
