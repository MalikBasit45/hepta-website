import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with advanced features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure and intuitive mobile banking application for iOS and Android.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Firebase', 'TypeScript']
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Professional corporate website with modern design and excellent performance.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel']
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Development',
      description: 'Comprehensive SaaS dashboard with analytics and user management.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'Python', 'PostgreSQL']
    },
    {
      title: 'Restaurant App',
      category: 'Mobile Development',
      description: 'Food delivery and restaurant management mobile application.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      technologies: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'Creative portfolio website showcasing artistic work and projects.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Portfolio | Hepta - Web Development Projects</title>
        <meta name="description" content="Explore our latest web development, mobile app, and design projects. See how we've helped businesses achieve their goals through innovative digital solutions." />
        <meta name="keywords" content="portfolio, web development projects, mobile apps, UI/UX design, case studies" />
        <link rel="canonical" href="https://hepta-website.com/portfolio" />
      </Helmet>
      
      <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their goals 
            through innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.category} project`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '').replace(/[&]/g, '')}`} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-20 text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your project requirements.
          </p>
          <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Portfolio; 