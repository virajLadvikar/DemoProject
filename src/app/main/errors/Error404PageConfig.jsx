import { lazy } from 'react';

const Error404Page = lazy(() => import('./Error404Page')); // Ensure the path to Error404Page.js is correct

const Error404PageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: '/error404',
      element: <Error404Page />, // Use 'element' to render the component
    },
    {
      path: '/newError',
      element: <Error404Page />, // Use 'element' to render the component
    }
  ]
};

export default Error404PageConfig;
