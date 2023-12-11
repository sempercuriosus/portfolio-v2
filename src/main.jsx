import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

// Pages
import App from './App.jsx';
import Error from './components/Error/error.jsx';
import About from './components/About/about.jsx';
import Contact from './components/Contact/contact.jsx';
import Portfolio from './components/Portfolio/portfolio.jsx';
import Project from './components/Project/project.jsx';
import Resume from './components/Resume/resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // When there is an error then Error is essentially the "element"
    //  meaning, I need to also set the header, error, and footer
    errorElement: <Error />,
    children: [
      {
        index: true,
        // path: '/about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'project',
        element: <Project />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

