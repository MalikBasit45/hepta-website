import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Add top padding to account for fixed navbar */}
      <main className={`flex-grow ${isHomeRoute ? 'pt-0' : 'pt-20'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
