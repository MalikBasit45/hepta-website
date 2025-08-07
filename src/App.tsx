import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Blog1 from './pages/blog/Blog1';
import Blog2 from './pages/blog/Blog2';
import Blog3 from './pages/blog/Blog3';
import Blog4 from './pages/blog/Blog4';
import Blog5 from './pages/blog/Blog5';
import Blog6 from './pages/blog/Blog6';
import WebDevelopment from './pages/services/WebDevelopment';
import UIUXDesign from './pages/services/UIUXDesign';
import MobileDevelopment from './pages/services/MobileDevelopment';
import EcommerceSolutions from './pages/services/EcommerceSolutions';
import SEOMarketing from './pages/services/SEOMarketing';
import Consulting from './pages/services/Consulting';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 0,
    });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
            <Route path="/blog/blog1" element={<Blog1 />} />
  <Route path="/blog/blog2" element={<Blog2 />} />
  <Route path="/blog/blog3" element={<Blog3 />} />
  <Route path="/blog/blog4" element={<Blog4 />} />
  <Route path="/blog/blog5" element={<Blog5 />} />
  <Route path="/blog/blog6" element={<Blog6 />} />
  <Route path="/services/webdevelopment" element={<WebDevelopment />} />
  <Route path="/services/uiuxdesign" element={<UIUXDesign />} />
  <Route path="/services/mobiledevelopment" element={<MobileDevelopment />} />
  <Route path="/services/ecommercesolutions" element={<EcommerceSolutions />} />
  <Route path="/services/seomarketing" element={<SEOMarketing />} />
  <Route path="/services/consulting" element={<Consulting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
