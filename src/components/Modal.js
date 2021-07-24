import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { 
    y: "200px", 
    opacity: 1,
    transition: { delay: 0.5 }
  },
}

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence>
      { showModal && (
        <motion.div className=" fixed top-0 left-0 w-full h-full bg-gray-900 z-10"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className=" max-w-[400px] mx-auto bg-white rounded-lg text-center"
            variants={modal}
          >
            <p className="text-gray-600 border-gray-600 ">Want to make another Pizza?</p>
            <Link to="/">
              <button className="text-gray-600 font-bold mt-[20px]">Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal;