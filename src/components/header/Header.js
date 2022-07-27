import { useState } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import ImageForm from "../form/ImageForm";
import axiosInstance from "../api/axios";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
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
      const res = await axiosInstance.get(`${search}`);
      setSearch(res.data.results);
    } catch (error) {
      console.log(error)
    }
  };
  
  useEffect(() => {
    searchPictures();
  },[]);


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
              value={search}
              onChange={handleSearch}
            />
          </div>
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
