import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import styles from  '../Styles/Signin.module.css'
import SigninImg from '../Assist/img/signinImg.png'
import { BsGithub,BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';




export default function Signup() {
  return (
    <div className={styles.gridParent} >
        <div className={styles.Child0} >
            <motion.div className={styles.bigtitle} 
                initial={{ opacity: 0, x:-100 }}
                whileInView={{ opacity: 1, x:0 }} 
                transition={{ duration: 0.5 }}

            >Sign in to speech to me</motion.div>
            <motion.div className={styles.Child01}
                initial={{ opacity: 0, x:-100 }}
                whileInView={{ opacity: 1, x:0 }} 
                transition={{ duration: 0.7 }}
            
            >if you don't have an a account you can <Link className={styles.Child02} >Register here!</Link> </motion.div>
        </div>
        <div>
            <motion.img
                key={SigninImg}
                src={SigninImg}
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y:0 }} 
                transition={{ duration: 0.7 }}

            ></motion.img>
        </div>
        <motion.div
        initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1,  }} 
        transition={{ duration: 0.4 }}
        
        className={styles.child3}>
            
                <motion.input
                    initial={{ opacity: 0, x:100 }}
                    whileInView={{ opacity: 1, x:0 }} 
                    transition={{ duration: 0.3 }}
                    className={styles.input}
                    type='text'
                    placeholder='username'
                    ></motion.input>
                <motion.input
                    initial={{ opacity: 0, x:100 }}
                    whileInView={{ opacity: 1, x:0 }} 
                    transition={{ duration: 0.5 }}
                    placeholder='password'
                className={styles.input} type='password' ></motion.input>
                <motion.a
                initial={{ opacity: 0, x:100 }}
                whileInView={{ opacity: 1, x:0 }} 
                transition={{ duration: 0.6 }}
                
                href='/' className={styles.pswd} >forget your password?</motion.a>
                <motion.button
                    initial={{ opacity: 0, x:100 }}
                    whileInView={{ opacity: 1, x:0 }} 
                    transition={{ duration: 0.7 }}
                    whileTap={{ scale: 0.7 }}

                className={styles.inputBtn} >Sign in</motion.button>
                <motion.div className={styles.child31} >
                    <hr className={styles.hr} />
                    <p className={styles.child31text} > Or continue with </p>
                    <hr className={styles.hr} />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x:100 }}
                    whileInView={{ opacity: 1, x:0 }} 
                    transition={{ duration: 0.9 }}
                
                className={styles.iconsGrid} >
                        <BsGithub size={30} />
                        <FcGoogle size={30}/>
                        <BsApple size={30}/>

                </motion.div>
            
        </motion.div>
    </div>
  )
}
