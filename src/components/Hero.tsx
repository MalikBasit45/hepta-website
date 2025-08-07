import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
          {/* Main Headline */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Beautiful
            </span>{' '}
            Digital Experiences
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Transform your business with cutting-edge web solutions that combine 
            stunning design, powerful functionality, and exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
              aria-label="Get started with our services"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              to="/portfolio"
              className="border-2 border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10 inline-flex items-center justify-center"
              aria-label="View our portfolio of work"
            >
              View Portfolio
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div 
            className="mt-12 pt-8 border-t border-white/10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-slate-400 text-sm mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-60">
              <div className="text-white/70 font-semibold">TechCorp</div>
              <div className="text-white/70 font-semibold">InnovateLab</div>
              <div className="text-white/70 font-semibold">DigitalFlow</div>
              <div className="text-white/70 font-semibold">FutureTech</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-8 md:right-16 opacity-20">
        <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
      </div>
      <div className="absolute bottom-1/4 left-8 md:left-16 opacity-20">
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero; 