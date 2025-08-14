const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hepta</h3>
            <p className="text-gray-300">
              Your premier destination for luxury hospitality and exceptional experiences.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/hotels" className="text-gray-300 hover:text-white">Hotels</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-300 space-y-2">
              <p>Email: info@hepta.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Luxury Ave, Suite 100</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Hepta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
