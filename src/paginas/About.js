import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Titan from "../components/Titan";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "50vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  exit:{
      y: "-100vh",
      transition: {
          ease: "easeInOut",
          duration: 0.5
      },
  },
};

const About = () => {
  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>About</h1>
      <div className="about-desc">
        <p>
          Ut labore do dolore ullamco consequat. Id deserunt culpa ea quis
          dolore eiusmod duis culpa reprehenderit excepteur est tempor do ea.
          Lorem labore ea adipisicing aliquip nulla sit officia labore irure
          duis ea ut sunt nostrud. Exercitation nisi irure nisi exercitation
          nostrud officia cillum adipisicing aliqua non mollit ipsum culpa. Et
          enim quis sint est sit ex occaecat cillum eu. Sit commodo incididunt
          dolore incididunt aliqua tempor eu commodo voluptate.
        </p>
        <Titan/>
        <div>
          <motion.h1
            initial={{ y: 10 }}
            animate={{
              y: -10,
              transition: {
                duration: 1,
                ease: "easeIn",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <Link className="link" to="/newsletter">
              &#8659;
            </Link>
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
