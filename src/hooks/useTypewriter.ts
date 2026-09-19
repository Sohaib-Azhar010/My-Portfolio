import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
}

export function useTypewriter({ text, speed = 38, startDelay = 600 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < text.length) {
        setDisplayed(text.substring(0, charIndex + 1));
        charIndex++;
        timeoutId = setTimeout(typeChar, speed);
      } else {
        setDone(true);
      }
    };

    timeoutId = setTimeout(typeChar, startDelay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, startDelay]);

  return { displayed, done };
}
