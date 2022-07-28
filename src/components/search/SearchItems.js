import DisplayImage from '../display/DisplayImage'
import "./Search.css";

const SearchItems = ({ filteredImage }) => {

const filtered = filteredImage.map(image => <DisplayImage key={image.title} image={image}/>)
  return (
    <>
    <div className="search-items">
        {filtered}
    </div>
    </>
    // <div className="search">
    //   <input
    //     type="text"
    //     placeholder="search"
    //     className="search-input"
    //     // value={search}
    //     // onChange={handleSearch}
    //   />
    // </div>
  );
};

export default SearchItems;
