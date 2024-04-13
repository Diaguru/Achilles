import React from 'react';
import './App.css';
import achillesCoinImage from './achilles-coin.png'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Achilles</h1>
        <p className="tagline">Where memes meet cryptocurrency</p>
      </header>
      <main>
        <section className="about-section">
          <div className="container">
          <img className="responsive-image" src={achillesCoinImage} alt="Achilles Coin" />
            <h2>About Achilles</h2>
            <p>Achilles is a decentralized cryptocurrency platform that brings together the worlds of memes and blockchain technology. Our mission is to create a fun and engaging community where users can share, create, and reward each other for their favorite memes.</p>
          </div>
        </section>
        <section className="features-section">
          <div className="container">
            <h2>Key Features</h2>
            <div className="features">
              <div className="feature">
                <h3>Smart Contracts</h3>
                <p>Utilize smart contracts for secure and transparent transactions.</p>
              </div>
              <div className="feature">
                <h3>Community Rewards</h3>
                <p>Reward active community members for their contributions.</p>
              </div>
              <div className="feature">
                <h3>Decentralized Governance</h3>
                <p>Empower the community to make important decisions.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="get-started-section">
          <div className="container">
            <h2>Get Started</h2>
            <p>Join the Achilles community today!</p>
            <button>Sign Up</button>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 Achilles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;