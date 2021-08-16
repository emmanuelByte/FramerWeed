import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Container from "./general/Container";
import Button from "./general/Button";
import Loader from "./Loader";
// const ButtonVarients = {
//   initial: {},
//   // animate: {
//   //   x: 0,
//   //   transition: {
//   //     yoyo: Infinity,
//   //   },
//   // },
//   hover: {
//     scale: 1.1,
//     textShadow: "0px 0px 8px white",
//     transition: {
//       yoyo: Infinity,
//       duration: 0.5,
//     },
//   },
//   tap: {
//     boxShadow: "0px 0px 8px #fff",
//   },
// };
const containerVariants = {
  animate: {
    // marginTop: "200px",
    opacity: 1,
    rotateX: 0,
    scale: 1,
    // rotateZ: 0,
    // rotateY: 0,
    transition: {
      delay: 0.75,
      duration: 1.2,
    },
  },
  initial: {
    scale: 0,

    rotateX: 180,
    // rotateZ: 180,
    opacity: 0,
    // rotateY: 180,
  },
  exit: {
    x: "-100vw",
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};
const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      animate="animate"
      initial="initial"
      className="home container"
      exit="exit"
    >
      <h2
      // animate={{
      //   fontSize: "50px",
      //   color: "#ff2994",
      //   x: 100,
      //   y: -100,
      // }}
      >
        Welcome to Weed Joint
      </h2>
      <Link to="/base">
        <Button
          x={0}
          // variants={ButtonVarients}
          // // animate="animate"
          // initial="initial"
          // whileHover="hover"
          // whileTap="tap"
        >
          Get Weed
        </Button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
