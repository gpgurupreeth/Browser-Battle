import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import CampusLife from './pages/CampusLife';
import Research from './pages/Research';
import Placements from './pages/Placements';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { Outlet } from 'react-router';

// Root component that wraps all pages with Layout
function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'academics',
        Component: Academics,
      },
      {
        path: 'admissions',
        Component: Admissions,
      },
      {
        path: 'campus-life',
        Component: CampusLife,
      },
      {
        path: 'research',
        Component: Research,
      },
      {
        path: 'placements',
        Component: Placements,
      },
      {
        path: 'news',
        Component: News,
      },
      {
        path: 'gallery',
        Component: Gallery,
      },
      {
        path: 'contact',
        Component: Contact,
      },
      {
        path: '*',
        element: (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
              <a
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Go Home
              </a>
            </div>
          </div>
        ),
      },
    ],
  },
]);