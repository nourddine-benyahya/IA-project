import React, { useState, useEffect } from 'react'
import { TextToSpeech } from '../TextToVoice/TextToVoice';
import { IA } from '../AI/IA';


const SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()
mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


TextToSpeech("")
function VoiceToText() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [ansr, setansr] = useState(null)

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

  const handelSearch = (e)=>{
    const fetchData = async () => {
      const data = await IA(note);
      TextToSpeech(data)
      setansr(data)
    }
    fetchData();
    
  }


  return (
    <>
      <h1>Voice Notes</h1>
      <div className="container">

          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}

          <button onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>
          <button value={note} onClick={handelSearch} > search </button>

          <p>{note+"?"}</p>
          <p>{ansr}</p>
          <input value={note} onChange={(e)=>setNote(e.target.value)} ></input>

      </div>
    </>
  )
}

export default VoiceToText