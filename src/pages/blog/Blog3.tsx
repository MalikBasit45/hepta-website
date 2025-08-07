import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog3: React.FC = () => {
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
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
          alt="Blog header"
          className="w-full max-w-3xl rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4 text-center">The Future of Web Development: Trends to Watch</h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl">
          By Alex Lee | June 3, 2024
        </p>
        <div className="prose max-w-2xl mb-12">
          <p>
            Web development is constantly evolving, with new technologies and frameworks emerging every year. Staying ahead of the curve is essential for developers who want to create modern, efficient, and user-friendly websites.
          </p>
          <p>
            In this post, we’ll highlight some of the most exciting trends in web development, including the rise of Jamstack, advances in AI-driven interfaces, and the growing importance of web accessibility.
          </p>
          <p>
            By embracing these trends, you can ensure your projects remain relevant and competitive in the ever-changing digital landscape.
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

export default Blog3;