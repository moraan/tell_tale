import React, { useState, useEffect } from 'react';
import Howler from 'howler';
import supabase from "../config/supabaseClient";

function WebSpeech({ storyText, bookName }) {
  const [transcript, setTranscript] = useState(''); // store speech
  const [recognition, setRecognition] = useState<any | null>(null); // store the recognition instance
  const [isListening, setIsListening] = useState(false); // knows state to determine if voice recognition is on
  const [selectWord, setSelectWord] = useState<Set<string>>(new Set());
  const [isWordSelectLock, setIsWordSelectLock] = useState(false);
  const [triggerWordsData, setTriggerWordsData] = useState<{ word: string; sound_url: string }[]>([]);

  // Retrieve from supabase all the triggerwords and sounds associated with the book
  async function fetchTriggerWordsFromSupabase(bookName) {
    try {
      const { data, error } = await supabase
        .from('triggerwords')
        .select('word, sound_url')
        .eq('book', bookName); // Assuming 'book' is the column in your table for book names
  
      if (error) {
        console.error(`Error fetching data from triggerwords for book ${bookName}:`, error);
        return { data: null, error };
      }

      if (data) {
        setTriggerWordsData(data);
      }
  
      return { data, error: null };
    } catch (error) {
      console.error('Error:', error);
      return { data: null, error };
    }
  }

  // Calls function to retrieve sounds and triggerwords
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchTriggerWordsFromSupabase(bookName);

      if (error) {
        console.error('Error fetching trigger words:', error);
        return;
      }

      if (data) {
        data.forEach((wordObj) => {
          if (selectWord.has(wordObj.word)) {
            const regex = new RegExp(`\\b${wordObj.word}\\b`, 'gi');

            if (regex.test(transcript)) {
              const sound = new Howler.Howl({ src: [wordObj.sound_url] });
              sound.play();
            }
          }
        });
      }
    };

    fetchData();
  }, [storyText, transcript]);

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
      setTranscript(currentTranscript); // update transcipt from users speech
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
      <h2>Web Speech API</h2>
      <p>{transcript}</p>
      
      <label style={{marginBottom: '10px'}}>1. Select Trigger Words to Enable/Disable:</label>
        <select multiple value={Array.from(selectWord)} onChange={handleTriggerChange}
          style={{width:'100px', height:'150px', marginBottom: '10px'}}
          disabled={isListening}>
          {triggerWordsData.map((wordObj) => (
            <option key={wordObj.word} value={wordObj.word}>
              {wordObj.word}
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