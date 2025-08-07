import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Hepta - Digital Agency</title>
        <meta name="description" content="Learn about Hepta's story, our passionate team of designers and developers, and over 10 years of experience creating exceptional digital experiences." />
        <meta name="keywords" content="about Hepta, digital agency, web development team, designers, developers" />
        <link rel="canonical" href="https://hepta-website.com/about" />
      </Helmet>
      
      <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Hepta
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are a passionate team of designers, developers, and strategists dedicated to creating 
            exceptional digital experiences that drive business growth and user engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-slate-600 mb-4">
              Founded with a vision to bridge the gap between creativity and technology, Hepta has been 
              at the forefront of digital innovation for over a decade. We believe that great design 
              should not only look beautiful but also solve real business problems.
            </p>
            <p className="text-slate-600 mb-4">
              Our team combines deep technical expertise with creative vision to deliver solutions that 
              are not just functional, but truly exceptional. We work closely with our clients to 
              understand their unique challenges and create tailored solutions that drive results.
            </p>
            <p className="text-slate-600">
              From startups to Fortune 500 companies, we've helped businesses of all sizes transform 
              their digital presence and achieve their goals.
            </p>
          </div>
          <div 
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Team</h3>
              <p className="text-slate-600">
                A diverse group of experts passionate about creating amazing digital experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="text-center p-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">10+</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Years Experience</h3>
            <p className="text-slate-600">
              Over a decade of delivering exceptional digital solutions.
            </p>
          </div>

          <div 
            className="text-center p-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">200+</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Projects Completed</h3>
            <p className="text-slate-600">
              Successfully delivered projects across various industries.
            </p>
          </div>

          <div 
            className="text-center p-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">50+</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Happy Clients</h3>
            <p className="text-slate-600">
              Building long-term relationships with satisfied clients.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About; 