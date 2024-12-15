# Text to Speech Application

This project is a simple and interactive **Text to Speech (TTS)** application built with React. It allows users to enter text, select a voice, adjust the speed, and listen to the text converted to speech. The app also includes functionality to download the audio as an MP3 file.

## Features

- **Text Input:** Users can enter any text to be converted to speech.
- **Voice Selection:** Choose from a variety of available voices.
- **Speed Control:** Adjust the speed of the speech (0.5x to 2x).
- **Playback Controls:** Play, pause, stop, and download the generated audio.
- **Responsive Design:** Built with responsive styling to look great on all devices.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ADITHYANBASOK/text-to-speech-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd text-to-speech-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

## File Structure

```
text-to-speech-app/
├── public/
├── src/
│   ├── components/
│   │   ├── PlaybackControls.jsx
│   │   ├── SpeedControl.jsx
│   │   ├── TextInput.jsx
│   │   └── VoiceSelector.jsx
│   ├── hooks/
│   │   └── useSpeechSynthesis.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## Components

### `TextInput`
- A textarea component for users to enter the text to convert to speech.
- Displays the character count.

### `VoiceSelector`
- Dropdown for selecting a voice from the available voices provided by the browser's Speech Synthesis API.

### `SpeedControl`
- Slider to adjust the speed of the speech from 0.5x to 2x.

### `PlaybackControls`
- Buttons for playing, pausing, stopping, and downloading the generated audio.

## Hook: `useSpeechSynthesis`
- A custom hook that wraps the Web Speech API for handling text-to-speech operations, including playing, stopping, and downloading the audio.

## Usage

1. Enter text into the textarea.
2. Select a voice from the dropdown menu.
3. Adjust the speed of the speech using the slider.
4. Use the playback controls to play, pause, or stop the speech.
5. Download the audio file if needed.

## Dependencies

- React
- TailwindCSS (for styling)
- React Icons (for icons)

## Browser Support

This application relies on the **Web Speech API**, which is supported in most modern browsers like:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox (limited support)
- Safari

Ensure your browser supports the Web Speech API for the best experience.

## Future Enhancements

- Add support for saving text and audio files locally.
- Provide an option to customize pitch and volume.
- Improve accessibility with keyboard navigation and ARIA labels.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy using the **Text to Speech Application**!
