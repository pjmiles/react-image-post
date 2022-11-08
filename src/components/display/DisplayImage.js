import axiosInstance from "../api/axios";
import { useState, useEffect } from "react";
import "./DisplayImage.css";
import Loading from "../loading/Loding";
import axios from "axios";
import { baseURL } from "../api/axios";

const DisplayImage = ({ images, setImages, err, setErr }) => {
  const [pages, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [imageMsg, setImageMsg] = useState("");

  useEffect(() => {
    const showImage = async () => {
      try {
        const { data } = await axios.get(`${baseURL}?&offset=${pages}`);
        console.log(data);
        setImages(data.results);
        setTotalImages(data.totalImages);
        // if (!data.next) {
        //   setImageMsg("End of the page");
        // }
        setIsLoaded(true);
      } catch {
        setErr("Error showing images");
        setIsLoaded(true);
      }
    };
    showImage();
  }, [setImages, pages, setErr, setIsLoaded]);

  const handleNext = () => {
    if (pages === totalImages) {
      return;
    } else {
      setPage((page) => page + 1); //to add more pictures
    }
  };

  const handlePrevious = () => {
    if (pages === 1) {
      return;
    } else {
      setPage((page) => page - 1); // to go back to previous page
    }
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
          {err ? (
            <div className="error-container">
              <div className="error-display">{err}</div>
            </div>
          ) : (
            // <div className="image-message-container">
            //   <div className="image-message">{imageMsg}</div>
            // </div>
            ""

          )}
          <div className="image-container">
            {isLoaded ? (
              images.map((image) => {
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
              })
            ) : (
              <Loading />
            )}
          </div>
        </div>
        <div className="loadmore">
          <button onClick={handlePrevious} className="handlePrev-btn">
            Prev
          </button>
          <button onClick={handleNext} className="handleNext-btn">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplayImage;
