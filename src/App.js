import './App.css';
import './styles/main.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Statistics from './components/Statistics';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Integrations from './components/Integrations';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <DashboardPreview />
        <Features />
        <HowItWorks />
        <Statistics />
        <Pricing />
        <Testimonials />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;