import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Hepta</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to explore our services." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-white/10">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              aria-label="Return to homepage"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return to Homepage
            </Link>
            
            <div className="text-slate-400 text-sm">
              <p>Or try one of these pages:</p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Link to="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
                  About
                </Link>
                <Link to="/services" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Services
                </Link>
                <Link to="/portfolio" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Portfolio
                </Link>
                <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound; 