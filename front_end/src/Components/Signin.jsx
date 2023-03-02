import React from 'react'
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom";
import styles from  '../Styles/Signin.module.css'
import SigninImg from '../Assist/img/signinImg.png'
import { BsGithub,BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { FnSignin } from '../Apis/Signin'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';




export default function Signup() {



    const navigate= useNavigate()
    const dispatch=useDispatch()
    const user = useSelector(state=>state.user)

    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const handelChang = (e)=>{
        e.target.id=="username" ? setUsername(e.target.value) : setPassword(e.target.value)
    }

    useEffect(() => {
        user.isHere && navigate("/")

     }, []);


    const handleClick = (e)=>{
        if (username=="" || password==""){
            toast.warn('some input is empty !!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else{
            FnSignin(username,password,dispatch).then((data) => {
                if(data!="ok"){
                    toast.error(data, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                }else{
                    navigate("/")
                }
            
            })

        }
    }


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
                    id="username"
                    placeholder='username'
                    onChange={handelChang}
                    />
                <motion.input
                    initial={{ opacity: 0, x:100 }}
                    whileInView={{ opacity: 1, x:0 }} 
                    transition={{ duration: 0.5 }}
                    placeholder='password'
                    id='password'
                    onChange={handelChang}
                    className={styles.input}
                    type='password' />
                <motion.a
                    initial={{ opacity: 0, x:100 }}
                    whileInView={{ opacity: 1, x:0 }} 
                    transition={{ duration: 0.6 }}
                    href='/'
                    className={styles.pswd} >forget your password?</motion.a>
                <motion.button
                    initial={{ opacity: 0, x:100 }}
                    whileInView={{ opacity: 1, x:0 }} 
                    transition={{ duration: 0.7 }}
                    whileTap={{ scale: 0.7 }}
                    onClick={handleClick}
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

        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  )
}
