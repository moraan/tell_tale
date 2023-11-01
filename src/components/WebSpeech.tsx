import React, { useState, useEffect } from 'react';
import Howler from 'howler';

function WebSpeech({ storyText }) {
  const [transcript, setTranscript] = useState(''); // store speech
  const [recognition, setRecognition] = useState<any | null>(null); // store the recognition instance
  const [isListening, setIsListening] = useState(false); // knows state to determine if voice recognition is on

  // assinging trigger words and user voice words to sound path
  // both user voice words and trigger words need to match in order to play sound
  const triggerWords = [
    { voiceWord: 'moon', triggerWord: 'moon', soundPath: '/sounds/nightsound.mp3' },
    { voiceWord: 'up', triggerWord: 'up', soundPath: '/sounds/caterpillarsqueak.mp3' },
    // Add more voice recognition words, trigger words, and sound paths
  ];

  // begins voice recognition
  const startListening = () => {
    if (recognition) {
      recognition.stop();
    }

    const newRecognition = new (window as any).webkitSpeechRecognition(); // creats new instance of voice recognition
    newRecognition.continuous = true; // allows continued listening for speech input by user even after it recognizes a spoken word.

    newRecognition.onresult = (event) => {
      const currentTranscript = event.results[event.results.length - 1][0].transcript.toLowerCase();
      setTranscript(currentTranscript); // update transcipt from users speech

      // ff any voice words are spoken by user
      triggerWords.forEach((wordObj) => {
        if (currentTranscript.includes(wordObj.voiceWord)) {
          // sound will play corresponding to trigger word
          const sound = new Howler.Howl({ src: [wordObj.soundPath] });
          sound.play();
        }
      });
    };

    // voice recognition is over
    newRecognition.onend = () => {
      setIsListening(false);
    };

    newRecognition.start(); // begin voice recognition
    setIsListening(true); // set state to true for voice recognition
    setRecognition(newRecognition);
  };

  // to stop voice recognition
  const stopListening = () => {
    if (recognition) {
      recognition.stop(); // stop current voice recognition
      setIsListening(false); // set state to false for voice recognition
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