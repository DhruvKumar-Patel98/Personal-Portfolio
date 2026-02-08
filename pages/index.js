import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Contact from "../components/Contact";
import FloatingBottom from "@/components/FloatingBottom";
import Footer from "../components/Footer"; 
import Certificates from "../components/Certificates";
export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Certificates/>
      <Contact />
      <FloatingBottom />
      <Footer />
      </div>
    );
}