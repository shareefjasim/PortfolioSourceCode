// import React from 'react';

// const Card = ({ children, style }) => {
//   return (
//     <div style={{ 
//       border: '1px solid #e0e0e0', 
//       borderRadius: '8px', 
//       padding: '16px', 
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
//       ...style 
//     }}>
//       {children}
//     </div>
//   );
// }

// export default Card;


import React, { useRef, useEffect } from 'react';

const Card = ({ children, style }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = cardRef.current;
      const cardRect = card.getBoundingClientRect();

      // Calculate the horizontal and vertical distances from the mouse to the card's edges
      const dx = Math.max(cardRect.left - e.clientX, e.clientX - cardRect.right, 0);
      const dy = Math.max(cardRect.top - e.clientY, e.clientY - cardRect.bottom, 0);

      // Calculate the actual distance from the mouse to the closest edge of the card
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        // Calculate the rotation values based on the mouse's position relative to the card
        const rotateX = (e.clientX - (cardRect.left + cardRect.width / 2)) / 50; // Adjust the divisor for stronger/weaker effect
        const rotateY = -(e.clientY - (cardRect.top + cardRect.height / 2)) / 50;

        card.style.transform = `perspective(1000px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
      } else {
        card.style.transform = 'none';
      }
    };


    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardRef} style={{ 
      border: '0px solid #e0e0e0', 
      borderRadius: '0px', 
      padding: '0px', 
      boxShadow: '0px 0px 100px rgba(0, 0, 0, 0.3)', 
      transition: 'transform 0.2s', // Smooth out the movement
      ...style 
    }}>
      {children}
    </div>
  );
}

export default Card;
