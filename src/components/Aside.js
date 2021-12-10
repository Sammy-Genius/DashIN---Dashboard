import { faComments, faHeart, faHome, faPlay, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Aside = ( { toggleModal }) => {
    return ( 
        <aside>
            <div className="aside-wrapper">
                <div className="logo">
                    <h1>H</h1>
                </div>
                <div className="aside-menu">
                    <Link to="/">
                        <FontAwesomeIcon icon={ faHome } />
                    </Link>
                    <Link to="/Likes">
                        <FontAwesomeIcon icon={ faHeart } />
                    </Link>
                    <span className="share" onClick = { toggleModal }>
                        <FontAwesomeIcon icon={ faShareAlt } />
                    </span>
                    <Link to="/Messages">
                        <FontAwesomeIcon icon={ faComments } />
                    </Link>
                    <Link to="/Videos">
                        <FontAwesomeIcon icon={ faPlay } />
                    </Link>
                </div>
                <div className="img-box">
                    <div className="image-one">
                        <img src={require('../assets/img-3.png').default} alt="influencer dashboard" />
                    </div>
                </div>
            </div>
        </aside>
     );
}
 
export default Aside;

