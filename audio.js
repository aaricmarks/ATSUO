// components/AudioPlayer.js
import { useEffect } from 'react';

export default function AudioPlayer() {
  useEffect(() => {
    const audio = new Audio('/path/to/audio.mp3');
    document.addEventListener('click', () => {
      audio.play();
    }, { once: true });
  }, []);

  return null;
}
