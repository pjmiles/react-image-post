
import "./ImageForm.css";

const ImageForm = ({ closeModal }) => {
  return (
    <div className="image-form-section">
      <form className="image-form-container">
        <div className="form-close-btn">
          <button className="close-button" onClick={() => closeModal(true)}> X </button>
        </div>
        <h1>Upload image</h1>
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
