import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="parallax-tpl min-h-screen">
      <link
        href="https://fonts.googleapis.com/css2?family=Space%20Grotesk:wght@400;600;700&family=IBM%20Plex%20Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      <main>
        <section id="home"><HeroSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="skills"><SkillsSection /></section>
        <section id="experience"><ExperienceSection /></section>

        <section id="projects"><ProjectsSection /></section>
        <section id="education"><EducationSection /></section>
        <section id="testimonials"><TestimonialsSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;