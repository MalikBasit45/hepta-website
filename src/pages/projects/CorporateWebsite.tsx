import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CorporateWebsite: React.FC = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Corporate Website
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional corporate website with modern design and excellent performance.
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Web Design
              </span>
            </div>
          </div>

          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Corporate Website - Homepage"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
                alt="Corporate Website - About Page"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
                alt="Corporate Website - Services Page"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Corporate Website - Contact Page"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Overview</h2>
              <div className="prose max-w-none text-slate-600 space-y-4">
                <p>
                  We designed and developed a professional corporate website that effectively communicates the company's brand identity and values. The website features a clean, modern design with excellent user experience and performance optimization.
                </p>
                <p>
                  The project included responsive design for all devices, SEO optimization for better search engine visibility, content management system integration, and analytics tracking. We implemented fast loading times and accessibility features to ensure compliance with web standards.
                </p>
                <p>
                  Key features include company information pages, service descriptions, team member profiles, contact forms, blog section, and integration with social media platforms for enhanced online presence.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Vercel</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Framer Motion</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Sanity CMS</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Details</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Duration:</strong> 8 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Team Size:</strong> 3 developers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Role:</strong> Full-stack development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Status:</strong> Live & maintained</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Build Your Corporate Website?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's create a professional website that effectively represents your brand and drives business growth.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
            >
              Start Your Project
            </Link>
          </div>

          {/* Back to Portfolio */}
          <div className="text-center mt-12">
            <Link to="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default CorporateWebsite;
