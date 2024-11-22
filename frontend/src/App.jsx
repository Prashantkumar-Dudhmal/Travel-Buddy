import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import "./App.css";
 export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/SignIn",
    element: (
      <>
        <SignIn />
      </>
    ),
  },
  {
    path: "/Book",
    element: (
      <>
        Book pagee
      </>
    ),
  },
  {
    path: "/SignUp",
    element: (
      <>
        <SignUp />
      </>
    ),
  },
]);

function App() {
  
  return (
    <>
      
      {/* <RouterProvider router={router} /> */}
    </>
  );
}
export default App;
