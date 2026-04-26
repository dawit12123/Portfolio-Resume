import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="glow glow-top-right" />
      <div className="glow glow-bottom-left" />

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <div className="divider" />
        <About />
        <div className="divider" />
        <TechStack />
        <div className="divider" />
        <Services />
        <div className="divider" />
        <Portfolio />
        <div className="divider" />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
