import './styles/main.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

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
    <Router>
      <div className="app-root">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <DashboardPreview />
                <Features />
                <HowItWorks />
                <Statistics />
                <Pricing />
                <Testimonials />
                <Integrations />
                <CTA />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;