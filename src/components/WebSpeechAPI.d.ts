declare class SpeechRecognition {
    constructor();
    continuous: boolean;
    onresult: (event: SpeechRecognitionEvent) => void;
    onend: () => void;
    start(): void;
    stop(): void;
  }
  
declare class SpeechRecognitionEvent {
    results: SpeechRecognitionResultList;
}