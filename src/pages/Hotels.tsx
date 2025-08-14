import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: 'Hepta Grand Hotel',
      location: 'New York, USA',
      description: 'Luxury hotel in the heart of Manhattan with stunning city views and world-class amenities. Experience the epitome of urban sophistication.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 5,
      price: 'From $450/night'
    },
    {
      id: 2,
      name: 'Hepta Beach Resort',
      location: 'Maldives',
      description: 'Overwater bungalows with pristine beaches and crystal clear waters. Your perfect tropical paradise awaits.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 5,
      price: 'From $800/night'
    },
    {
      id: 3,
      name: 'Hepta Mountain Lodge',
      location: 'Swiss Alps',
      description: 'Cozy mountain retreat with breathtaking alpine views. Perfect for adventure seekers and nature lovers.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 5,
      price: 'From $350/night'
    },
    {
      id: 4,
      name: 'Hepta Desert Oasis',
      location: 'Dubai, UAE',
      description: 'Luxurious desert resort with world-class amenities and stunning desert landscapes. Experience Arabian hospitality.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 5,
      price: 'From $600/night'
    },
    {
      id: 5,
      name: 'Hepta Coastal Villa',
      location: 'Santorini, Greece',
      description: 'Breathtaking coastal views with infinity pools and Mediterranean charm. Your dream Greek getaway.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 5,
      price: 'From $550/night'
    },
    {
      id: 6,
      name: 'Hepta Urban Retreat',
      location: 'Tokyo, Japan',
      description: 'Modern luxury in the heart of Tokyo with traditional Japanese hospitality and cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 5,
      price: 'From $400/night'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Hotels
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Discover our luxury destinations
          </motion.p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Hotel Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {hotel.price}
                  </div>
                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                    <span className="text-yellow-400 mr-1">⭐</span>
                    {hotel.rating}.0
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {hotel.name}
                  </h3>
                  <p className="text-gray-600 mb-3 font-medium">
                    {hotel.location}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {hotel.description}
                  </p>
                  
                  {/* Action Button */}
                  <Link to={`/hotels/${hotel.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Load More Hotels
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Experience Luxury?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Book your stay at one of our world-class properties and create unforgettable memories.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;
