import { useState } from "react";
import "./ImageForm.css";

const ImageForm = ({ closeModal }) => {
  const [postImage, setPostImage] = useState({ title: "", file: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setPostImage({ ...postImage, [e.target.name]: e.target.value });
  };

  const handleUploads = async () => {
    try {
      setPostImage({ title: "", file: "" });
      console.log(postImage)
    } catch {
      console.log("Error with uploading");
    }
  };

  return (
    <div className="image-form-section">
      <form className="image-form-container" onSubmit={handleUploads}>
        <div className="form-close-btn">
          <button className="close-button" onClick={() => closeModal(true)}>
            {" "}
            X{" "}
          </button>
        </div>
        <h1>Upload image</h1>
        <div className="form-control">
          <label htmlFor="title" />
          <input
            type="text"
            className="form-input"
            placeholder="Title of  image"
            name="title"
            value={postImage.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="file" />
          <input
            type="file"
            className="form-input-file"
            name="file"
            value={postImage.file}
            onChange={handleChange}
            required
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
