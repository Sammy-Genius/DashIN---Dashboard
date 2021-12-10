import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return ( 
        <header>
            <div className="logo-forMobile">
                <h1>H</h1>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search..."/>
                <span>
                    <FontAwesomeIcon className="search" icon={ faSearch } />
                </span>
            </div>
            <div className="select">
                <select>
                    <option value="Account">Account Settings</option>
                </select>
            </div>
        </header>
     );
}
 
export default Header;
