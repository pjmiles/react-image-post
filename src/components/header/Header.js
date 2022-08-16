import { useState } from "react";
import "./Header.css";
import ImageForm from "../form/ImageForm";
import axiosInstance from "../api/axios";

const Header = ({ setImages, setErr }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const [search, setSearch] = useState("");

  const searchPictures = async () => {
    try {
      const { data } = await axiosInstance.get(`?search=${search}`);
      if (!data.count) {
        setErr("Image not found"); // if search not found
      } else {
        setErr("");
      }
      setImages(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    searchPictures();
  };

  return (
    <>
      <div className="header">
        <h1>Images</h1>
        <div className="header-input-container">
          <input
            type="text"
            className="header-input"
            placeholder="search here"
            value={search}
            onChange={handleSearchChange}
          />
          {/* <button className="search-btn" onClick={searchPictures}>
            Search
          </button> */}
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
