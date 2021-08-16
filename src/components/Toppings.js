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
const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
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
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <Button>Order</Button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
