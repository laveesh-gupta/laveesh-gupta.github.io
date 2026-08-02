import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function App() {
  console.log(
    "%cGreetings!",
    "color: #00ff00; font-size: 16px; font-weight: bold;",
  );
  console.log(
    "Since you're digging around in the console, you might be the kind of developer I want to work with. Let's chat!",
  );

  useEffect(() => {
    const splash = document.getElementById("initial-splash");
    if (splash) {
      splash.style.opacity = "0";
      splash.style.visibility = "hidden";

      const timer = setTimeout(() => {
        splash.remove();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="app">
      <div className="blob-container" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        <div className="blob blob-5" />
      </div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
