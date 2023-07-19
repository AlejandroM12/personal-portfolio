import { useState, useEffect } from "react";
import { About, Header, Home, Qualification, Skills } from "@/components";
import { contextDarkMode } from "./context";
import "./style/index.css";

const App = () => {
  const [IsdarkMode, setIsDarkMode] = useState(false);

  const toggleIsDarkMode = () => {
    localStorage.setItem("isDarkMode", JSON.stringify(!IsdarkMode));
    setIsDarkMode(!IsdarkMode);
  };

  useEffect(() => {
    const isDark = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(isDark);
  }, [IsdarkMode]);

  return (
    <contextDarkMode.Provider value={{ IsdarkMode, toggleIsDarkMode }}>
      <div className="App">
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
        </main>
      </div>
    </contextDarkMode.Provider>
  );
};

export default App;
