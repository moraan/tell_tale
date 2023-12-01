import React, { useState, useEffect } from 'react';
import Howler from 'howler';
import supabase from "../config/supabaseClient";

function WebSpeech({ storyText, bookName }) {
  const [transcript, setTranscript] = useState(''); // store speech
  const [recognition, setRecognition] = useState<any | null>(null); // store the recognition instance
  const [isListening, setIsListening] = useState(false); // knows state to determine if voice recognition is on

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
  
      return { data, error: null };
    } catch (error) {
      console.error('Error:', error);
      return { data: null, error };
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchTriggerWordsFromSupabase(bookName);

      if (error) {
        console.error('Error fetching trigger words:', error);
        return;
      }

      if (data) {
        data.forEach((wordObj) => {
          const regex = new RegExp(`\\b${wordObj.word}\\b`, 'gi');

          if (regex.test(transcript)) {
            const sound = new Howler.Howl({ src: [wordObj.sound_url] });
            sound.play();
          }
        });
      }
    };

    fetchData();
  }, [storyText, transcript]);

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