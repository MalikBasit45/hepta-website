import { motion } from 'framer-motion';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Hepta Opens New Luxury Resort in Bali',
      excerpt: 'We are excited to announce the opening of our newest property in the heart of Bali, offering guests an unparalleled luxury experience.',
      date: '2024-01-15',
      category: 'Property News',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Sustainable Tourism Initiatives at Hepta',
      excerpt: 'Learn about our commitment to environmental responsibility and the new sustainable practices we\'ve implemented across all our properties.',
      date: '2024-01-10',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Award-Winning Chef Joins Hepta Culinary Team',
      excerpt: 'World-renowned chef Maria Rodriguez has joined our culinary team, bringing her innovative approach to fine dining to our guests.',
      date: '2024-01-05',
      category: 'Culinary',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Hepta Named Best Luxury Hotel Chain 2024',
      excerpt: 'We are honored to receive the prestigious award for Best Luxury Hotel Chain at the International Hospitality Awards.',
      date: '2024-01-01',
      category: 'Awards',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
      readTime: '2 min read'
    },
    {
      id: 5,
      title: 'New Wellness Programs Launch Across Properties',
      excerpt: 'Discover our comprehensive wellness programs designed to enhance your stay with personalized health and wellness experiences.',
      date: '2023-12-28',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Hepta Partners with Local Artisans',
      excerpt: 'Our new partnership with local artisans brings authentic cultural experiences and unique handcrafted items to our guests.',
      date: '2023-12-20',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
      readTime: '4 min read'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Latest News</h1>
          <p className="text-xl text-gray-600">Stay updated with the latest happenings at Hepta</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {formatDate(article.date)}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
