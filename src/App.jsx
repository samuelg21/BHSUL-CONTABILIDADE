import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import Features from './components/Features';
import GovernmentLinks from './components/GovernmentLinks';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-inter">
      <Header />
      <main className="grow">
        <Hero />
        <Mission />
        <Services />
        <Features />
        <GovernmentLinks />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
