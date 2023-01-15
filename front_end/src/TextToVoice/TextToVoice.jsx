import React, { useEffect, useState } from 'react';

function TextToSpeech() {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    function getVoices() {
      const voices = window.speechSynthesis.getVoices();
      setVoices(voices);
      setSelectedVoice(voices[0]);
    }
    getVoices();
    window.speechSynthesis.onvoiceschanged = getVoices;
  }, []);

  function speak() {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    window.speechSynthesis.speak(utterance);
  }

  function onTextChange(e) {
    setText(e.target.value);
  }

  function onVoiceChange(e) {
    setSelectedVoice(voices[e.target.value]);
  }

  return (
    <div>
      <textarea value={text} onChange={onTextChange} />
      <br />
      <select value={selectedVoice ? selectedVoice.name : ''} onChange={onVoiceChange}>
        {voices.map((voice, i) => (
          <option key={voice.name} value={i}>
            {voice.name}
          </option>
        ))}
      </select>
      <br />
      <button onClick={speak}>Speak</button>
    </div>
  );
}

export default TextToSpeech;