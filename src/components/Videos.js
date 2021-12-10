import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const videosVariants = {
    from: {
        opacity:0,
        scale:0
    },
    to: {
        opacity:1,
        scale:1,
        transition: { type:"tween", duration:.6}
    }
}

const Videos = () => {
    return ( 
        <motion.div className="videos"
        variants = { videosVariants }
        initial = 'from'
        animate = 'to'
        >
            <h1>Videos</h1>
            <div className="videos-container">
                <div className="videos-wrapper">
                    <div className="play-video">
                        <img src={ require('../assets/memoji-1.png').default} alt="dashboard video responsive people play" />
                        <div className="playBtn-box">
                            <div className="play-btn">
                                <FontAwesomeIcon className="thisPlay-btn" icon={ faPlay } />
                            </div>
                        </div>
                    </div>
                    <div className="play-video">
                        <img src={ require('../assets/memoji-2.png').default} alt="dashboard video responsive people play" />
                        <div className="playBtn-box">
                            <div className="play-btn">
                                <FontAwesomeIcon className="thisPlay-btn" icon={ faPlay } />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="videos-wrapper">
                    <div className="play-video">
                        <img src={ require('../assets/memoji-3.png').default} alt="dashboard video responsive people play" />
                        <div className="playBtn-box">
                            <div className="play-btn">
                                <FontAwesomeIcon className="thisPlay-btn" icon={ faPlay } />
                            </div>
                        </div>
                    </div>
                    <div className="play-video">
                        <img src={ require('../assets/memoji-4.png').default} alt="dashboard video responsive people play" />
                        <div className="playBtn-box">
                            <div className="play-btn">
                                <FontAwesomeIcon className="thisPlay-btn" icon={ faPlay } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Videos;