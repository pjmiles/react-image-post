import { useState } from "react";
import axiosInstance from "../api/axios";
import "./ImageForm.css";

const ImageForm = ({ closeModal }) => {
  const [userDetails, setUserDetails] = useState({ title: "", image: null });
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    e.preventDefault();
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setUserDetails({...userDetails, image: e.target.files[0]})
    console.log(userDetails.image)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await axiosInstance.post("/", userDetails, {
        headers: {
          'content-type': 'multipart/form-data',
        }
      });
      setMessage("Upload Successfull!")
      console.log(data);
      console.log(userDetails.image)

    } catch {
      console.log("Error with uploading");
      setMessage("Error Uploading Image")
    }
  };

  return (
    <div className="image-form-section">
      <form className="image-form-container" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="form-close-btn">
          <button className="close-button" onClick={() => closeModal(false)}>
            {" "}
            X{" "}
          </button>
          <div className="form-message">{message}</div>
        </div>
        <h1>Upload image</h1>
        <div className="form-control">
          <label htmlFor="title" />
          <input
            type="text"
            className="form-input"
            placeholder="Title of image"
            name="title"
            value={userDetails.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="file" />
          <input
            type="file"
            className="form-input-file"
            name="image"
            onChange={handleImage}
            accept="image/png, image/jpeg"
          />
        </div>

        <div className="submit-btn">
          <button className="btn">Upload</button>
        </div>
      </form>
    </div>
  );
};

export default ImageForm;
