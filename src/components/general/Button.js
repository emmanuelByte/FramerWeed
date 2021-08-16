import { motion } from "framer-motion";
import React from "react";

const Button = ({ children, x, ...props }) => {
  x = !isNaN(x) ? x : -100;
  //   console.log(isNaN(x), x);
  const buttonVarients = {
    animate: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: "120",
        // yoyo for number of frames
      },
    },
    initial: {
      x: x + "vw",
    },
    //   [1,2,3,4,5,3] for keyframes each item means one frame
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px white",
      transition: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
    tap: {
      boxShadow: "0px 0px 8px #fff",
    },
  };
  return (
    <motion.button
      variants={buttonVarients}
      animate="animate"
      initial="initial"
      whileHover="hover"
      whileTap="hover"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
