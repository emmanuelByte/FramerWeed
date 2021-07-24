import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: 5,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};
const users = ["maliq", "shol", "akanmu", "doyin", "maryam"];
const Home = () => {
  return (
    <motion.div
      className="  pb-[10px] mb-[10px] border-b-2 border-gray-400 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="w-2/3 ">
        <h1 className="text-gray-600 text-4xl">List of all Users</h1>
        <ul>
          {users.map(
            (user , idx) => (
              <li key={idx}>{user}</li>
            )
          )}
          
        </ul>
        {/* <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction
              </th>
              <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                Status
              </th>
              <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
        </table> */}
      </div>
    </motion.div>
  );
};

export default Home;
