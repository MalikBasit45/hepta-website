import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog4: React.FC = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-white flex flex-col items-center pt-8 px-4"
      >
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
          alt="Blog header"
          className="w-full max-w-3xl rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4 text-center">Building Scalable React Applications</h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl">
          By David Kim | February 28, 2024
        </p>
        <div className="prose max-w-2xl mb-12">
          <p>
            Building scalable React applications requires careful planning and implementation of modern architecture patterns. As applications grow in complexity, maintaining code quality and performance becomes increasingly challenging.
          </p>
          <p>
            In this comprehensive guide, we'll explore the key principles of scalable React development, including component composition, state management strategies, and performance optimization techniques. We'll also discuss how to structure your codebase for long-term maintainability.
          </p>
          <p>
            Whether you're building a small application or a large-scale enterprise system, these best practices will help you create robust, maintainable, and performant React applications that can grow with your business needs.
          </p>
        </div>
        <Link to="/blog" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mb-8">
          ← Back to Blog
        </Link>
      </motion.div>
      <Footer />
    </>
  );
};

export default Blog4; 