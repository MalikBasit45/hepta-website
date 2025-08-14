import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      alt: 'Luxury Hotel Lobby',
      title: 'Grand Hotel Lobby'
    },
    {
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
      alt: 'Beach Resort',
      title: 'Beach Resort View'
    },
    {
      src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
      alt: 'Mountain Lodge',
      title: 'Mountain Lodge'
    },
    {
      src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
      alt: 'Desert Oasis',
      title: 'Desert Oasis Resort'
    },
    {
      src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
      alt: 'Hotel Room',
      title: 'Luxury Suite'
    },
    {
      src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
      alt: 'Hotel Pool',
      title: 'Infinity Pool'
    },
    {
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
      alt: 'Hotel Restaurant',
      title: 'Fine Dining'
    },
    {
      src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      alt: 'Hotel Spa',
      title: 'Spa & Wellness'
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600">Explore our beautiful properties and amenities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm">Click to view</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={images.map(img => ({ src: img.src, alt: img.alt }))}
        />
      </div>
    </div>
  );
};

export default Gallery;
