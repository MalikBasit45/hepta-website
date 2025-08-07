import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileNav from './navigation/MobileNav';
import HamburgerButton from './navigation/HamburgerButton';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
              Hepta
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8" role="menubar">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-slate-700 hover:text-slate-900 hover:border-b-2 hover:border-gray-300'
                    }`
                  }
                  role="menuitem"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              className="text-slate-700 hover:text-slate-900"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav
          navItems={navItems}
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar; 