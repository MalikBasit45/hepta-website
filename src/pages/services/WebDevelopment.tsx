import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WebDevelopment: React.FC = () => {
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
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Web Development
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Custom web applications built with modern technologies and best practices to drive your business forward.
            </p>
          </div>

          {/* Service Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Frontend Development</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• React.js & Next.js Applications</li>
                <li>• Vue.js & Angular Development</li>
                <li>• Responsive Web Design</li>
                <li>• Progressive Web Apps (PWA)</li>
                <li>• Single Page Applications (SPA)</li>
              </ul>
              <div className="text-2xl font-bold text-blue-600">$3,000 - $15,000</div>
              <div className="text-sm text-slate-500">Duration: 2-8 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Backend Development</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Node.js & Express.js APIs</li>
                <li>• Python Django & Flask</li>
                <li>• PHP Laravel Development</li>
                <li>• Database Design & Optimization</li>
                <li>• RESTful & GraphQL APIs</li>
              </ul>
              <div className="text-2xl font-bold text-blue-600">$4,000 - $20,000</div>
              <div className="text-sm text-slate-500">Duration: 3-10 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Full-Stack Development</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Complete Web Applications</li>
                <li>• MERN Stack Development</li>
                <li>• MEAN Stack Solutions</li>
                <li>• Custom CMS Development</li>
                <li>• Third-party Integrations</li>
              </ul>
              <div className="text-2xl font-bold text-blue-600">$8,000 - $35,000</div>
              <div className="text-sm text-slate-500">Duration: 6-16 weeks</div>
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
                  Custom design and development tailored to your brand
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Responsive design for all devices and browsers
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SEO optimization and performance tuning
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Security implementation and testing
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Content management system integration
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ongoing support and maintenance
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Frontend</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• React.js</li>
                    <li>• Next.js</li>
                    <li>• Vue.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Backend</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Node.js</li>
                    <li>• Python</li>
                    <li>• PHP</li>
                    <li>• PostgreSQL</li>
                    <li>• MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that perfectly fits your business needs.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
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

export default WebDevelopment; 