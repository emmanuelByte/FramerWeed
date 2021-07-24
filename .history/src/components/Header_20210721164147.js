import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    y: [0, -20],
    x: 0,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
      ease: "easeOut",
    },
  },
};

const Header = () => {
  return (
    <header className="flex p-7 w-screen justify-between  items-center">
      {/* <motion.div
        className="logo"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7}
      >
      
      </motion.div> */}
      <motion.div
        className=" flex justify-between w-full ml-6 text-xs"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1 className=" pb-4 text-5xl">User Listing UI</h1>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          animate="show"
          className="text-xl border-2 px-3 rounded-2xl active:bg-gray-200"
        >
          <Link to="/edit">Add User</Link>
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Header;
