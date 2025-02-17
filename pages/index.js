import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Contact from "../components/Contact";
import Projects from "../components/Projects"
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