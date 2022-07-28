import { useState } from "react";
import SearchItems from "./SearchItems";

const Search = ({ images }) => {
  const [searchField, setSerachField] = useState("");

  const filteredImages = images.filter((image) => {
    return image.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSerachField(e.target.value);
  };

  const searchList = () => {
    return (
      <>
        <SearchItems filteredImages={filteredImages} />
      </>
    );
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Search image" onchange={handleChange} />
      </div>
      {searchList()}
    </>
  );
};

export default Search;
