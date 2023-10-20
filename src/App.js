import React from 'react';
import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();
  const stopListening = () => SpeechRecognition.stopListening();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Speech to text Converter</h2>
      </div>
      <div className="main-content">
        {transcript}
      </div>
      <div className="btn-style">
        <button onClick={startListening}>Start</button>
        <button onClick={stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
    </>
  );
};

export default App;
