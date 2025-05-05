import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import PlayerDetails from './components/PlayerDetails';
import Team from './components/Team';
import Player from './components/Player';
import Highlights from './components/Highlights';
import Schedule from './components/Schedule';
// import Overview from './components/Overview'; // Corrected the typo
import RCBbestpage from './components/RCBbestpage';
import PlayerCard from './components/PlayerCard'; 
import rcbLogo from './components/images/rcb_logo.png'; // Adjust the path as necessary
import Matches from './components/Matches'; 
import MatchDetails from './components/MatchDetails'; // Correct the path if necessary

// Adjust the path as necessary
function App() {
  return (
    <BrowserRouter>
    {/* --------navbar-------- */}
  <nav className="navbar">
  <div className="navbar-logo">
  <Link to="/">
      <img src={rcbLogo} alt="rcb logo" className="logo" />
    </Link>
  </div>
  <ul className="navbar-links">
    <li>
      <Link to="/" className="navbar-link">Home</Link>
    </li>
    <li>
      <Link to="/team" className="navbar-link">Team</Link>
    </li>
    <li>
      <Link to="/matches" className="navbar-link">Matches</Link>
    </li>
    <li>
      <Link to="/highlights" className="navbar-link">Highlights</Link>
    </li>
    {/* <li>
      <Link to="/overview" className="navbar-link">Overview</Link>
    </li> */}
    <li>
  <Link to="/rcb-best" className="navbar-link">Fan Page</Link>
</li>

  </ul>
</nav>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/player/:name" element={<Player />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/highlights" element={<Highlights />} />
        {/* <Route path="/overview" element={<Overview />} /> */}
        <Route path="/rcb-best" element={<RCBbestpage />} />
        {/* <Route path="/team" element={<Team />} /> */}
        {/* <Route path="/player/:name" element={<Player />} /> */}
        <Route path="/player-details/:name" element={<PlayerDetails />} />
        <Route path="/playercard" element={<PlayerCard />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/match-details/:matchId" element={<MatchDetails />} /> {/* Route for MatchDetails */}

        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
