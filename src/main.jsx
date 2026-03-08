import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routers/AllRouter.jsx';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { UserProvider } from './context/UserConext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider >
    <RouterProvider router={router}/>
  </UserProvider>
);