import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";
import UserRow from "./UserRow";



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
const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}
const users = [
  {
    id: '01',
    name: "maliq",
    email: "maliq@gmail.com",
    phone: '08032494874'
  },
  {
    id: '02',
    name: "mary",
    email: "mary@gmail.com",
    phone: '08032494874'
  },
  {
    id: '03',
    name: "doyi",
    email: "doyi@gmail.com",
    phone: '08032494874'
  },      
  {
    id: '04',
    name: "hak",
    email: "hak@gmail.com",
    phone: '08032494874'
  },
];
const Home = () => {
  return (
    <motion.div
      className="  pb-4 mb-4 border-b-2 border-gray-400 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="w-2/3 ">
        <h1 className="text-gray-600 py-6 text-4xl">List of all Users</h1>
        <ul className="pl-4 space-y-3 capitalize ">
          {/* {users.map(
            (user , idx) => (
              <li key={idx}>{user}</li>
            )
          )} */}
          
        </ul>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction
              </th>
              <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className=" px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
            {
              users.map((user) =>(
                <UserRow name={user.name} id={user.id} email={user.email} number={user.phone} />
              ))
            }
          </thead>
        </table>
      </div>
    </motion.div>
  );
};

export default Home;
