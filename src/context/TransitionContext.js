import React, { createContext, useState, useContext } from 'react';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [originRect, setOriginRect] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <TransitionContext.Provider value={{
      selectedProject,
      setSelectedProject,
      originRect,
      setOriginRect,
      isTransitioning,
      setIsTransitioning
    }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);