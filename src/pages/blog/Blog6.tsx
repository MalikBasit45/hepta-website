import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog6: React.FC = () => {
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
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
          alt="Blog header"
          className="w-full max-w-3xl rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4 text-center">Creating Effective User Personas</h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl">
          By Emma Thompson | February 15, 2024
        </p>
        <div className="prose max-w-2xl mb-12">
          <p>
            User personas are essential tools for understanding your target audience and creating products that truly meet their needs. A well-crafted persona goes beyond demographics to capture the motivations, goals, and pain points of your users.
          </p>
          <p>
            In this guide, we'll walk through the process of creating detailed user personas that will inform your design decisions and marketing strategies. We'll cover research methods, persona development techniques, and how to use personas effectively throughout your product development cycle.
          </p>
          <p>
            By investing time in understanding your users through personas, you'll be able to create more targeted, effective solutions that resonate with your audience and drive better business outcomes.
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

export default Blog6; 