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
      <Navbar />

      <main>
        <HeroSection />

        <AboutSection />

        <SkillsSection />

        <ExperienceSection />

        <ProjectsSection />

        <EducationSection />

        <TestimonialsSection />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;