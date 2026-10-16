import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ResumeModal from '../components/ResumeModal';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <Header onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
