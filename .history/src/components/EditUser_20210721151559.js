import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    } 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    }
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const Order = () => {
  

  return (
    <motion.div className="container order flex justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="w-2/3 ">
        <h1 className="text-gray-600 py-6 text-4xl">Edit User Detail</h1>
        
      <motion.form variants={childVariants}>
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Phone Number</label>
          <input type="text" name="phone" id="phone" />
        </div>
      </motion.form>
      <motion.div variants={childVariants}>
        
      </motion.div>    
      </div>
    </motion.div>
  )
}

export default Order;