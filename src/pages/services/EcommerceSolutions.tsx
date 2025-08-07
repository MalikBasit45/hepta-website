import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EcommerceSolutions: React.FC = () => {
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
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              E-commerce Solutions
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete online store solutions with payment processing and inventory management to grow your business.
            </p>
          </div>

          {/* Service Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Custom E-commerce Development</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Custom Online Store Development</li>
                <li>• Shopping Cart Implementation</li>
                <li>• Payment Gateway Integration</li>
                <li>• Inventory Management System</li>
                <li>• Order Processing & Fulfillment</li>
              </ul>
              <div className="text-2xl font-bold text-orange-600">$8,000 - $35,000</div>
              <div className="text-sm text-slate-500">Duration: 6-16 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Platform Migration</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Shopify to Custom Platform</li>
                <li>• WooCommerce to Shopify</li>
                <li>• Data Migration & SEO Preservation</li>
                <li>• Performance Optimization</li>
                <li>• Third-party Integrations</li>
              </ul>
              <div className="text-2xl font-bold text-orange-600">$5,000 - $20,000</div>
              <div className="text-sm text-slate-500">Duration: 3-8 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">E-commerce Optimization</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Conversion Rate Optimization</li>
                <li>• Mobile Commerce Optimization</li>
                <li>• SEO for E-commerce</li>
                <li>• Performance & Speed Optimization</li>
                <li>• Analytics & Reporting Setup</li>
              </ul>
              <div className="text-2xl font-bold text-orange-600">$3,000 - $12,000</div>
              <div className="text-sm text-slate-500">Duration: 2-6 weeks</div>
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
                  Custom e-commerce website design and development
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Secure payment gateway integration (Stripe, PayPal, etc.)
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Inventory and order management system
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customer account and loyalty program features
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-channel selling integration
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Analytics and reporting dashboard
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Platforms & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">E-commerce Platforms</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Shopify</li>
                    <li>• WooCommerce</li>
                    <li>• Magento</li>
                    <li>• BigCommerce</li>
                    <li>• Custom Solutions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Payment Gateways</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Stripe</li>
                    <li>• PayPal</li>
                    <li>• Square</li>
                    <li>• Authorize.net</li>
                    <li>• Apple Pay/Google Pay</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's build an e-commerce solution that converts visitors into customers and drives sales growth.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-lg"
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

export default EcommerceSolutions; 