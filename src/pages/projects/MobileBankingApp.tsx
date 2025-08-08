import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileBankingApp: React.FC = () => {
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
              Mobile Banking App
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Secure and intuitive mobile banking application for iOS and Android.
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Mobile Development
              </span>
            </div>
          </div>

          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
                alt="Mobile Banking App - Main Interface"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop"
                alt="Mobile Banking App - Transaction History"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop"
                alt="Mobile Banking App - Security Features"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
                alt="Mobile Banking App - Dashboard"
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
                  We developed a comprehensive mobile banking application that provides secure and convenient banking services for iOS and Android users. The app features advanced security measures, real-time transaction monitoring, and intuitive user interface design.
                </p>
                <p>
                  The project included biometric authentication, push notifications for transaction alerts, bill payment functionality, and comprehensive account management features. We implemented state-of-the-art encryption and security protocols to ensure user data protection.
                </p>
                <p>
                  Key features include account balance checking, fund transfers, bill payments, transaction history, security settings, and customer support integration with live chat functionality.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">React Native</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Firebase</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Redux</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Stripe</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">AWS</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Details</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Duration:</strong> 16 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Team Size:</strong> 5 developers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Role:</strong> Mobile development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Status:</strong> Live on App Store & Play Store</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Build Your Mobile Banking App?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's create a secure and user-friendly mobile banking solution that meets regulatory requirements.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
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

export default MobileBankingApp;
