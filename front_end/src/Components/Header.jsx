import React from 'react'
import { motion } from "framer-motion"
import styles from  '../Styles/Header.module.css'
import { NavLink, Outlet } from "react-router-dom";



export default function Header() {
    return (
        <div>
            <motion.div 
                initial={{ opacity: 0, y:-100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }} >
                    
                <div className={styles.gridParent} >
                <motion.div whileHover={{ y: -2.5 , scale:1.3 }} whileTap={{ y: 1.1 ,scale:1}} >
                    <NavLink end to="/" className={styles.gridChild0} >
                        Speechify
                    </NavLink>
                </motion.div>

                    <div className={styles.gridChild1} >
                        <motion.div whileHover={{ y: -2.5 , scale:1.3 }} whileTap={{ y: 1.1 ,scale:1}} > <NavLink end to="/" className={({isActive}) => isActive? styles.activePath:styles.noActivePath} >Home</NavLink></motion.div>
                        <motion.div whileHover={{ y: -2.5 , scale:1.3 }} whileTap={{ y: 1.1 ,scale:1}} >  <NavLink end to="/Services" className={({isActive}) => isActive? styles.activePath:styles.noActivePath} >Services</NavLink> </motion.div>
                        <motion.div whileHover={{ y: -2.5 , scale:1.3 }} whileTap={{ y: 1.1 ,scale:1}} > <NavLink end to="/Futures" className={({isActive}) => isActive? styles.activePath:styles.noActivePath} >Futures</NavLink> </motion.div>
                        <motion.div whileHover={{ y: -2.5 , scale:1.3 }} whileTap={{ y: 1.1 ,scale:1}} > <NavLink end to="/Chat" className={({isActive}) => isActive? styles.activePath:styles.noActivePath} >Chat</NavLink> </motion.div>
                        <motion.div whileHover={{ y: -2.5 , scale:1.3 }} whileTap={{ y: 1.1 ,scale:1}} > <NavLink end to="/Aboutus" className={({isActive}) => isActive? styles.activePath:styles.noActivePath} >About us</NavLink> </motion.div>
                        <motion.div whileHover={{ y: -2.5 , scale:1.3 }} whileTap={{ y: 1.1 ,scale:1}} > <NavLink end to="/Contactus" className={({isActive}) => isActive? styles.activePath:styles.noActivePath} >Contact us</NavLink> </motion.div>
                    </div>

                    <div className={styles.gridChild2} >
                        <NavLink end to="/Signin" className={({isActive}) => isActive? styles.activePath:styles.noActivePath} >Sign in</NavLink>
                        <NavLink end to="/Signup" className={styles.signup}  >Sign up</NavLink>
                    </div>    
                    
                </div>   

                </motion.div>





                <Outlet/>
        </div>
    )
}
