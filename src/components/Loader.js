import { motion, useCycle } from "framer-motion";
const loaderVarients = {
  animation1: {
    x: [-30, 30],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animation2: {
    y: [0, -40],
    x: 0,
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeIn",
      },
    },
  },
};
const Loader = () => {
  const [animation, setAnimation] = useCycle("animation1", "animation2");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVarients}
        // initial="initial"
        animate={animation}
      ></motion.div>
      {false && <div onClick={() => setAnimation()}>Cycle Animation</div>}
    </>
  );
};

export default Loader;
