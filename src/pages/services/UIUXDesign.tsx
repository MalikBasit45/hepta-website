import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UIUXDesign: React.FC = () => {
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
              UI/UX Design
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Beautiful and intuitive user interfaces that enhance user experience and drive engagement.
            </p>
          </div>

          {/* Service Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">User Research & Strategy</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• User Interviews & Surveys</li>
                <li>• Competitor Analysis</li>
                <li>• User Persona Development</li>
                <li>• Information Architecture</li>
                <li>• User Journey Mapping</li>
              </ul>
              <div className="text-2xl font-bold text-purple-600">$2,500 - $8,000</div>
              <div className="text-sm text-slate-500">Duration: 1-3 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">UI Design & Prototyping</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Wireframing & Mockups</li>
                <li>• High-Fidelity Prototypes</li>
                <li>• Design System Creation</li>
                <li>• Interactive Prototypes</li>
                <li>• Responsive Design</li>
              </ul>
              <div className="text-2xl font-bold text-purple-600">$4,000 - $15,000</div>
              <div className="text-sm text-slate-500">Duration: 2-6 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">UX Testing & Optimization</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Usability Testing</li>
                <li>• A/B Testing Setup</li>
                <li>• Analytics Integration</li>
                <li>• Performance Optimization</li>
                <li>• Accessibility Audits</li>
              </ul>
              <div className="text-2xl font-bold text-purple-600">$3,000 - $12,000</div>
              <div className="text-sm text-slate-500">Duration: 2-4 weeks</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What's Included</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Comprehensive user research and analysis
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Wireframes and interactive prototypes
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  High-fidelity UI designs and mockups
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Design system and component library
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Usability testing and user feedback
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Handoff documentation for developers
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Design Tools & Methods</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Design Tools</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Figma</li>
                    <li>• Adobe XD</li>
                    <li>• Sketch</li>
                    <li>• InVision</li>
                    <li>• Principle</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Research Methods</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• User Interviews</li>
                    <li>• Surveys</li>
                    <li>• Usability Testing</li>
                    <li>• Analytics</li>
                    <li>• A/B Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Create Amazing User Experiences?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's work together to design intuitive, beautiful interfaces that your users will love.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default UIUXDesign; 