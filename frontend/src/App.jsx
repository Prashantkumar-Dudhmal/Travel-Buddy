import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Navbar from './components/Navbar'
import './App.css'

function App() {

const router = createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Home/></>
  },
  {
    path:"/SignIn",
    element:<><Navbar/><SignIn/></>
  }
])

  
  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}
export default App
