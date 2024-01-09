import React, { createContext, useContext } from "react";

const AnimatePage = createContext();

export default function AnimatePageProvider({ children }) {
  const animateData = {
    intial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <AnimatePage.Provider value={animateData}>
      {children}
    </AnimatePage.Provider>);
}

export const useAnimatePage = () => {
  return useContext(AnimatePage);
};
