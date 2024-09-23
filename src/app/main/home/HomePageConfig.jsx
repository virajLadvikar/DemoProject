import { lazy } from 'react';

const HomePage = lazy(() => import('./HomePage')); // Ensure the path to HomePage.js is correct

const HomePageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: '/home',
      element: <HomePage />, // Use 'element' to render the component
    }
  ]
};

export default HomePageConfig;
