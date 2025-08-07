interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const HamburgerButton = ({ isOpen, onClick, className = '' }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-colors ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
    >
      <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      
      {/* Top line */}
      <span
        className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
          isOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}
      />
      
      {/* Middle line */}
      <span
        className={`block w-6 h-0.5 bg-current mt-1.5 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      
      {/* Bottom line */}
      <span
        className={`block w-6 h-0.5 bg-current mt-1.5 transform transition-all duration-300 ease-in-out ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      />
    </button>
  );
};

export default HamburgerButton; 