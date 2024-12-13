import React, { useState } from 'react';
import { TextInput } from './components/TextInput';
import { VoiceSelector } from './components/VoiceSelector';
import { SpeedControl } from './components/SpeedControl';
import { PlaybackControls } from './components/PlaybackControls';
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis';

function App() {
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(1);
  const { 
    voices, 
    selectedVoice, 
    isPlaying, 
    audioUrl,
    setSelectedVoice, 
    speak, 
    stop,
    downloadAudio 
  } = useSpeechSynthesis();

  const handlePlay = () => {
    speak(text, speed);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Text to Speech</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <TextInput text={text} setText={setText} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <VoiceSelector
              voices={voices}
              selectedVoice={selectedVoice}
              onVoiceChange={setSelectedVoice}
            />
            <SpeedControl speed={speed} onSpeedChange={setSpeed} />
          </div>
          
          <PlaybackControls
            isPlaying={isPlaying}
            hasText={text.length > 0}
            audioUrl={audioUrl}
            onPlay={handlePlay}
            onStop={stop}
            onDownload={downloadAudio}
          />
        </div>
      </div>
    </div>
  );
}

export default App;