import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
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
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
