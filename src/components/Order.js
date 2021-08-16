import { motion } from "framer-motion";
import React, { useEffect } from "react";
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
    transition: {
      type: "spring",
      // stiffness: 120,
      delay: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.4,
      mass: 0.4,
      damping: 8,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};
const childVarients = {
  initial: {
    opacity: 0,
    // color: "green",
  },
  visible: {
    opacity: 1,
    // color: "red",
  },
};
const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      animate="visible"
      initial="initial"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVarients}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVarients}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
