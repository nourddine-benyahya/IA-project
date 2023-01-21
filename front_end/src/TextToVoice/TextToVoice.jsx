export function TextToSpeech(text) {

    const voicesS = window.speechSynthesis.getVoices();
    const selectedVoice = voicesS.find(voice => voice.name === 'Google US English');
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    utterance.rate=0.8
    window.speechSynthesis.speak(utterance);
  
}

