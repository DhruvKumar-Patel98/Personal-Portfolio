import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import FloatingBottom from "@/components/FloatingBottom";
import Footer from "../components/Footer"; 

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <FloatingBottom />
      <Footer />
      </div>
    );
}