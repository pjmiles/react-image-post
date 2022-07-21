import "./ImageForm.css";

const ImageForm = () => {
  return (
    <div className="image-form-section">
      <form className="image-form-container">
        <h2>Upload image</h2>

        <div className="form-control">
          <label htmlFor="title" />
          <input
            type="text"
            className="form-input"
            placeholder="Title of  image"
          />
        </div>

        <div className="form-control">
          <label htmlFor="file" />
          <input type="file" className="form-input-file" />
        </div>

        <div className="submit-btn">
          <button className="btn">Upload</button>
        </div>
      </form>
    </div>
  );
};

export default ImageForm;
