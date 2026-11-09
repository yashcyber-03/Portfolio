import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import { About, Skills, Services, Journey } from "./components/Sections.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-silver focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Journey />
        <Contact />
      </main>
      <footer className="border-t border-line px-6 py-8 text-center text-sm text-mute">
        © {new Date().getFullYear()} Yash Supare. Built with React, Vite and Tailwind CSS.
      </footer>
    </>
  );
}
