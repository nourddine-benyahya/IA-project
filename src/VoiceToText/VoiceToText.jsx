import React, { useState, useEffect } from 'react'

const SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function VoiceToText() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)


  //call fun when value of islistening 
  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {

    //open mice if treu and turn it off if if false
    if (isListening) {
      mic.start()
    } else {
      mic.stop()
    }

    //when mic opened show message
    mic.onstart = () => {
      console.log('Mics on')
    }

    //transcript Voice
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


  return (
    <>
      <h1>Voice Notes</h1>
      <div className="container">

          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}

          <button onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>

          <p>{note}</p>

      </div>
    </>
  )
}

export default VoiceToText