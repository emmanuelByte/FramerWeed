import { motion } from "framer-motion";
import React from "react";

const Container = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default Container;
