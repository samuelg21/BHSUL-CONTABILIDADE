import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FanfarraoEasterEgg from './components/FanfarraoEasterEgg';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-roboto">
      <Header />
      <main className="grow">
        <Hero />
        <Mission />
        <Services />
        <Features />
      </main>
      <Footer />
      <WhatsAppButton />
      <FanfarraoEasterEgg />
    </div>
  );
}

export default App;
