import React from 'react';
import { MdSpeed } from 'react-icons/md';

export function SpeedControl({ speed, onSpeedChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <MdSpeed className="inline mr-1" />
        Speed: {speed}x
      </label>
      <input
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={speed}
        onChange={(e) => onSpeedChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}