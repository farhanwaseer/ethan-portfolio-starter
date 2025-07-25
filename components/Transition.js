// framer motion
// import {  motion } from "framer-motion";

// variants
// const transitionVariants = {
//   initial: {
//     x: ["100%", "0%"],
//     width: "100%",
//   },
//   animate: {
//     x: ["100%", "0%"],
//     width: "100%",
//   },
//   exit: {
//     x: ["0%", "0%"],
//     width:  ["0%", "100%"],
//   },
// };

// const Transition = () => {
//   return (
//     <>
//       <motion.div
//         className="fixed top-0 bottom-0 right-full w-screen h-screen  z-30 bg-[#2e2257]"
//         variants={transitionVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
//       ></motion.div>
//       <motion.div
//         className="fixed top-0 bottom-0 right-full w-screen h-screen  z-20 bg-[#3b2d71]"
//         variants={transitionVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
//       ></motion.div>
//       <motion.div
//         className="fixed top-0 bottom-0 right-full w-screen h-screen  z-10 bg-[#4b3792]"
//         variants={transitionVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         transition={{ delay: 0.6, duration: 0.4, ease: "easeInOut" }}
//       ></motion.div>
//     </>
//   );
// };

// export default Transition;

import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "0%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: "100%",
    width: "100%",
  },
};


const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-20 bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-10 bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
      />
    </>
  );
};

export default Transition;
