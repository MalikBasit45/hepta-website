import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BaseLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-poppins">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout; 