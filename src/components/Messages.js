import { faBookmark, faImage, faPaperPlane, faSmile } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopeOpenText, faLink, faMapMarker, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';

const messagesVariants = {
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

const Messages = () => {
    return ( 
        <motion.div className="messages"
        variants = { messagesVariants }
        initial = 'from'
        animate = 'to'
        >
            <div className="message-box-one">
                <div className="box-one-wrapper">
                    <div className="title-box">
                        <span><FontAwesomeIcon className="search-message" icon = { faSearch } /></span>
                        <h1>Messages</h1>
                    </div>
                    <div className="inbox">
                        <div className="inbox-container">
                            <h5>Notifications</h5>
                            <div className="notifs">
                                <div className="chats">
                                        <div className="text-img this-text-img lightPink-color">
                                            <img src={ require('../assets/img-7.png').default} alt="messages dashboard" />
                                        </div>
                                        <div className="text-content">
                                            <h4>Bill Gates</h4>
                                            <p>Hello Sammy, I just deposited  <br />$5million into your account </p>
                                        </div>
                                    <h6>24m</h6>
                                </div>
                                <div className="chats">
                                        <div className="text-img lightGreen-color">
                                            <img src={ require('../assets/img-5.png').default} alt="messages dashboard" />
                                        </div>
                                        <div className="text-content">
                                            <h4>Elon Musk</h4>
                                            <p>I sent you an e-mail about the <br /> $10million project</p>
                                        </div>
                                    <h6>38m</h6>
                                </div>
                                <div className="chats">
                                        <div className="text-img">
                                            <img src={ require('../assets/img-6.png').default} alt="messages dashboard" />
                                        </div>
                                        <div className="text-content">
                                            <h4>Mark Zuckerberg</h4>
                                            <p>Yo bro! You good? We just did  <br />$300million hahaha God is good! </p>
                                        </div>
                                    <h6>1hr</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="message-box-two">
                <div className="chat-box">
                    <div className="chatbox-wrapper">
                        <div className="online">
                            <div className="dp">
                                <img src={ require('../assets/img-6.png').default} alt="messages dashboard" />
                            </div>
                            <div className="online-chat">
                                <h4>Mark Zuckerberg</h4>
                                <p>Online</p>
                            </div>
                        </div>
                        <div className="chat-symbols">
                            <span><FontAwesomeIcon icon={ faTimes} /></span>
                            <span><FontAwesomeIcon icon={ faEnvelopeOpenText } /></span>
                        </div>
                    </div>
                    <div className="type-msg">
                        <div className="type-something">
                            <input className= "type" type="text" placeholder="Type something..." />
                        </div>
                        <div className="send-container">
                            <div className="media-symb">
                                <span><FontAwesomeIcon icon={ faImage } /></span> 
                                <span><FontAwesomeIcon icon={ faBookmark } /></span> 
                                <span><FontAwesomeIcon icon={ faLink } /></span> 
                                <span><FontAwesomeIcon icon={ faMapMarker } /></span> 
                                <span><FontAwesomeIcon icon={ faSmile } /></span> 
                            </div>
                            <div className="send-box">
                                <p>send</p>
                                <span><FontAwesomeIcon icon={ faPaperPlane} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Messages;