import React, { useRef, useEffect } from 'react';

const ParticleNetwork = ({ darkMode = false }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Configure for high resolution displays
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);
    
    // Mouse position tracking
    const mouse = { x: width / 2, y: height / 2, radius: 100 };
    
    // Track if mouse is on canvas
    let mouseOnCanvas = false;
    
    // Colors based on mode
    const colors = darkMode ? {
      background: '#0f172a', // Dark blue
      particles: 'rgba(255, 255, 255, 0.5)',
      connections: 'rgba(255, 255, 255, 0.1)'
    } : {
      background: '#f8fafc', // Very light gray
      particles: 'rgba(100, 116, 139, 0.5)',
      connections: 'rgba(100, 116, 139, 0.1)'
    };
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 20) + 1;
        this.distance = null;
        this.color = colors.particles;
      }
      
      update() {
        // Calculate distance to mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        this.distance = distance;
        
        // Mouse repulsion effect
        if (distance < mouse.radius && mouseOnCanvas) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const dirX = forceDirectionX * force * this.density;
          const dirY = forceDirectionY * force * this.density;
          this.x -= dirX;
          this.y -= dirY;
        } else {
          // Return slowly to original position
          if (this.x !== this.baseX) {
            const dx = this.baseX - this.x;
            this.x += dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.baseY - this.y;
            this.y += dy / 10;
          }
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create particle array
    const particleCount = Math.min(Math.floor((width * height) / 9000), 100);
    let particleArray = [];
    
    const init = () => {
      particleArray = [];
      for (let i = 0; i < particleCount; i++) {
        particleArray.push(new Particle());
      }
    };
    
    // Handle mouse move
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouseOnCanvas = true;
    };
    
    // Handle mouse leave
    const handleMouseLeave = () => {
      mouseOnCanvas = false;
    };
    
    // Handle click - create pulse effect
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Increase mouse radius temporarily
      const originalRadius = mouse.radius;
      mouse.radius = 150;
      
      // Return to normal after delay
      setTimeout(() => {
        mouse.radius = originalRadius;
      }, 300);
    };
    
    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      init();
    };
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    
    // Initialize particles
    init();
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections between particles
      for (let i = 0; i < particleArray.length; i++) {
        for (let j = i + 1; j < particleArray.length; j++) {
          const dx = particleArray[i].x - particleArray[j].x;
          const dy = particleArray[i].y - particleArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            // Drawing lines with opacity based on distance
            ctx.beginPath();
            ctx.strokeStyle = colors.connections;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particleArray[i].x, particleArray[i].y);
            ctx.lineTo(particleArray[j].x, particleArray[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw all particles
      particleArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, [darkMode]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ 
        background: darkMode ? '#0f172a' : '#f8fafc'
      }}
    />
  );
};

export default ParticleNetwork;