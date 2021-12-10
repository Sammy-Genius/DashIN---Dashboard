import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from 'framer-motion';

const modalVariants = {
    from: {
        opacity:0,
        scale:0,
    },
    to: {
        opacity:1,
        scale:1,
        transition: {
            type: 'tween',
            duration: .6,
            when: 'beforeChildren',
            staggerChildren:.5
        }
    },
    exit: {
        opacity:0,
        scale:0,
        transition: {
            type: 'tween',
            duration: .6,
            when: 'afterChildren',
            staggerChildren:.5
        }
    }
}

const Modal = ({ toggleModal, modal }) => {
    return (
        <AnimatePresence>
            { modal && (
                <motion.div className="modal" 
                variants={ modalVariants }
                initial="from"
                animate="to"
                exit="exit"
                >
                    <div className="backdrop">
                        <motion.div className="modal-content" variants={ modalVariants }>
                            <div className="modal-wrapper">
                                <h1>Share with...</h1>
                                <h6>My Contacts</h6>
                                <div className="persons">
                                    <div className="contact-list">
                                        <div className="person-img lightPink-color">
                                            <img src={ require('../assets/img-7.png').default } alt="share dashboard contact list people persons" />
                                        </div>
                                        <h5>Bill Gates</h5>
                                    </div>
                                    <div className="contact-list">
                                        <div className="person-img lightGreen-color">
                                            <img src={ require('../assets/img-5.png').default } alt="share dashboard contact list people persons" />
                                        </div>
                                        <h5>Elon Musk</h5>
                                    </div>
                                    <div className="contact-list">
                                        <div className="person-img">
                                            <img src={ require('../assets/img-6.png').default } alt="share dashboard contact list people persons" />
                                        </div>
                                        <h5>Mark Zuckerberg</h5>
                                    </div>
                                </div>
                                <div className="share-socials">
                                    <span><FontAwesomeIcon icon={ faTwitter } /></span>
                                    <span><FontAwesomeIcon icon={ faInstagram } /></span>
                                    <span><FontAwesomeIcon icon={ faFacebookF } /></span>
                                    <span><FontAwesomeIcon icon={ faWhatsapp } /></span>
                                </div>
                            </div>
                        </motion.div>
                            <motion.div className="close-modal" onClick = { toggleModal } variants = { modalVariants }>
                                <FontAwesomeIcon className="close-icon" icon={ faTimes } />
                            </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
     );
}
 
export default Modal;