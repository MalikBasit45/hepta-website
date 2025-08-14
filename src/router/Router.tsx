import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Hotels from '../pages/Hotels';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import News from '../pages/News';
import Contact from '../pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'hotels',
        element: <Hotels />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);
