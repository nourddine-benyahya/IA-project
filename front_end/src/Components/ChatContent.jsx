import React, { useEffect, useState } from 'react'
import { GiBrain } from 'react-icons/gi'
import { AiFillAudio } from 'react-icons/ai'
import { GrSend } from 'react-icons/gr'
import { motion } from 'framer-motion';
import { divideText } from '../Tools/TextCut';
import { useDispatch, useSelector } from 'react-redux';
import { TextToSpeech } from '../Tools/TextToVoice/TextToVoice';
import { IA } from '../Tools/AI/IA';
import styles from '../Styles/Chat.module.css'
import { Addchat } from '../Redux/ChatSlice';
import { WriteChats } from '../Apis/WriteChats';
import { Getdata } from '../Apis/Getdata';




export default function ChatContent() {
  const dispatch = useDispatch()
  const chatText = useSelector(state=>state.chat.chat)
  console.log(chatText)
  const token = useSelector(state=>state.user.Token)
  

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

  useEffect(()=>{
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
    window.scrollTo(0, document.body.scrollHeight);
  },[chatText])

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

  const scrollToBottom = (e)=> {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
    window.scrollTo(0, document.body.scrollHeight);
  }
  const handelSearch = (e) => {
    const fetchData = async () => {
      const data = await IA(note);
      
      dispatch(Addchat({question:note,answer:data}))
      scrollToBottom()
      WriteChats(note,data,token)
      {/*TextToSpeech(data).then()
     
      */}
      setNote('')
    }
    fetchData()
  }

  return (
    <>
    {chatText.map((item)=>(



      <>
    
      <motion.div className={styles.IaChat} >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>

          <GiBrain size={30} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}

          className={styles.chatContent} >
          <p>{item.question}</p>
        </motion.div>
      </motion.div>

      <motion.div className={styles.Pchat} >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}


        >
          <GiBrain size={30} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.4 }}

          className={styles.chatContent} >
          <motion.p>{item.answer}</motion.p>
        </motion.div>
      </motion.div>
      </>
      ))}
      <motion.div className={styles.searchBar}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
        <motion.input className={styles.input} value={note} onChange={(e) => setNote(e.target.value)} type="text" placeholder='Talk To me' />
        <motion.div className={styles.icons} > <AiFillAudio onClick={() => setIsListening(prevState => !prevState)} className={styles.ico} size={25} /></motion.div>
        <motion.div className={styles.icons} ><GrSend value={note} onClick={handelSearch} size={25} className={styles.ico} /></motion.div>
      </motion.div>
    </>
  )
}
