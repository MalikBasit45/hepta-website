import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog2: React.FC = () => {
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
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
          alt="Blog header"
          className="w-full max-w-3xl rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4 text-center">Building a Brand: Strategies for Success</h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl">
          By John Smith | June 2, 2024
        </p>
        <div className="prose max-w-2xl mb-12">
          <p>
            A strong brand is more than just a logo or a catchy slogan. It’s the emotional connection you build with your audience. Successful branding requires a deep understanding of your target market, a clear value proposition, and consistent messaging across all touchpoints.
          </p>
          <p>
            In this article, we’ll discuss proven strategies for building a brand that stands out in a crowded marketplace. From defining your brand’s mission to leveraging social media, these tips will help you create a lasting impression.
          </p>
          <p>
            Remember, branding is an ongoing process. Stay authentic, listen to your customers, and be willing to adapt as your business grows.
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

export default Blog2;