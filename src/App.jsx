import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000); // max fallback
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      {!showLoader && (
        <div>
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
