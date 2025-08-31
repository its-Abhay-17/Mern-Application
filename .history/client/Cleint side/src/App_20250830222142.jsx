import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/service'
import Register from './pages/register'
import Login from './pages/Login'
import Logout from './pages/Logout';
import ERROR from './pages/ERROR';
import AdminLayout from './components/layouts/Admin-Layout'
import Adminuser from './pages/Admin-user';

import Navbar from './components/Navbar'
import Admincontacts from './pages/Admin-contacts';
import Adminupdate from './pages/Admin-update';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> <Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /> <About /></>
    },
    {
      path: "/contact",
      element: <><Navbar /> <Contact /></>
    },
    {
      path: "/register",
      element: <><Navbar /> <Register /></>
    },
    {
      path: "/service",
      element: <><Navbar /> <Services /></>
    },
    {
      path: "/login",
      element: <><Navbar /> <Login /></>
    },
    {
      path: "/logout",
      element: <><Navbar /> <Logout /></>
    },

    {
      path: "/admin",
      element: <AdminLayout />,  
      children: [
        {
          path: "users",   
          element: <Adminuser />
        },
        {
          path: "contacts",  
          element: <Admincontacts/>
        },
        {
          path: "users/:id/edit",  
          element: <Adminupdate/>
        },
      ]
    },

    {
      path: "*",
      element: <><Navbar /> <ERROR /></>
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
