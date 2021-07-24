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
        <h1 className="text-gray-600 font-semibold pt-6 mb-4 text-2xl">Edit User Detail</h1>
        
      <motion.form variants={childVariants} className="pl-4">
        <div className="flex flex-col">
          <label className="text-xl mb-5" htmlFor="">Name</label>
          <input type="text" name="name"
          className="px-3 py-4 w-1/2 border-2 rounded-lg shadow-md" id="name" placeholder="name" />
        </div>
        <div className="flex flex-col">
          <label className="text-xl my-5" htmlFor="">Email</label>
          <input type="text" name="email"
          className="px-3 py-4 w-1/2 rounded-lg shadow-md border-2" 
          placeholder="email"
          id="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-xl my-5" >Phone Number:</label>
          <input type="text" name="phone" className="px-3 py-4 w-1/2 rounded-lg shadow-md border-2" id="phone" />
        </div>
      </motion.form>
      <motion.div variants={childVariants}>
        
      </motion.div>    
      </div>
    </motion.div>
  )
}

export default Order;