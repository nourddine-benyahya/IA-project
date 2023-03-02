import React, { useEffect, useState } from 'react'
import { GiBrain } from 'react-icons/gi'
import { AiFillAudio } from 'react-icons/ai'
import { GrSend } from 'react-icons/gr'
import { motion } from 'framer-motion';
import { divideText } from '../Tools/TextCut';
import { TextToSpeech } from '../Tools/TextToVoice/TextToVoice';
import { IA } from '../Tools/AI/IA';
import styles from  '../Styles/Chat.module.css'




export default function ChatContent() {


  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const mic = new SpeechRecognition()
  mic.continuous = true
  mic.interimResults = true
  mic.lang = 'en-US'

  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
    } else {
      console.log(note)
      mic.stop()
    }
    mic.onstart = () => {
      console.log('Mics on')
    }
    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }
  const handelSearch = (e) => {
    const fetchData = async () => {
      const data = await IA(note);
      //console.log(data)
      TextToSpeech(data)
    }
    fetchData()
  }

  return (
    <>
    <motion.div className={styles.IaChat} >
            <motion.div
                      initial={{ opacity: 0, x:-100 }}
                      animate={{ opacity: 1, x:0 }} 
          transition={{ duration: 1 }}
            
            >
                <GiBrain size={30}/>
            </motion.div>
            <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                animate={{ opacity: 1, x:0 }} 
                                transition={{ duration: 0.7 }}      
            
            className={styles.chatContent} >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, adipisci inventore temporibus iure autem necessitatibus corrupti. Necessitatibus commodi vero, velit unde impedit magnam suscipit distinctio amet. Dicta, odit. Nemo, vel!</p>
            </motion.div>
          </motion.div>

          <motion.div className={styles.Pchat} >
            <motion.div 
            initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x:0 }} 
            transition={{ duration: 1 }}


            >
                <GiBrain size={30}/>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.7 }}   
            
            className={styles.chatContent} >
                <motion.p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, adipisci inventore temporibus iure autem necessitatibus corrupti. Necessitatibus commodi vero, velit unde impedit magnam suscipit distinctio amet. Dicta, odit. Nemo, vel!</motion.p>
            </motion.div>
          </motion.div>


          <motion.div className={styles.searchBar}
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y:0 }} 
          transition={{ duration: 0.7 }}
          
          >

            <motion.input
                 
            
            className={styles.input} value={note} onChange={(e)=>setNote(e.target.value)} type="text" placeholder='Talk To me' />
               <motion.div  className={styles.icons} > <AiFillAudio onClick={() => setIsListening(prevState => !prevState)} className={styles.ico} size={25} /></motion.div>
            <motion.div className={styles.icons} ><GrSend value={note} onClick={handelSearch} size={25} className={styles.ico}  /></motion.div>
          </motion.div>
          </>
  )
}
