import React, { useRef, useEffect } from 'react';

const FloatingGrid = ({ darkMode = false }) => {
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
    
    // Colors based on mode
    const colors = darkMode ? {
      background: '#0f172a',
      point: 'rgba(255, 255, 255, 0.4)',
      line: 'rgba(255, 255, 255, 0.1)'
    } : {
      background: '#f8fafc',
      point: 'rgba(100, 116, 139, 0.4)',
      line: 'rgba(100, 116, 139, 0.1)'
    };
    
    // Grid configuration
    const spacing = 50;
    const influenceDistance = 150;
    const points = [];
    
    // Mouse position
    const mouse = {
      x: width / 2,
      y: height / 2,
      active: false
    };
    
    // Click effect
    let clickWave = null;
    
    class GridPoint {
      constructor(x, y) {
        this.originX = x;
        this.originY = y;
        this.x = x;
        this.y = y;
        this.size = 1.5;
      }
      
      update() {
        const dx = mouse.x - this.originX;
        const dy = mouse.y - this.originY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Reset to origin position
        this.x = this.originX;
        this.y = this.originY;
        
        // Mouse influence
        if (mouse.active && distance < influenceDistance) {
          const force = (influenceDistance - distance) / influenceDistance;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 15;
          this.y -= Math.sin(angle) * force * 15;
        }
        
        // Click wave influence
        if (clickWave) {
          const dx = this.originX - clickWave.x;
          const dy = this.originY - clickWave.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxRadius = clickWave.maxRadius;
          
          // Only affect points within the expanding ring
          if (distance < clickWave.radius + 20 && distance > clickWave.radius - 20) {
            const force = (1 - Math.abs(clickWave.radius - distance) / 20) * 
                         (1 - clickWave.radius / maxRadius);
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 10;
            this.y += Math.sin(angle) * force * 10;
          }
        }
      }
      
      draw() {
        ctx.fillStyle = colors.point;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    class ClickWave {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 300;
        this.speed = 10;
      }
      
      update() {
        this.radius += this.speed;
        return this.radius < this.maxRadius;
      }
      
      draw() {
        ctx.strokeStyle = colors.line;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    
    // Initialize grid
    const initGrid = () => {
      points.length = 0;
      
      const cols = Math.floor(width / spacing) + 2;
      const rows = Math.floor(height / spacing) + 2;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          points.push(new GridPoint(i * spacing, j * spacing));
        }
      }
    };
    
    // Handle events
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    
    const handleMouseLeave = () => {
      mouse.active = false;
    };
    
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      clickWave = new ClickWave(
        e.clientX - rect.left,
        e.clientY - rect.top
      );
    };
    
    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initGrid();
    };
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    
    // Initialize
    initGrid();
    
    // Animation loop
    const animate = () => {
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, width, height);
      
      // Update and draw grid points
      points.forEach(point => {
        point.update();
        point.draw();
      });
      
      // Draw connections between close points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = dx * dx + dy * dy;
          
          if (distance < spacing * spacing * 1.5) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = colors.line;
            ctx.stroke();
          }
        }
      }
      
      // Update click wave
      if (clickWave) {
        const active = clickWave.update();
        if (active) {
          clickWave.draw();
        } else {
          clickWave = null;
        }
      }
      
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
    />
  );
};

export default FloatingGrid;