import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserConext';
import { Rootlayouts } from './layouts/Rootlayouts';

import {
  Home,
  About,
  Education,
  Skill,
  Project,
  Contact,
  ThankYou
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayouts />,
    children: [
      { index: true, element: <Home title="Portfolio | VinothKumar S" /> },
      { path: 'about', element: <About title="About Me | VinothKumar S" /> },
      { path: 'education', element: <Education title="Education | VinothKumar S" /> },
      { path: 'skill', element: <Skill title="Skills & Attainments | VinothKumar S" /> },
      { path: 'project', element: <Project title="Projects | VinothKumar S" /> },
      { path: 'contact', element: <Contact title="Contact Me | VinothKumar S" /> },
      { path: 'thank-you', element: <ThankYou /> },
      {
        path: '*',
        element: (
          <div className="container text-center py-5 min-vh-50 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-1 fw-bold text-primary">404</h1>
            <p className="fs-4 text-muted">Page not found.</p>
            <a href="/" className="btn btn-primary rounded-pill px-4 mt-2">
              Back to Home
            </a>
          </div>
        )
      }
    ]
  }
]);

export default function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}