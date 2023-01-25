import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import styles from  '../Styles/Signup.module.css'
import signupImg from '../Assist/img/signupImg.jpg'
import { BsGithub,BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

export default function Signup() {


  return (
    <div className={styles.gridParent} >

        <div className={styles.gridChild1} >
            <div>
                <motion.h1 
                    className={styles.bigtitle}
                    initial={{ opacity: 0, x:-100 }}
                    whileInView={{ opacity: 1, x:0 }} 
                    transition={{ duration: 0.2 }}
                    
                    >Speechify</motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0, x:-100 }}
                whileInView={{ opacity: 1, x:0 }} 
                transition={{ duration: 0.3 }}
            
            >
                <h2>sign up to speechify with </h2>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x:-100 }}
            whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.4 }}
            
            className={styles.cons} >
                <BsGithub size={40} />
                <FcGoogle size={40}/>
                <BsApple size={40}/>
            </motion.div>

            <motion.div
             initial={{ opacity: 0, x:-100 }}
             whileInView={{ opacity: 1, x:0 }} 
             transition={{ duration: 0.5 }}
            
            className={styles.or} >
                <hr className={styles.hr} />
                <p>or</p>
                <hr className={styles.hr} />
            </motion.div>

            <motion.div className={styles.inputsGrid}
                initial={{ opacity: 0, x:-100 }}
                whileInView={{ opacity: 1, x:0 }} 
                transition={{ duration: 0.6 }}
            
            >
                <div>
                    <label className={styles.label} htmlFor="FirstName">First Name*</label>
                    <input className={styles.input} type="text" placeholder='nourddine' />
                </div>
                <div>
                    <label className={styles.label} htmlFor="LastName">Last Name*</label>
                    <input className={styles.input} type="text" placeholder='benyahya' />
                </div>
                
            </motion.div>

            <motion.div
            
                initial={{ opacity: 0, x:-100 }}
                whileInView={{ opacity: 1, x:0 }} 
                transition={{ duration: 0.62 }}
            className={styles.inputsGrid}>

                <div>
                    <label className={styles.label} htmlFor="username">username*</label>
                    <input className={styles.input} type="text" placeholder='nourddine_2002' />
                </div>
                <div>
                    <label className={styles.label} htmlFor="email">email*</label>
                    <input className={styles.input} type="email" placeholder='nourddine.benyahya@gmail.com' />
                </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x:-100 }}
            whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.64 }}
            className={styles.inputsGrid}>
                
                <div >
                    <label className={styles.label} htmlFor="age">age*</label>
                    <input className={styles.input} type="tel" placeholder='20' />
                </div>
                <div>
                    <label className={styles.label} htmlFor="profil">profil*</label>
                    <input className={styles.input} type="text" placeholder='https//:www.profile.com/img.jpg' />
                </div>
            </motion.div>


            <motion.div
            initial={{ opacity: 0, x:-100 }}
            whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.66 }}

            className={styles.inputsGrid}>
                <div>
                    <label className={styles.label} htmlFor="password">password*</label>
                    <input className={styles.input} type="password" placeholder='*******' />
                </div>
                <div>
                    <label className={styles.label} htmlFor="Cpassword">confirm password*</label>
                    <input className={styles.input} type="password" placeholder='*******' />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x:-100 }}
                whileInView={{ opacity: 1, x:0 }} 
                transition={{ duration: 0.68 }}
            
            >
                
                <p className={styles.privacy} > <input type="checkbox" name="" id="" /> Creating an account means you’re okay with our <Link end to='/signup'> Terms of Service </Link> <Link  to='/signup' >Privacy Policy</Link> , and our default <Link to='/signup' >Notification Settings</Link> . </p>

            </motion.div>
            < motion.div
            initial={{ opacity: 0, x:-100 }}
            whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.7 }}
            
            className={styles.inputsGrid}>
                <div>
                    <motion.button className={styles.btn} >Create Account</motion.button>
                </div>
                <p className={styles.signin} >Already a member? <Link to='/signin' >Sign In</Link></p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x:-100 }}
            whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.75 }}
            
            >
                <p className={styles.privacy} >This site is protected by reCAPTCHA and the Google <Link end to='/signup'> Privacy Policy</Link> and <Link end to='/signup'> Terms of Service </Link> apply. </p>
            </motion.div>

        </div>

        <div>
            <motion.img
                src={signupImg}
                key={signupImg}
                alt="loading..."
                className={styles.img}
                initial={{ opacity: 0, x:100 }}
                whileInView={{ opacity: 1, x:0 }} 
                transition={{ duration: 0.7 }}
            />

        </div>
    </div>

      )
}
