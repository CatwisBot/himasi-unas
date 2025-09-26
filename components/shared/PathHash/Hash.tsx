'use client';

import { useEffect } from 'react';

// TypeScript interface untuk komponen props
interface AnimatedEffectsProps {
  enableHash?: boolean;
  enableFavicon?: boolean;
  enableTitle?: boolean;
  customHashes?: string[];
  customTitle?: string;
}

// ---------- Enhanced Animated URL Hash Hook ----------
const useAnimatedHash = (customHashes?: string[]) => {
  useEffect(() => {
    // If customHashes is undefined, the hook is disabled
    if (customHashes === undefined) return;
    
    const baseHashes = customHashes.length > 0 ? customHashes : ['HIMASI-HEBAT', 'HIMASI-KEREN', 'HIMASI-TERDEPAN', 'HIMASI-UNAS-THE-BEST'];
    const glitchChars = ['░', '▒', '▓', '█', '◆', '◇', '★', '▲', '▼', '◄', '►'];
    const cursorChars = ['_', '▮', '│', '|'];
    let currentIndex = 0;
    let isAnimating = false;
    let currentHash = '';
    let cursorVisible = true;
    let cursorIndex = 0;

    const getRandomGlitchChar = () => glitchChars[Math.floor(Math.random() * glitchChars.length)];
    const getCurrentCursor = () => cursorChars[cursorIndex % cursorChars.length];

    const animateHashTransition = async (newHash: string) => {
      if (isAnimating) return;
      isAnimating = true;

      // Phase 1: Glitch effect with random characters
      for (let i = 0; i < 3; i++) {
        const glitchHash = '#' + Array.from({length: newHash.length}, () => getRandomGlitchChar()).join('');
        window.history.replaceState({}, '', glitchHash);
        await new Promise(resolve => setTimeout(resolve, 80));
      }

      // Phase 2: Typing animation with cursor
      currentHash = '';
      for (let i = 0; i <= newHash.length; i++) {
        currentHash = newHash.substring(0, i);
        const displayHash = '#' + currentHash + (i < newHash.length ? getCurrentCursor() : '');
        window.history.replaceState({}, '', displayHash);

        // Occasionally insert random glitch characters during typing
        if (Math.random() < 0.3 && i < newHash.length) {
          const glitchPos = Math.floor(Math.random() * currentHash.length);
          const glitchedHash = '#' + currentHash.substring(0, glitchPos) + getRandomGlitchChar() + currentHash.substring(glitchPos + 1) + getCurrentCursor();
          window.history.replaceState({}, '', glitchedHash);
          await new Promise(resolve => setTimeout(resolve, 50));
          window.history.replaceState({}, '', displayHash);
        }

        await new Promise(resolve => setTimeout(resolve, 120));
        cursorIndex++;
      }

      // Phase 3: Final hash with blinking cursor for a moment
      for (let i = 0; i < 4; i++) {
        cursorVisible = !cursorVisible;
        const finalHash = '#' + newHash + (cursorVisible ? getCurrentCursor() : '');
        window.history.replaceState({}, '', finalHash);
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      // Set final clean hash
      window.history.replaceState({}, '', '#' + newHash);
      isAnimating = false;
    };

    const updateHash = () => {
      const newHash = baseHashes[currentIndex];
      animateHashTransition(newHash);
      currentIndex = (currentIndex + 1) % baseHashes.length;
    };

    // Set initial hash
    updateHash();
    const interval = setInterval(updateHash, 4000); // Longer interval to accommodate animation

    // Prevent page jumping on hash changes
    const preventJump = (e: Event) => {
      const target = e.target as HTMLElement;
      const targetHash = (target as HTMLAnchorElement)?.hash || window.location.hash;
      if (targetHash && baseHashes.some(hash => targetHash.includes(hash))) {
        e.preventDefault();
      }
    };

    window.addEventListener('hashchange', preventJump);

    return () => {
      clearInterval(interval);
      window.removeEventListener('hashchange', preventJump);
      window.history.replaceState({}, '', window.location.pathname);
    };
  }, [customHashes]);
};

// ---------- Animated Favicon Hook ----------
const useAnimatedFavicon = (enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) return;
    
    const symbols = ['</>', '{}', '()'];
    let currentIndex = 0;

    const createFavicon = (symbol: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');

      if (!ctx) return '';

      // Background
      ctx.fillStyle = '#7c3aed';
      ctx.fillRect(0, 0, 32, 32);

      // Symbol
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(symbol, 16, 16);

      return canvas.toDataURL();
    };

    const updateFavicon = () => {
      const symbol = symbols[currentIndex];
      const faviconUrl = createFavicon(symbol);

      let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link') as HTMLLinkElement;
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.href = faviconUrl;

      currentIndex = (currentIndex + 1) % symbols.length;
    };

    updateFavicon(); // Set initial favicon
    const interval = setInterval(updateFavicon, 1000);

    return () => {
      clearInterval(interval);
      // Reset to default favicon
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (link) {
        link.href = '/favicon.ico';
      }
    };
  }, [enabled]);
};

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
        if (charIndex >= 0) {
          currentText = titleText.substring(0, charIndex);
          document.title = currentText + (isBlinking ? cursorSymbol : "");
          charIndex--;
        } else {
          setTimeout(() => {
            isTyping = true;
            charIndex = 0;
          }, 2000);
        }
      }
    };

    const cursorBlink = () => {
      isBlinking = !isBlinking;
      if (!isTyping && charIndex < 0) return;
      document.title = currentText + (isBlinking ? cursorSymbol : "");
    };

    const typeInterval = setInterval(typewriter, 100);
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
  enableHash = true,
  enableFavicon = true,
  enableTitle = true,
  customHashes,
  customTitle
}) => {
  // Always call hooks, but conditionally activate them
  useAnimatedHash(enableHash ? (customHashes || ['HIMASI-HEBAT', 'HIMASI-KEREN', 'HIMASI-TERDEPAN', 'HIMASI-UNAS-THE-BEST']) : undefined);
  useAnimatedFavicon(enableFavicon);
  useAnimatedTitle(enableTitle ? (customTitle || "HIMASI UNAS") : undefined);

  return null; // This component doesn't render anything visible
};

// Export both the component and individual hooks
export default AnimatedEffects;
export { useAnimatedHash, useAnimatedFavicon, useAnimatedTitle };
export type { AnimatedEffectsProps };