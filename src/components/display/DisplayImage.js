import axiosInstance from "../api/axios";
import { useState, useEffect } from "react";
import "./DisplayImage.css";
import Loading from "../loading/Loding";

const DisplayImage = ({ images, setImages, err, setErr }) => {
  const [perPage, setPerPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageMsg, setImageMsg] = useState("");

  useEffect(() => {
    const showImage = async () => {
      try {
        const { data } = await axiosInstance.get(`?&offset=${perPage}`);
        console.log(data);
        setImages(data.results);
        if (!data.next) {
          setImageMsg("No more paginated images");
        }
        setIsLoaded(true);
      } catch {
        setErr("Error showing images");
        setIsLoaded(true);
      }
    };
    showImage();
  }, [setImages, perPage, setErr, setIsLoaded]);

  const loadMore = () => {
    setPerPage((page) => page + 5); //to add 5 pictures more
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
            <div className="image-message">{imageMsg}</div>
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
          <button onClick={loadMore}>Loadmore</button>
        </div>
      </div>
    </>
  );
};

export default DisplayImage;
