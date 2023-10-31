import React, { useState, useEffect } from 'react';
import Howler from 'howler';

function WebSpeech({ storyText }) {
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null); // Store the recognition instance
  const [isListening, setIsListening] = useState(false);

  const triggerWords = [
    { voiceWord: 'moon', triggerWord: 'moon', soundPath: '/sounds/nightsound.mp3' },
    { voiceWord: 'up', triggerWord: 'up', soundPath: '/sounds/caterpillarsqueak.mp3' },
    // Add more voice recognition words, trigger words, and sound paths
  ];

  const startListening = () => {
    if (recognition) {
      recognition.stop();
    }
    const newRecognition = new (window as any).webkitSpeechRecognition();
    newRecognition.continuous = true;

    newRecognition.onresult = (event) => {
      const currentTranscript = event.results[event.results.length - 1][0].transcript.toLowerCase();
      setTranscript(currentTranscript);

      triggerWords.forEach((wordObj) => {
        if (currentTranscript.includes(wordObj.voiceWord)) {
          const sound = new Howler.Howl({ src: [wordObj.soundPath] });
          sound.play();
        }
      });
    };

    newRecognition.onend = () => {
      setIsListening(false);
    };

    newRecognition.start();
    setIsListening(true);
    setRecognition(newRecognition);
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  useEffect(() => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [storyText]);

  return (
    <div>
      <h2>Web Speech API</h2>
      <p>{transcript}</p>

      <button onClick={startListening} disabled={isListening}>
        Start Reading
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Stop Reading
      </button>
    </div>
  );
}

export default WebSpeech;