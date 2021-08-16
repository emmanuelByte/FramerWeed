import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Button from "./general/Button";
const containerVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 1.5,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, delay: 0.75 },
  },
  exit: {
    x: "-100vw",
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};
const buttonVarient = {
  animate: {
    x: 0,
    transition: { type: "spring", stiffness: "120" },
  },
  initial: {
    x: "-100vw",
  },
};
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      // if the same varient no need for initial or animate
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                color: "#fbe112",
                originX: 0,
              }}
              whileTap={{
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={buttonVarient}
          initial="initial"
          animate="animate"
        >
          <Link to="/toppings">
            <Button>Next</Button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
