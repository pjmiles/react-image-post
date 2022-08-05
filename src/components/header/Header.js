import { useState } from "react";
import "./Header.css";
import ImageForm from "../form/ImageForm";
import axiosInstance from "../api/axios";

const Header = ({ setImages }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase().toString());
  };

  const searchPictures = async () => {
    try {
      const res = await axiosInstance.get(`?search=${search}`);
      setImages(res.data.results);
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };


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
          <button className="search-btn" onClick={searchPictures}>Search</button>
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
