import React from 'react';
import { FaPlay, FaPause, FaStop, FaDownload } from 'react-icons/fa';

export function PlaybackControls({ isPlaying, hasText, audioUrl, onPlay, onStop, onDownload }) {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={onPlay}
        className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!hasText}
      >
        {isPlaying ? <FaPause className="mr-2" /> : <FaPlay className="mr-2" />}
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button
        onClick={onStop}
        className="flex items-center px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!isPlaying}
      >
        <FaStop className="mr-2" />
        Stop
      </button>
      <button
        onClick={onDownload}
        className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!audioUrl}
      >
        <FaDownload className="mr-2" />
        Download MP3
      </button>
    </div>
  );
}