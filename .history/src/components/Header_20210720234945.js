import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const buttonVariants = {
  show: {
    y: [0, -40],
    x: 0,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
      ease: 'easeOut'
    },
  },
};

const Header = () => {
  return (
    <header className="flex p-14  items-center">
      <motion.div
        className="logo"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7}
      >
        <motion.svg
          className="w-14 overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className=" flex-grow ml-6 text-xs"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1 className="border-b-2 pb-4 text-5xl">User Listing UI</h1>
        <motion.button variants={buttonVariants} whileHover="hover"
        animate="show"
        >
          Add User
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Header;
