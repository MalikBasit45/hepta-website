import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Consulting: React.FC = () => {
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
            <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Technology Consulting
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic technology consulting to help you make informed decisions and optimize your digital infrastructure.
            </p>
          </div>

          {/* Service Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Technology Strategy</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Digital Transformation Planning</li>
                <li>• Technology Stack Assessment</li>
                <li>• Architecture Review & Design</li>
                <li>• Scalability Planning</li>
                <li>• Security Strategy Development</li>
              </ul>
              <div className="text-2xl font-bold text-indigo-600">$150 - $300/hr</div>
              <div className="text-sm text-slate-500">Duration: 1-8 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Management</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Project Planning & Roadmapping</li>
                <li>• Team Structure & Hiring</li>
                <li>• Development Process Optimization</li>
                <li>• Quality Assurance Strategy</li>
                <li>• Risk Assessment & Mitigation</li>
              </ul>
              <div className="text-2xl font-bold text-indigo-600">$200 - $400/hr</div>
              <div className="text-sm text-slate-500">Duration: 2-12 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Technical Audits</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Code Quality Assessment</li>
                <li>• Performance Optimization</li>
                <li>• Security Vulnerability Analysis</li>
                <li>• Infrastructure Review</li>
                <li>• Compliance & Best Practices</li>
              </ul>
              <div className="text-2xl font-bold text-indigo-600">$2,000 - $15,000</div>
              <div className="text-sm text-slate-500">Duration: 1-4 weeks</div>
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
                  Comprehensive technology assessment and analysis
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Strategic roadmap and implementation plan
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Technology stack recommendations and optimization
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Security and compliance guidance
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Team structure and process optimization
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ongoing support and follow-up consultations
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Consulting Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Technology</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Web Development</li>
                    <li>• Mobile Development</li>
                    <li>• Cloud Infrastructure</li>
                    <li>• DevOps & CI/CD</li>
                    <li>• Data & Analytics</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Business</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Digital Transformation</li>
                    <li>• Process Optimization</li>
                    <li>• Team Building</li>
                    <li>• Project Management</li>
                    <li>• Vendor Selection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Optimize Your Technology Strategy?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's work together to develop a technology strategy that aligns with your business goals and drives growth.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg"
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

export default Consulting; 