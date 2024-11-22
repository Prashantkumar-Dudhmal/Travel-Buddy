import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import Navbar from "../components/Navbar";
const Home = () => {
  const nav = useNavigate();
  const handleGetStarted = () => {
    nav("/Book");
  };
  return (
    <>
    <Navbar></Navbar>
    <div className="homepage">

      <main>
        <section className="hero">
          <h2>Find Your Perfect Travel Buddy</h2>
          <p>Join Travel Buddy and start sharing rides today!</p>
          <button onClick={handleGetStarted}>Get Started</button>
        </section>
        <section className="features">
          <div className="feature">
            <h3>Safe Rides</h3>
            <p>All drivers are verified and rated by our community.</p>
          </div>
          <div className="feature">
            <h3>Affordable</h3> <p>Save money by sharing rides with others.</p>
          </div>
          <div className="feature">
            <h3>Eco-Friendly</h3>
            <p>Reduce your carbon footprint by carpooling.</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Travel Buddy. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Home;
