/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components/Navigation';
import Home from './pages/Home';
import Team from './pages/Team';
import Awards from './pages/Awards';
import Events from './pages/Events';
import Support from './pages/Support';
import Contact from './pages/Contact';
import About from './pages/About';
import Volunteer from './pages/Volunteer';
import Kaushalya from './pages/Kaushalya';
import Media from './pages/Media';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { LanguageProvider } from './i18n/LanguageContext';
import GlobalTooltip from './components/GlobalTooltip';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" richColors />
      <GlobalTooltip />
      <Analytics />
      <SpeedInsights />
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/events" element={<Events />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/kaushalya" element={<Kaushalya />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
  );
}

