import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog1: React.FC = () => {
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
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Blog header"
          className="w-full max-w-3xl rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4 text-center">The Power of Creativity in Modern Design</h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl">
          By Jane Doe | June 1, 2024
        </p>
        <div className="prose max-w-2xl mb-12">
          <p>
            Creativity is the driving force behind innovation in design. In today’s fast-paced world, designers are constantly challenged to think outside the box and deliver solutions that are not only functional but also visually captivating. Whether it’s web design, branding, or product development, creativity sets the best apart from the rest.
          </p>
          <p>
            Embracing creativity means being open to new ideas, experimenting with different techniques, and learning from failures. It’s about pushing boundaries and not being afraid to take risks. The most memorable designs often come from moments of inspiration and a willingness to break the mold.
          </p>
          <p>
            In this blog post, we’ll explore how creativity can transform your design process and lead to more impactful results. We’ll also share tips on how to cultivate a creative mindset and foster innovation within your team.
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

export default Blog1;