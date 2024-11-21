import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar/>
          <Home />
        </>
      ),
    },
    {
      path: "/SignIn",
      element: (
        <>
                    <Navbar/>

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
                  <Navbar/>

          <SignUp />
        </>
      ),
    },
  ]);

  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}
export default App;
