import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home' 
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/service'
import Register from './pages/register'
import Login from './pages/Login'
import Logout from './pages/Logout';
import  ERROR  from './pages/ERROR'; 

import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/> <Home/></>
    },

    {
      path:"/about",
      element: <><Navbar/> <About/></>
    },

    {
      path:"/contact",
      element: <><Navbar/> <Contact/></>
    },
    {
      path:"/register",
      element: <><Navbar/> <Register/></>
    },

    {
      path:"/service",
      element: <><Navbar/> <Services/></>
    },
    
    {
      path:"/Logout",
      element: <><Navbar/> <Logout/></>
    },

    {
      path:"*",
      element: <><Navbar/> <ERROR/></>
    }

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
