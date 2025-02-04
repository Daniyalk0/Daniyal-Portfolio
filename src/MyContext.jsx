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
  const [currentFr, setCurrentFr] = useState(false);
  
  useEffect(() => {
    console.log(currentLang);
  }, [currentLang]);

  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const themecheck = localStorage.getItem("themeMode");
    if (themecheck) {
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(themecheck);
      setThemeMode(themecheck);
    }
  }, [themeMode]);

  const themeSwitch = () => {
    const theme = themeMode === "dark" ? "light" : "dark";
    localStorage.setItem("themeMode", theme);
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
    setThemeMode(theme);
  };

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
        currentGm,
        currentFr,
        setCurrentFr,
        themeMode,
        setThemeMode,
        themeSwitch
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
