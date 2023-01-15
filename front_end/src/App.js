import React from "react";
import AI from "./AI/AI";
import TextToSpeech from "./TextToVoice/TextToVoice";
import VoiceToText from "./VoiceToText/VoiceToText";

function App() {
  return (
    <div className="App">
        {/* <AI/>
        <VoiceToText/> */}
        <TextToSpeech/>
    </div>
  );
}

export default App;
