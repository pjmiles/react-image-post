import './Header.css'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="header">
        <h2>Images</h2>
        <div className="header-conatiner">
            <div className="header-input-container">
                <FaSearch className="search-icon"/>
                <input 
                type="text"
                className="header-input"
                placeholder="search here"
                id=""/>         
            </div>
        </div>
    </div>
  )
}

export default Header