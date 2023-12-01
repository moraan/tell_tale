import React, { useState, useEffect } from 'react';
import Howler from 'howler';

function WebSpeech({ storyText }) {
  const [transcript, setTranscript] = useState(''); // store speech
  const [recognition, setRecognition] = useState<any | null>(null); // store the recognition instance
  const [isListening, setIsListening] = useState(false); // knows state to determine if voice recognition is on
  const [selectWord, setSelectWord] = useState<Set<string>>(new Set());
  const [isWordSelectLock, setIsWordSelectLock] = useState(false);

  // assinging trigger words and user voice words to sound path
  // both user voice words and trigger words need to match in order to play sound
  const triggerWords = [
    { voiceWord: 'moon', soundPath: '/sounds/nightsound.mp3' },
    { voiceWord: 'up', soundPath: '/sounds/caterpillarsqueak.mp3' },
    { voiceWord: 'hungry', soundPath: '/sounds/stomach_growl.mp3' },
    { voiceWord: 'ate', soundPath: '/sounds/eating.mp3' },
    { voiceWord: 'built', soundPath: '/sounds/building.mp3' },
    { voiceWord: 'cream', soundPath: '/sounds/ice_cream.mp3' },
    { voiceWord: 'pickle', soundPath: '/sounds/pickle.mp3' },
    { voiceWord: 'lollipop', soundPath: '/sounds/lollipop.mp3' },
    { voiceWord: 'watermelon', soundPath: '/sounds/watermelon.mp3' },
    { voiceWord: 'stomach', soundPath: '/sounds/stomachache.mp3' },
    { voiceWord: 'sunday', soundPath: '/sounds/bird.mp3' },
    { voiceWord: 'better',  soundPath: '/sounds/sigh.mp3' },
    { voiceWord: 'fat', soundPath: '/sounds/fat.mp3' },
    { voiceWord: 'nibbled', soundPath: '/sounds/Nibble.mp3' },
    { voiceWord: 'butterfly', soundPath: '/sounds/wings.mp3' },
    // Add more voice recognition words, trigger words, and sound paths
  ];

  // begins voice recognition
  const startListening = () => {
    if (!isWordSelectLock) {
      setIsWordSelectLock(true);
      setSelectWord(new Set());
    }

    if (recognition) {
      recognition.stop();
    }

    const newRecognition = new (window as any).webkitSpeechRecognition(); // creats new instance of voice recognition
    newRecognition.continuous = true; // allows continued listening for speech input by user even after it recognizes a spoken word.

    newRecognition.onresult = (event) => {
      const currentTranscript = event.results[event.results.length - 1][0].transcript.toLowerCase();
      
      triggerWords.forEach((wordObj) => {
        if (selectWord.has(wordObj.voiceWord)) {
          const regex = new RegExp(`\\b${wordObj.voiceWord}\\b`, 'gi');

          if (regex.test(currentTranscript)) {
            const sound = new Howler.Howl({ src: [wordObj.soundPath] });
            sound.play();
          }
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

const handleTriggerChange = (e) => {
  if (!isListening) {
    const {value} = e.target;
    setSelectWord((prevTriggers) => {
      const newTriggers = new Set(prevTriggers);
      if (newTriggers.has(value)) {
        newTriggers.delete(value);
      } else {
        newTriggers.add(value);
      }
      return newTriggers;
    });
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
    <div style={{display:'felx', flexDirection:'column', alignItems:'flex-start'}}>
      <label style={{marginBottom: '10px'}}>1. Select Trigger Words to Enable/Disable:</label>
        <select multiple value={Array.from(selectWord)} onChange={handleTriggerChange}
          style={{width:'100px', height:'150px', marginBottom: '10px'}}
          disabled={isListening}>
          {triggerWords.map((wordObj) => (
            <option key={wordObj.voiceWord} value={wordObj.voiceWord}>
              {wordObj.voiceWord}
            </option>
          ))}
        </select>
      <label style={{marginLeft:'20px', marginRight:'10px'}}>
        2.
        <button onClick={startListening} disabled={isListening}
          style={{marginRight:'10px', marginBottom:'10px'}}>
          Start Reading
        </button>
        <button onClick={stopListening} disabled={!isListening}>
          Stop Reading
        </button>
      </label>
    </div>
  );
}

export default WebSpeech;