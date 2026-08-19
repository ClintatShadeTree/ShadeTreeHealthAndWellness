/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ResourcesPage from './pages/ResourcesPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// In a real Decap CMS setup, this could be fetched dynamically if pre-rendered, 
// or loaded directly since it's in the repo.
import data from './content/data.json';

export default function App() {
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;
    
    const handleScroll = () => {
      document.documentElement.classList.add('is-scrolling');
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling');
      }, 600); // 600ms fade delay
    };
    
    // { passive: true } is crucial for scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-blue-900 font-sans selection:bg-earth-green selection:text-white">
        <Header data={data} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/services" element={<ServicesPage data={data} />} />
            <Route path="/testimonials" element={<TestimonialsPage data={data} />} />
            <Route path="/blog" element={<BlogPage data={data} />} />
            <Route path="/resources" element={<ResourcesPage data={data} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
          </Routes>
        </main>
        <Footer data={data} />
      </div>
    </Router>
  );
}
