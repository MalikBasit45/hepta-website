import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SaaSDashboard: React.FC = () => {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              SaaS Dashboard
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive SaaS dashboard with analytics and user management.
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Web Development
              </span>
            </div>
          </div>

          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="SaaS Dashboard - Main Interface"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                alt="SaaS Dashboard - Analytics"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                alt="SaaS Dashboard - User Management"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="SaaS Dashboard - Reports"
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
                  We developed a comprehensive SaaS dashboard that provides powerful analytics, user management, and business intelligence tools. The platform features real-time data visualization, customizable reports, and advanced user role management.
                </p>
                <p>
                  The project included interactive charts and graphs, automated reporting, user activity tracking, and integration with third-party services. We implemented a scalable architecture that can handle thousands of concurrent users and millions of data points.
                </p>
                <p>
                  Key features include user authentication and authorization, subscription management, billing integration, API documentation, real-time notifications, and comprehensive admin panel for system management.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Vue.js</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Django</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Chart.js</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Redis</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Details</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Duration:</strong> 20 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Team Size:</strong> 6 developers</span>
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
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Build Your SaaS Dashboard?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's create a powerful SaaS platform that provides valuable insights and drives business growth.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
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

export default SaaSDashboard;
