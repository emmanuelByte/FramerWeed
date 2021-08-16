import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
const svgVarients = {
  initial: {
    rotate: -180,
    // rotateX: 0
  },
  animate: {
    rotate: 0,
    // rotateX: [0, 180, 0],
    transition: { duration: 1 },
  },
};
const pathVarients = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <header>
      <motion.div
        drag
        // dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
      >
        <Link to="/" className="logo">
          <motion.svg
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            variants={svgVarients}
            initial="initial"
            animate="animate"
          >
            <motion.path
              variants={pathVarients}
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <motion.path
              variants={pathVarients}
              fill="none"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            />
          </motion.svg>
        </Link>
      </motion.div>

      <motion.div
        className="title"
        animate={{
          y: -10,
        }}
        initial={{
          y: -260,
        }}
        transition={{
          delay: 0.75,
          type: "spring",
          // duration: 0.75,
          // stiffness: 50,
        }}
      >
        <h1>WEED ARENA</h1>
      </motion.div>
    </header>
  );
};

export default Header;
