import React, { useState, useEffect } from 'react';
import Howler from 'howler';

function WebSpeech({ storyText }) {
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<any | null>(null); // Store the recognition instance
  const [isListening, setIsListening] = useState(false);

  const triggerWords = [
    { voiceWord: 'moon', triggerWord: 'moon', soundPath: '/sounds/nightsound.mp3' },
    { voiceWord: 'up', triggerWord: 'up', soundPath: '/sounds/caterpillarsqueak.mp3' },
    { voiceWord: 'hungry', triggerWord: 'hungry', soundPath: '/sounds/stomach_growl.mp3' },
    { voiceWord: 'ate', triggerWord: 'ate', soundPath: '/sounds/eating.mp3' },
    { voiceWord: 'built', triggerWord: 'built', soundPath: '/sounds/building.mp3' },
    { voiceWord: 'cream', triggerWord: 'cream', soundPath: '/sounds/ice_cream.mp3' },
    { voiceWord: 'pickle', triggerWord: 'pickle', soundPath: '/sounds/pickle.mp3' },
    { voiceWord: 'lollipop', triggerWord: 'lollipop', soundPath: '/sounds/lollipop.mp3' },
    { voiceWord: 'watermelon', triggerWord: 'watermelon', soundPath: '/sounds/watermelon.mp3' },
    { voiceWord: 'stomach', triggerWord: 'stomach', soundPath: '/sounds/stomachache.mp3' },
    { voiceWord: 'sunday', triggerWord: 'sunday', soundPath: '/sounds/bird.mp3' },
    { voiceWord: 'better', triggerWord: 'better', soundPath: '/sounds/sigh.mp3' },
    { voiceWord: 'fat', triggerWord: 'fat', soundPath: '/sounds/fat.mp3' },
    { voiceWord: 'nibbled', triggerWord: 'nibbled', soundPath: '/sounds/Nibble.mp3' },
    { voiceWord: 'butterfly', triggerWord: 'butterfly', soundPath: '/sounds/wings.mp3' },
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
        const regex = new RegExp(`\\b${wordObj.voiceWord}\\b`, 'gi');

        if (regex.test(currentTranscript)) {
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