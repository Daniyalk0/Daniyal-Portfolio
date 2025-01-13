import React, { createContext, useContext, useEffect, useState } from "react";

// 1. Create a Context
const MyContext = createContext();

// 2. Create a Provider Component
export const MyProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [textL, setTextL] = useState(true);
  const [currentTa, setCurrentTa] = useState(false);
  const [currentUr, setCurrentUr] = useState(false);
  const [currentGm, setCurrentGm] = useState(false);
  
  useEffect(() => {
    console.log(currentLang);
  }, [currentLang]);

  return (
    <MyContext.Provider
      value={{
        isTransitioning,
        setIsTransitioning,
        currentLang,
        setCurrentLang,
        textL,
        setTextL,
        currentTa,
        setCurrentTa,
        setCurrentUr,
        currentUr,
        setCurrentGm,
        currentGm
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
