import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog5: React.FC = () => {
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
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
          alt="Blog header"
          className="w-full max-w-3xl rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4 text-center">The Impact of AI on Digital Marketing</h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl">
          By Lisa Wang | February 20, 2024
        </p>
        <div className="prose max-w-2xl mb-12">
          <p>
            Artificial intelligence is revolutionizing the way businesses approach digital marketing. From personalized content recommendations to automated campaign optimization, AI is transforming every aspect of the marketing landscape.
          </p>
          <p>
            In this article, we'll explore how AI technologies are being used to enhance customer targeting, improve conversion rates, and create more engaging user experiences. We'll also discuss the ethical considerations and best practices for implementing AI-driven marketing strategies.
          </p>
          <p>
            As AI continues to evolve, marketers who embrace these technologies will have a significant competitive advantage in reaching and engaging their target audiences more effectively than ever before.
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

export default Blog5; 