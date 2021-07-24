import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";



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

const Header = ({ history }) => {
  console.log(history.location.pathname);
  return (
    <header className="flex p-7 w-full justify-between  items-center">
      
      <motion.div
        className=" flex justify-between w-full ml-6 text-xs"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <a href="/" className=" pb-4 text-5xl">
          User Listing UI
        </a>
        <motion.a
          href="/adduser"
          variants={buttonVariants}
          whileHover="hover"
          animate={`${history.location.pathname === "/adduser" ? "" : "show"}`}
          className="text-xl border-2 px-3 rounded-2xl active:bg-gray-200 flex items-center"
        >
          Add User
        </motion.a>
      </motion.div>
    </header>
  );
};

export default withRouter(Header);
