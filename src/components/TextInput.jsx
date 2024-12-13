import React from 'react';

export function TextInput({ text, setText }) {
  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-48 p-4 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter text to convert to speech..."
      />
      <div className="text-sm text-gray-500 mb-4">
        Characters: {text.length}
      </div>
    </div>
  );
}