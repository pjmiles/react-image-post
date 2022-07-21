import { useState } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import ImageForm from "../form/ImageForm";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="header">
        <h2>Images</h2>
        <div className="header-conatiner">
          <div className="header-input-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="header-input"
              placeholder="search here"
              id=""
            />
          </div>
        </div>
        <div className="header-upload-btn">
          <button className="upload-btn" onClick={() => handleOpen()}>
            Upload Image
          </button>
        </div>
      </div>
      {openModal && <ImageForm />}
    </>
  );
};

export default Header;
