import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const containerVariants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    show: {
      x: "0vw",
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };
  
  const Modal = ({ showModal }) => {
    return (
      <>
        {showModal && (
          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="form"
          >
            <div>
              <label htmlFor="">Nombre</label> <input type="text" />
            </div>
            <div>
              <label htmlFor="">Ingrese tu correo</label>
              <input type="text" />
            </div>
            <div>
              <label className="msg" htmlFor="">
                Mensaje
              </label>
              <textarea className="txt-area"></textarea>
            </div>
            <Link className="link" to="/">
              <button className="form-button">Submit</button>
            </Link>
          </motion.form>
        )}
      </>
    );
  };
  
  export default Modal;
