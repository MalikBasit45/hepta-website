import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends and technologies that are shaping the future of web development and how they can benefit your business.',
      author: 'Alex Johnson',
      date: 'March 15, 2024',
      category: 'Technology',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop'
    },
    {
      title: 'Designing for Mobile-First: Best Practices',
      excerpt: 'Learn the essential principles and best practices for creating mobile-first designs that provide exceptional user experiences.',
      author: 'Sarah Chen',
      date: 'March 10, 2024',
      category: 'Design',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop'
    },
    {
      title: 'Optimizing Website Performance for Better SEO',
      excerpt: 'Discover how website performance impacts your search engine rankings and learn strategies to improve your site\'s speed.',
      author: 'Mike Rodriguez',
      date: 'March 5, 2024',
      category: 'SEO',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    },
    {
      title: 'Building Scalable React Applications',
      excerpt: 'A comprehensive guide to building scalable React applications with modern architecture patterns and best practices.',
      author: 'David Kim',
      date: 'February 28, 2024',
      category: 'Development',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop'
    },
    {
      title: 'The Impact of AI on Digital Marketing',
      excerpt: 'How artificial intelligence is revolutionizing digital marketing strategies and what it means for businesses.',
      author: 'Lisa Wang',
      date: 'February 20, 2024',
      category: 'Marketing',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop'
    },
    {
      title: 'Creating Effective User Personas',
      excerpt: 'Learn how to create detailed user personas that will help you design better products and marketing strategies.',
      author: 'Emma Thompson',
      date: 'February 15, 2024',
      category: 'UX Design',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Hepta - Web Development Insights & Tips</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and best practices in web development, design, and digital marketing from Hepta's expert team." />
        <meta name="keywords" content="web development blog, design tips, digital marketing insights, technology trends" />
        <link rel="canonical" href="https://hepta-website.com/blog" />
      </Helmet>
      
      <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in web development, 
            design, and digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={`${post.title} - ${post.category} blog post`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                      {index < 6 ? (
        <Link to={`/blog/blog${index + 1}`} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
          Read More →
        </Link>
      ) : (
        <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors" disabled>
          Read More →
        </button>
      )}
              </div>
            </article>
          ))}
        </div>

        <div 
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 border border-gray-300 text-slate-700 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 text-slate-700 rounded-lg hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 text-slate-700 rounded-lg hover:bg-gray-50 transition-colors">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 text-slate-700 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>

        <div 
          className="mt-20 text-center"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog; 