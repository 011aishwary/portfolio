"use client";

import React, { useEffect, useRef } from 'react';




const InteractiveParticles = ({
  particleCount = 50,
  minSize = 1,
  maxSize = 3,
  speed = 0.5,
  colors = ['#b19eef', '#ffffff'],
  mouseInteractionRadius = 5,
  clickInteractionRadius = 200,
  connectParticles = true,
  connectionDistance = 100,
  maxInteractiveParticles = 5
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, active: false });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Helper functions
    const random = (min, max) => Math.random() * (max - min) + min;
    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = random(-speed, speed);
        this.vy = random(-speed, speed);
        this.size = random(minSize, maxSize);
        this.colorHex = colors[Math.floor(Math.random() * colors.length)];
        this.colorRgb = hexToRgb(this.colorHex);
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.colorHex;
        ctx.fill();
        ctx.closePath(); // Optimization: Explicitly close path
      }

      update(isInteractive) {
        // Continuous movement
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction
        if (isInteractive && mouseRef.current.active && mouseRef.current.x !== null) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseInteractionRadius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseInteractionRadius - distance) / mouseInteractionRadius;
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;
            
            // Repulsion (Move away from cursor)
            this.x -= directionX;
            this.y -= directionY;
            
            // Attraction (commented out)
            // this.x += directionX; this.y += directionY;
          }
        }
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      // Adjust particle count based on screen width
      // If width < 768 (mobile), reduce count significantly (e.g., to 1/3 or a fixed small number)
      // Otherwise use the requested particleCount
      let effectiveCount = particleCount;
      if (width < 768) {
         effectiveCount = Math.floor(particleCount * 0.3); // 30% of requested count for mobile
         if (effectiveCount < 15) effectiveCount = 15; // Ensure at least 15 particles
      } else if (width < 1024) {
          effectiveCount = Math.floor(particleCount * 0.6); // 60% for tablets
      }
      
      for (let i = 0; i < effectiveCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Determine interactive particles
      let interactiveIndices = new Set();
      if (mouseRef.current.active && mouseRef.current.x !== null) {
        const distances = particlesRef.current.map((p, index) => {
           const dx = mouseRef.current.x - p.x;
           const dy = mouseRef.current.y - p.y;
           // minimal distance calculation (squared)
           return { index, distSq: dx * dx + dy * dy };
        });
        
        // Sort by distance and pick closest ones
        distances.sort((a, b) => a.distSq - b.distSq);
        
        // Limit to maxInteractiveParticles
        const limit = Math.min(maxInteractiveParticles, particlesRef.current.length);
        for(let i = 0; i < limit; i++) {
           interactiveIndices.add(distances[i].index);
        }
      }

      particlesRef.current.forEach((particle, index) => {
        particle.update(interactiveIndices.has(index));
        particle.draw();
      });

      if (connectParticles) {
        connect();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const connect = () => {
      for (let a = 0; a < particlesRef.current.length; a++) {
        for (let b = a; b < particlesRef.current.length; b++) {
          const dx = particlesRef.current[a].x - particlesRef.current[b].x;
          const dy = particlesRef.current[a].y - particlesRef.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacityValue = 1 - (distance / connectionDistance);
             // Use the color of the first particle for the line
            const rgb = particlesRef.current[a].colorRgb;
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacityValue * 0.5})`; // Slightly transparent lines
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[a].x, particlesRef.current[a].y);
            ctx.lineTo(particlesRef.current[b].x, particlesRef.current[b].y);
            ctx.stroke();
            ctx.closePath(); // Optimization
          }
        }
      }
    };

    // Event Listeners
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
        // Use clientX/Y directly since we want window-relative coordinates for a full-screen canvas
        // or adjust if canvas is not full screen. 
        // Assuming canvas is full screen fixed/absolute:
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
        mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };
    
    const handleClick = (e) => {
       const rect = canvas.getBoundingClientRect();
       const clickX = e.clientX - rect.left;
       const clickY = e.clientY - rect.top;
       
       particlesRef.current.forEach(particle => {
          const dx = particle.x - clickX;
          const dy = particle.y - clickY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if(distance < clickInteractionRadius) {
             // Push particles away strongly on click
             const force = (clickInteractionRadius - distance ) / (clickInteractionRadius +500);
             const angle = Math.atan2(dy, dx);
             particle.vx += Math.cos(angle) * force * 10; 
             particle.vy += Math.sin(angle) * force * 10;
          }
       });
    };

    window.addEventListener('resize', handleResize);maxInteractiveParticles
    window.addEventListener('mousemove', handleMouseMove);
    // document.addEventListener('mouseleave', handleMouseLeave); // optional
    window.addEventListener('click', handleClick);

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        // canvas.removeEventListener('mousemove', handleMouseMove); // Removed canvas listener
        // canvas.removeEventListener('mouseleave', handleMouseLeave); // Removed canvas listener
        // canvas.removeEventListener('click', handleClick); // Removed canvas listener
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [particleCount, minSize, maxSize, speed, colors, mouseInteractionRadius, clickInteractionRadius, connectParticles, connectionDistance]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default InteractiveParticles;
