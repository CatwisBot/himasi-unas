'use client';

import { useEffect } from 'react';

// TypeScript interface untuk komponen props
interface AnimatedEffectsProps {
  enableTitle?: boolean;
  customTitle?: string;
}



// ---------- Animated Title Hook ----------
const useAnimatedTitle = (customTitle?: string) => {
  useEffect(() => {
    // If customTitle is undefined, the hook is disabled
    if (customTitle === undefined) return;
    
    const titleText = customTitle || "HIMASI UNAS";
    const cursorSymbol = "_";
    let currentText = "";
    let isTyping = true;
    let charIndex = 0;
    let isBlinking = false;

    const typewriter = () => {
      if (isTyping) {
        if (charIndex < titleText.length) {
          currentText = titleText.substring(0, charIndex + 1);
          document.title = currentText + (isBlinking ? cursorSymbol : "");
          charIndex++;
        } else {
          setTimeout(() => {
            isTyping = false;
            charIndex = titleText.length - 1;
          }, 2000);
        }
      } else {
        if (charIndex > 0) { // Changed from >= 0 to > 0
          currentText = titleText.substring(0, charIndex);
          document.title = currentText + (isBlinking ? cursorSymbol : "");
          charIndex--;
        } else {
          // When charIndex reaches 0, keep only "H" and wait before typing again
          currentText = "H";
          document.title = currentText + (isBlinking ? cursorSymbol : "");
          setTimeout(() => {
            isTyping = true;
            charIndex = 0;
          }, 1000);
        }
      }
    };

    const cursorBlink = () => {
      isBlinking = !isBlinking;
      if (!isTyping && charIndex <= 0) return; // Changed from < 0 to <= 0
      document.title = currentText + (isBlinking ? cursorSymbol : "");
    };

    const typeInterval = setInterval(typewriter, 250); // Changed from 100ms to 500ms (0.5 second)
    const blinkInterval = setInterval(cursorBlink, 350);

    return () => {
      clearInterval(typeInterval);
      clearInterval(blinkInterval);
      document.title = "HIMASI UNAS";
    };
  }, [customTitle]);
};

// ---------- Main Component ----------
const AnimatedEffects: React.FC<AnimatedEffectsProps> = ({
  enableTitle = true,
  customTitle
}) => {
  // Always call hooks, but conditionally activate them
  useAnimatedTitle(enableTitle ? (customTitle || "HIMASI UNAS") : undefined);

  return null; // This component doesn't render anything visible
};

// Export both the component and individual hooks
export default AnimatedEffects;
export { useAnimatedTitle };
export type { AnimatedEffectsProps };