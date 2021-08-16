import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./general/Button";
const backdrop = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
};
const modal = {
  initial: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: "200px",
    transition: { delay: 0.5 },
  },
};
const Modal = ({ showModal, setShowModal, setPizza }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          animate="animate"
          initial="initial"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to get weed?</p>
            <Link to="/">
              <Button
                x={0}
                onClick={() => {
                  setPizza({ base: "", toppings: [] });
                  setShowModal(false);
                }}
              >
                Start Again
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
