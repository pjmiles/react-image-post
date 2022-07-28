import { useState, useEffect } from "react";
// import DisplayImage from "../display/DisplayImage";
import "./Header.css";
// import { FaSearch } from "react-icons/fa";
import ImageForm from "../form/ImageForm";
import axiosInstance from "../api/axios";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [mount, setMount] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };

  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchPictures = async () => {
    try {
       await axiosInstance.get(`${search}`);
      setSearch(search);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (!mount) {
      setMount(true);
      searchPictures();
    }
  }, [searchPictures, mount]);

  return (
    <>
      <div className="header">
        <h2>Images</h2>
        <div className="header-input-container">
          {/* <FaSearch className="search-icon" /> */}
          <input
            type="text"
            className="header-input"
            placeholder="search here"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="header-upload-btn">
          <button className="upload-btn" onClick={() => handleOpen()}>
            Upload Image
          </button>
        </div>
      </div>
      {openModal && <ImageForm closeModal={setOpenModal} />}
    </>
  );
};

export default Header;
