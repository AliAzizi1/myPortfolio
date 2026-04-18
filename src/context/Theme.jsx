import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      localStorage.setItem('isDark', !isDarkMode)
    };
  
    const value = {
      isDarkMode,
      toggleTheme,
      setIsDarkMode
    };
  
    return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    );
};
