import React, { useRef, useEffect } from 'react';

const WavyBackground = ({ darkMode = false }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas dimensions with high-resolution support
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Set display size (css pixels)
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      // Set actual size in memory (scaled for retina)
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Scale context to match device pixel ratio
      ctx.scale(dpr, dpr);
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Enhanced colors for light/dark modes - more white, light grey and turquoise
    const colorSchemes = {
      light: {
        background: 'rgba(248, 250, 252, 0.2)', // Nearly white background
        wave1: 'rgba(236, 254, 255, 0.6)',     // Almost white with hint of turquoise
        wave2: 'rgba(224, 242, 254, 0.7)',     // Very light turquoise
        wave3: 'rgba(186, 230, 253, 0.6)',     // Light turquoise
        wave4: 'rgba(125, 211, 252, 0.4)'      // Medium turquoise
      },
      dark: {
        background: 'rgba(15, 23, 42, 0.2)',    // Deep blue-grey
        wave1: 'rgba(219, 234, 254, 0.2)',      // Light grey-blue
        wave2: 'rgba(186, 230, 253, 0.25)',     // Light turquoise
        wave3: 'rgba(125, 211, 252, 0.3)',      // Medium turquoise
        wave4: 'rgba(56, 189, 248, 0.35)'       // Bright turquoise
      }
    };
    
    const colors = darkMode ? colorSchemes.dark : colorSchemes.light;
    
    // Enhanced wave parameters for more vivid effects
    const waves = [
      { 
        frequency: 0.02, 
        amplitude: height * 0.08,   // Increased amplitude 
        speed: 0.008, 
        offset: Math.random() * 10, // Random starting position
        color: colors.wave1,
        variation: 0.3             // Wave variation factor
      },
      { 
        frequency: 0.015, 
        amplitude: height * 0.07, 
        speed: 0.012, 
        offset: Math.random() * 10,
        color: colors.wave2,
        variation: 0.5
      },
      { 
        frequency: 0.01, 
        amplitude: height * 0.09, 
        speed: 0.007, 
        offset: Math.random() * 10,
        color: colors.wave3,
        variation: 0.4
      },
      { 
        frequency: 0.03, 
        amplitude: height * 0.06, 
        speed: 0.015, 
        offset: Math.random() * 10,
        color: colors.wave4,
        variation: 0.6
      }
    ];
    
    // Add time variable for additional oscillation effects
    let time = 0;
    
    // Draw a single wave with enhanced effects
    const drawWave = (wave, index) => {
      ctx.beginPath();
      
      // Start at the left edge
      ctx.moveTo(0, height * 0.6); // Move starting point down a bit
      
      // Draw wave points with multiple harmonics for more organic look
      for (let x = 0; x <= width; x += 3) { // More points for smoother curves
        // Create complex wave pattern with multiple harmonics and time-based variations
        const y = height * 0.6 + 
          Math.sin(x * wave.frequency + wave.offset) * wave.amplitude + 
          Math.sin(x * wave.frequency * 0.5 + wave.offset * 1.3 + time * 0.2) * wave.amplitude * 0.5 +
          Math.sin(x * wave.frequency * 0.2 + wave.offset * 0.7 - time * 0.1) * wave.amplitude * 0.3 * wave.variation;
        
        ctx.lineTo(x, y);
      }
      
      // Complete the shape by drawing to bottom-right, bottom-left, and back
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      
      // Use advanced gradient for more vivid effect
      const gradient = ctx.createLinearGradient(width/2, 0, width/2, height);
      
      // Create a multi-stop gradient for more visual interest
      if (wave.color.includes('rgba')) {
        const rgbValues = wave.color.match(/\d+(\.\d+)?/g);
        if (rgbValues && rgbValues.length >= 4) {
          // Top - more transparent
          gradient.addColorStop(0, `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0.1)`);
          // Upper middle - more opaque for highlight
          gradient.addColorStop(0.3, `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${Math.min(0.95, parseFloat(rgbValues[3]) * 1.5)})`);
          // Lower middle - transition
          gradient.addColorStop(0.6, `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${parseFloat(rgbValues[3]) * 0.8})`);
          // Bottom - fade out
          gradient.addColorStop(1, `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0)`);
        } else {
          gradient.addColorStop(0, wave.color);
          gradient.addColorStop(1, wave.color.replace(/[\d\.]+\)$/, '0)'));
        }
      } else {
        gradient.addColorStop(0, wave.color);
        gradient.addColorStop(1, 'transparent');
      }
      
      ctx.fillStyle = gradient;
      ctx.fill();
    };
    
    // Animation function with enhanced effects
    const animate = (timestamp) => {
      // Update time for animation effects
      time += 0.01;
      
      // Apply a softer fade effect for smoother animation
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1.0;
      
      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';
      
      // Draw waves in reverse order (back to front)
      for (let i = waves.length - 1; i >= 0; i--) {
        waves[i].offset += waves[i].speed;
        drawWave(waves[i], i);
      }
      
      // Apply lighting effects
      ctx.globalCompositeOperation = 'screen';
      
      // Add occasional highlight flash
      if (Math.random() > 0.99) {
        ctx.fillStyle = darkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.07)';
        ctx.fillRect(0, 0, width, height);
      }
      
      // Add subtle light rays occasionally
      if (Math.random() > 0.997) {
        const rayX = Math.random() * width;
        const gradient = ctx.createRadialGradient(rayX, 0, 0, rayX, 0, height);
        gradient.addColorStop(0, darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.15)');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }
      
      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate(0);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [darkMode]); // Re-run effect when darkMode changes

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0"
      style={{ zIndex: -10 }}
    />
  );
};

export default WavyBackground;