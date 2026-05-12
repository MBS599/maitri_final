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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO titles per route
    const titles: Record<string, string> = {
      '/': 'Maitri Welfare Foundation | Empowering Lives, Protecting Nature',
      '/about': 'About Us | Maitri Welfare Foundation',
      '/team': 'Our Team | Maitri Welfare Foundation',
      '/awards': 'Awards & Recognition | Maitri Welfare Foundation',
      '/events': 'Activities & Events | Maitri Welfare Foundation',
      '/support': 'Support Our Cause | Maitri Welfare Foundation',
      '/contact': 'Contact Us | Maitri Welfare Foundation',
      '/volunteer': 'Volunteer Registration | Maitri Welfare Foundation',
      '/kaushalya': 'Project Kaushalya | Maitri Welfare Foundation',
      '/media': 'Media & Gallery | Maitri Welfare Foundation',
    };

    document.title = titles[pathname] || 'Maitri Welfare Foundation';
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" richColors />
      <Analytics />
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
  );
}

