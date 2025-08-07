import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SEOMarketing: React.FC = () => {
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
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              SEO & Marketing
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Search engine optimization and digital marketing strategies to grow your business and increase online visibility.
            </p>
          </div>

          {/* Service Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Search Engine Optimization</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Technical SEO Audit</li>
                <li>• On-Page SEO Optimization</li>
                <li>• Keyword Research & Strategy</li>
                <li>• Content Optimization</li>
                <li>• Local SEO Services</li>
              </ul>
              <div className="text-2xl font-bold text-red-600">$1,500 - $8,000</div>
              <div className="text-sm text-slate-500">Duration: 1-4 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Digital Marketing</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Google Ads Management</li>
                <li>• Social Media Marketing</li>
                <li>• Email Marketing Campaigns</li>
                <li>• Content Marketing Strategy</li>
                <li>• Conversion Rate Optimization</li>
              </ul>
              <div className="text-2xl font-bold text-red-600">$2,000 - $12,000</div>
              <div className="text-sm text-slate-500">Duration: 2-8 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Ongoing Marketing</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Monthly SEO Maintenance</li>
                <li>• Content Creation & Publishing</li>
                <li>• Social Media Management</li>
                <li>• Analytics & Reporting</li>
                <li>• Performance Monitoring</li>
              </ul>
              <div className="text-2xl font-bold text-red-600">$1,000 - $5,000</div>
              <div className="text-sm text-slate-500">Duration: Monthly</div>
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
                  Comprehensive SEO audit and technical analysis
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Keyword research and content strategy development
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Google Ads and social media campaign management
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monthly performance reports and analytics
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conversion rate optimization and A/B testing
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ongoing strategy refinement and optimization
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Tools & Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">SEO Tools</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Google Search Console</li>
                    <li>• SEMrush</li>
                    <li>• Ahrefs</li>
                    <li>• Moz Pro</li>
                    <li>• Screaming Frog</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Marketing Platforms</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Google Ads</li>
                    <li>• Facebook Ads</li>
                    <li>• LinkedIn Ads</li>
                    <li>• Mailchimp</li>
                    <li>• HubSpot</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Boost Your Online Presence?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's develop a comprehensive SEO and marketing strategy that drives traffic and increases conversions.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
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

export default SEOMarketing; 