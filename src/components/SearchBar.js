import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from 'framer-motion';

const searchVariants = {
    from: {
        opacity:0,
        y:-100,
        scale:0.5
    },
    to: {
        opacity:1,
        y:0,
        scale:1,
        transition: { type: 'tween' }
    },
    exit: {
        opacity:0,
        y:-100,
        scale:0.5,
        transition: { type: 'tween' }
    }
    
}

const SearchBar = ( { onClickSearchBtn, isOpen }) => {
    return ( 
        <AnimatePresence>
            { isOpen && (
                <motion.div className="search-bar"
                variants = { searchVariants }
                initial = 'from'
                animate = 'to'
                exit = 'exit'
                >
                    <span className = "faSearch"><FontAwesomeIcon icon={ faSearch } /></span>
                    <input type="text" placeholder="Search..." />
                    <span onClick = { onClickSearchBtn }><FontAwesomeIcon icon={ faTimes } /></span>
                </motion.div>
            )}
        </AnimatePresence>
     );
}
 
export default SearchBar;