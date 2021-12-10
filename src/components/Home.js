import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChartBar, faChartLine, faChevronDown, faCommentAlt, faEllipsisV, faMicrochip, faStar, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';

const homeVariants = {
    from: {
        opacity:0,
        scale:0,
    },
    to: {
        opacity:1,
        scale:1,
        transition: { type:"tween", duration:.6}
    }
}

const Home = () => {
    return ( 
        <motion.div className="home"
        variants = { homeVariants }
        initial = 'from'
        animate = 'to'
        >
            <div className="container-1">
                <div className="stats-heading">
                    <h1>Your Stats</h1>
                    <div>
                        <p>More details</p>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="account-box">
                        <div className="account-details">
                            <div className="potential">
                                <h2>Account Details</h2>
                                <div className="percentage">
                                    <p>58%</p>
                                    <p>POTENTIAL</p>
                                </div>
                            </div>
                            <div className="premium">
                                <div className="premium-account">
                                    <div className="star-icon"><FontAwesomeIcon className="star" icon={ faStar }/></div>
                                    <p>Premium <br /> Account</p>
                                </div>
                                <div className="debit-card">
                                    <p className="align-account">ACCOUNT</p>
                                    <div className="number">
                                        <p>****</p>
                                        <p>3253</p>
                                    </div>
                                    <div className="chip-icon"><FontAwesomeIcon className="chip" icon={ faMicrochip }/></div>
                                </div>
                            </div>
                        </div>
                        <div className="sm-activity">
                            <div className="sm-wrapper">
                                <div className="social-media">
                                    <h3>Viewers</h3>
                                    <div className="graph-1"><FontAwesomeIcon icon={ faChartLine }/></div>
                                    <div className="activity">
                                        <p>65,031 views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm-wrapper">
                                <div className="social-media">
                                    <h3>Engagement</h3>
                                    <div className="graph-2"><FontAwesomeIcon icon={ faChartBar }/></div>
                                    <div className="activity">
                                        <p>25,214 focused</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="actions-box">
                        <div className = "shapes">
                            <h2>Actions Performed</h2>
                            <div className="actions">
                                <li>< span className="spacing"><FontAwesomeIcon className="green" icon={ faCommentAlt }/></span>3 Posts Added</li>
                                <li>< span className="spacing"><FontAwesomeIcon className="pink" icon={ faStar }/></span>Premium Plan Bought </li>
                                <li>< span className="spacing"><FontAwesomeIcon icon={ faStepForward }/></span>2 Videos Added</li>
                                <li>< span className="spacing"><FontAwesomeIcon className="green" icon={ faChevronDown }/></span>Sponsorship Signed</li>
                            </div>
                        </div>
                        <div className="shapes">
                            <img className="shapes-img" src={ require("../assets/img-2.png").default} alt="mobile app sync" />
                            <h3 className="actions-text">Mobile App Sync</h3>
                        </div>
                        <div className="shapes">
                            <img className="shapes-img" src={ require("../assets/img-1.png").default} alt="mobile app instagram gram" />
                            <span>#11</span>
                            <h3 className="actions-text">Influence Ranking</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-2">
                <div className="container2-wrapper">
                    <div className="monthly">
                        <div className="monthly-wrapper">
                            <div className="hello">
                                <p>Hello, Sammy</p>
                                <span><FontAwesomeIcon icon={ faEllipsisV } /></span>
                            </div>
                            <div className="img-wrapper">
                                <div className="main-img">
                                    <img src={ require("../assets/img-4.png").default } alt="online hello dashboard" />
                                </div>
                            </div>
                        </div>
                        <div className="goal">
                            <div className="goal-wrapper">
                                <div className="goal-percentage">53%</div>
                                <p>Monthly <br /> Goal</p>
                            </div>
                            <h5>350 <br /> Points</h5>
                        </div>
                    </div>
                    <div className="points">
                        <div className="points-wrapper">
                            <div className="points-container">
                                <div className="points-box">
                                    <div className="point-icon"><FontAwesomeIcon icon={ faInstagram } /></div>
                                    <div className="point-icon"><FontAwesomeIcon icon={ faTwitter } /></div>
                                    <div className="point-icon"><FontAwesomeIcon icon={ faFacebookF } /></div>
                                </div>
                                <div className="points-box">
                                    <div>Instagram</div>
                                    <div>Twitter</div>
                                    <div>Facebook</div>
                                </div>
                                <div className="points-box">
                                    <div>1,230 Points</div>
                                    <div>1,230 Points</div>
                                    <div>1,230 Points</div>
                                </div>
                            </div>
                            <div className="sponsor">LOOK FOR SPONSORSHIP</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Home;
