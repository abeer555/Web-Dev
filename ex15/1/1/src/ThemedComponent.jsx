import React, { createContext, useContext, useState } from "react";

// Create Theme Context
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Theme Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Themed Component that uses context
function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = {
    light: {
      backgroundColor: "white",
      color: "black",
      padding: "20px",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
      padding: "20px",
    },
  };

  return (
    <div style={themeStyles[theme]}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>This content changes based on the selected theme.</p>
      <p>Created by Abeer Gupta 23BCE1599</p>
    </div>
  );
}

// Main App Component
function ThemeApp() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Theme Switcher App</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default ThemeApp;
