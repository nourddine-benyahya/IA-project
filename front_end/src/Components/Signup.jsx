import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import styles from  '../Styles/Signup.module.css'
import signupImg from '../Assist/img/signupImg.jpg'
import { BsGithub,BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { FnSignup } from '../Apis/Signup'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signup() {
    const [username,setUsername]=useState("")
    const [firstName,setFirsrName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    const [password,setPassword]=useState("")
    const [cpassword,setCpassword]=useState("")
    const [image,setImage]=useState("")
    const handelChange = (e)=>{
        var val = e.target.value
        switch (e.target.id) {
            case "username": setUsername(val)
                break;
            case "firstName": setFirsrName(val)
                break;
            case "lastName": setLastName(val)
                break;
            case "email": setEmail(val)
                break;
            case "age": setAge(val)
                break;
            case "password": setPassword(val)
                break;
            case "cpassword": setCpassword(val)
                break;
            default: setImage(val)
                break;
        }

    }

    const handelClick=(e)=>{
        if (username=="" || firstName=="" || lastName=="" || email=="" || cpassword=="" || password=="" ){
            toast.warn('some input is empty!', {
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
            if(password!=cpassword){
                toast.warn('the password is not the same', {
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
                FnSignup(username,firstName,lastName,age,email,password,image).then((data) => {
                    if(data!="ok"){
                        toast.error('we got an error pleasse try again', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
                            console.log(data)
                    }else{

                        toast.success('done', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
                            setAge("")
                            setCpassword("")
                            setEmail("")
                            setPassword("")
                            setUsername("")
                            setFirsrName("")
                            setLastName("")
                            setImage("")

                    }
                })

            }
        }


        /*FnSignup("itashi","nakazaki","utshiha",20,"image.png","itashi@konoha.nr","123456").then((data) => {
            console.log(data)
        })*/
    }
    

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
                    <input onChange={handelChange} id="firstName" className={styles.input} type="text" placeholder='nourddine' />
                </div>
                <div>
                    <label className={styles.label} htmlFor="LastName">Last Name*</label>
                    <input onChange={handelChange} id="lastName" className={styles.input} type="text" placeholder='benyahya' />
                </div>
                
            </motion.div>

            <motion.div
            
                initial={{ opacity: 0, x:-100 }}
                whileInView={{ opacity: 1, x:0 }} 
                transition={{ duration: 0.62 }}
            className={styles.inputsGrid}>

                <div>
                    <label className={styles.label} htmlFor="username">username*</label>
                    <input onChange={handelChange} value={username} className={styles.input} type="text" id='username' placeholder='nourddine_2002' />
                </div>
                <div>
                    <label className={styles.label} htmlFor="email">email*</label>
                    <input onChange={handelChange} value={email} className={styles.input} type="email" id='email' placeholder='nourddine.benyahya@gmail.com' />
                </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x:-100 }}
            whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.64 }}
            className={styles.inputsGrid}>
                
                <div >
                    <label className={styles.label} htmlFor="age">age*</label>
                    <input onChange={handelChange} value={age} className={styles.input} type="Number" id='age' placeholder='20' />
                </div>
                <div>
                    <label className={styles.label} htmlFor="profil">profil*</label>
                    <input onChange={handelChange} value={image} className={styles.input} type="text" id='image' placeholder='https//:www.profile.com/img.jpg' />
                </div>
            </motion.div>


            <motion.div
            initial={{ opacity: 0, x:-100 }}
            whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.66 }}

            className={styles.inputsGrid}>
                <div>
                    <label className={styles.label} htmlFor="password">password*</label>
                    <input onChange={handelChange} value={password} className={styles.input} type="password" id='password' placeholder='*******' />
                </div>
                <div>
                    <label className={styles.label} htmlFor="Cpassword">confirm password*</label>
                    <input onChange={handelChange} value={cpassword} className={styles.input} type="password" id='cpassword' placeholder='*******' />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x:-100 }}
                whileInView={{ opacity: 1, x:0 }} 
                transition={{ duration: 0.68 }}
            
            >
                
                <p className={styles.privacy} > <input type="checkbox" name="" id="" /> Creating an account means you’re okay with our <Link  to='/signup'> Terms of Service </Link> <Link  to='/signup' >Privacy Policy</Link> , and our default <Link to='/signup' >Notification Settings</Link> . </p>

            </motion.div>
            < motion.div
            initial={{ opacity: 0, x:-100 }}
            whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.7 }}
            
            className={styles.inputsGrid}>
                <div>
                    <motion.button onClick={handelClick} className={styles.btn} >Create Account</motion.button>
                </div>
                <p className={styles.signin} >Already a member? <Link to='/signin' >Sign In</Link></p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x:-100 }}
            whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.75 }}
            
            >
                <p className={styles.privacy} >This site is protected by reCAPTCHA and the Google <Link  to='/signup'> Privacy Policy</Link> and <Link  to='/signup'> Terms of Service </Link> apply. </p>
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
