'use client';

import { useEffect } from 'react';

// TypeScript interface untuk komponen props
interface AnimatedEffectsProps {
  enableTitle?: boolean;
  customTitle?: string;
}

const useAnimatedTitle = (customTitle?: string) => {
  useEffect(() => {
    // If customTitle is undefined, the hook is disabled
    if (customTitle === undefined) return;
    
    const baseTitle = "HIMASI UNAS";
    const values = [
      " - Aktif",
      " - Inklusif", 
      " - Kompetitif"
    ];
    
    const cursorSymbol = "_";
    let currentValueIndex = 0;
    let currentText = "";
    let isTyping = true;
    let charIndex = 0;
    let isBlinking = false;
    let isShowingValues = false;
    let isPausing = false;

    const typewriter = () => {
      if (isPausing) return;
      
      if (!isShowingValues) {
        // First phase: Type "HIMASI UNAS"
        if (isTyping) {
          if (charIndex < baseTitle.length) {
            currentText = baseTitle.substring(0, charIndex + 1);
            document.title = currentText + (isBlinking ? cursorSymbol : "");
            charIndex++;
          } else {
            // Finished typing base title, pause and start showing values
            isPausing = true;
            setTimeout(() => {
              isPausing = false;
              isShowingValues = true;
              isTyping = true;
              charIndex = baseTitle.length; // Start from end of base title
            }, 1500); // Pause at "HIMASI UNAS_" for 1.5 seconds
          }
        }
      } else {
        // Second phase: Show values one by one
        const currentValue = values[currentValueIndex];
        const fullText = baseTitle + currentValue;
        
        if (isTyping) {
          if (charIndex < fullText.length) {
            currentText = fullText.substring(0, charIndex + 1);
            document.title = currentText + (isBlinking ? cursorSymbol : "");
            charIndex++;
          } else {
            // Finished typing current value, pause then delete
            isPausing = true;
            setTimeout(() => {
              isPausing = false;
              isTyping = false;
              charIndex = fullText.length - 1;
            }, 2000); // Show complete text for 2 seconds
          }
        } else {
          // Delete current value
          if (charIndex > baseTitle.length) {
            currentText = fullText.substring(0, charIndex);
            document.title = currentText + (isBlinking ? cursorSymbol : "");
            charIndex--;
          } else {
            // Finished deleting value, move to next or restart
            currentValueIndex++;
            
            if (currentValueIndex >= values.length) {
              // Finished all values, delete everything and restart
              if (charIndex > 1) { // Changed from > 0 to > 1 to keep "H"
                currentText = baseTitle.substring(0, charIndex);
                document.title = currentText + (isBlinking ? cursorSymbol : "");
                charIndex--;
              } else {
                // Keep "H" and reset everything
                currentText = "H";
                document.title = currentText + (isBlinking ? cursorSymbol : "");
                currentValueIndex = 0;
                isShowingValues = false;
                isTyping = true;
                charIndex = 0;
                
                isPausing = true;
                setTimeout(() => {
                  isPausing = false;
                }, 1000); // Pause before restarting
              }
            } else {
              // Move to next value
              isPausing = true;
              setTimeout(() => {
                isPausing = false;
                isTyping = true;
                charIndex = baseTitle.length;
              }, 500); // Short pause between values
            }
          }
        }
      }
    };

    const cursorBlink = () => {
      isBlinking = !isBlinking;
      document.title = currentText + (isBlinking ? cursorSymbol : "");
    };

    const typeInterval = setInterval(typewriter, 150);
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