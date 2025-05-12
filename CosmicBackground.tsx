import { useEffect, useRef } from "react";

const CosmicBackground = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsContainerRef.current) return;
    
    const starsContainer = starsContainerRef.current;
    const starsCount = window.innerWidth < 768 ? 50 : 100;
    
    // Clear any existing stars
    starsContainer.innerHTML = '';
    
    // Generate stars
    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random star size
      const size = Math.random() * 3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight * 2);
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      
      // Add twinkle animation with random delay
      star.style.animation = `twinkle 4s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      starsContainer.appendChild(star);
    }
    
    // Add a few shooting stars
    for (let i = 0; i < 5; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.classList.add('star');
      shootingStar.style.width = '2px';
      shootingStar.style.height = '2px';
      shootingStar.style.opacity = '0';
      
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * (window.innerHeight / 2));
      shootingStar.style.left = `${x}px`;
      shootingStar.style.top = `${y}px`;
      
      shootingStar.style.animation = `shooting-star 3s linear infinite`;
      shootingStar.style.animationDelay = `${Math.random() * 10}s`;
      
      starsContainer.appendChild(shootingStar);
    }
    
    // Clean up
    return () => {
      starsContainer.innerHTML = '';
    };
  }, []);

  return <div id="stars-container" ref={starsContainerRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default CosmicBackground;
