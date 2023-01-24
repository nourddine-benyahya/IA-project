import React from 'react'
import { motion } from "framer-motion"
import styles from '../Styles/Home.module.css'
import homeimg from '../Assist/img/HomeImg.png'

export default function Home() {
  return (
    <div className={styles.gridParent} >
      <div className={styles.gridchild0} >
        <motion.div
          initial={{ opacity: 0, x:-100 }}
          whileInView={{ opacity: 1, x:0 }} 
          transition={{ duration: 0.4 }}
          className={styles.bigtitle}
        
        
        >Welcome to IA Speaks</motion.div>
        <motion.div 
                initial={{ opacity: 0, x:-100 }}
                whileInView={{ opacity: 1, x:0 }} 
                transition={{ duration: 0.5 }}
                className={styles.subtitle}
        >the revolutionary new way to access information with just your voice!</motion.div>

        <motion.div
              initial={{ opacity: 0, x:-100 }}
              whileInView={{ opacity: 1, x:0 }} 
              transition={{ duration: 0.7 }}
              className={styles.text}
        >Our advanced AI technology allows you to speak directly with our system, receiving accurate and prompt responses to all of your questions. No more typing, no more scrolling. With IA Speaks, getting the information you need is as easy as speaking.
          Our cutting-edge AI technology makes it easy for you to find the answers you need, quickly and accurately.
          With just your voice, you can access a wide range of information
        </motion.div>
        <motion.button
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }} 
          className={styles.homeBtn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        
        >Let’s Speak</motion.button>
      </div>

      <div>
        <motion.img
          className={styles.image}
           key={homeimg}
           src={homeimg}
           initial={{ opacity: 0, x:100 }}
           whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.7 }}
        ></motion.img>
      </div>

    </div>
  )
}
