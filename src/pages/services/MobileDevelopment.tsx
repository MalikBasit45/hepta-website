import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileDevelopment: React.FC = () => {
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
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Mobile Development
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.
            </p>
          </div>

          {/* Service Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">iOS Development</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Native iOS Apps (Swift/Objective-C)</li>
                <li>• iPhone & iPad Applications</li>
                <li>• App Store Optimization</li>
                <li>• iOS UI/UX Design</li>
                <li>• Apple Watch & TV Apps</li>
              </ul>
              <div className="text-2xl font-bold text-green-600">$5,000 - $25,000</div>
              <div className="text-sm text-slate-500">Duration: 3-12 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Android Development</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• Native Android Apps (Kotlin/Java)</li>
                <li>• Google Play Store Optimization</li>
                <li>• Material Design Implementation</li>
                <li>• Android Widgets & Services</li>
                <li>• Android TV Applications</li>
              </ul>
              <div className="text-2xl font-bold text-green-600">$4,500 - $22,000</div>
              <div className="text-sm text-slate-500">Duration: 3-10 weeks</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Cross-Platform Development</h3>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• React Native Applications</li>
                <li>• Flutter Development</li>
                <li>• Xamarin Solutions</li>
                <li>• Ionic Framework Apps</li>
                <li>• Progressive Web Apps</li>
              </ul>
              <div className="text-2xl font-bold text-green-600">$6,000 - $30,000</div>
              <div className="text-sm text-slate-500">Duration: 4-14 weeks</div>
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
                  Custom mobile app design and development
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Backend API integration and database setup
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Push notifications and real-time features
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  App store submission and optimization
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Testing across multiple devices
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ongoing maintenance and updates
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Native Development</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Swift & Objective-C</li>
                    <li>• Kotlin & Java</li>
                    <li>• Xcode & Android Studio</li>
                    <li>• iOS SDK</li>
                    <li>• Android SDK</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Cross-Platform</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• React Native</li>
                    <li>• Flutter</li>
                    <li>• Xamarin</li>
                    <li>• Ionic</li>
                    <li>• Progressive Web Apps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's create a mobile application that engages your users and drives business growth.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
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

export default MobileDevelopment; 