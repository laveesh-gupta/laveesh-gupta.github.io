import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  console.log(
    "%cGreetings!",
    "color: #00ff00; font-size: 16px; font-weight: bold;",
  );
  console.log(
    "Since you're digging around in the console, you might be the kind of developer I want to work with. Let's chat!",
  );
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
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
