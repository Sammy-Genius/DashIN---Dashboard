import { faComments, faHeart, faHome, faPlay, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Nav = ({ toggleModal }) => {
  
    return ( 
      <nav className ="nav" >
        <Link to="/"><FontAwesomeIcon className="icon" icon={ faHome } /></Link>
        <Link to="/Likes"><FontAwesomeIcon className="icon" icon={ faHeart } /></Link>
        <span onClick = { toggleModal }><FontAwesomeIcon className="share-icon" icon={ faShareAlt } /></span>
        <Link to="/Messages"><FontAwesomeIcon className="icon" icon={ faComments } /></Link>
        <Link to="/Videos"><FontAwesomeIcon className="icon" icon={ faPlay } /></Link>
      </nav>
     );
}
 
export default Nav;