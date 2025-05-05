import React from 'react';
import { useParams } from 'react-router-dom';
import playerData from './playerData/PlayerData.json';  // Import JSON file
import '../styles/playerdetails.css'; // Ensure your CSS is imported
// import bgImage from './images/rcb_logo.png';

function PlayerDetails() {
  const { name } = useParams();
  const player = playerData[name];

  if (!player) {
    return <div className="page"><h2>Player not found</h2></div>;
  }

  return (
    <div className="player-details-page">
      {/* Left Column: Name + Image */}
      <div className="player-left">
        <h1 className="player-name">{name}</h1>
        <div className="player-image-wrapper" >
  <img src={player.detailImageUrl} alt={name} className="player-img-info" />
</div>
      </div>

      {/* Right Column: About, Personal Details, Statistics */}
      <div className="player-right">
        {/* About Section */}
        <section className="about-player">
        <h2>About</h2>
          <p>{player.About}</p>
        </section>

        {/* Personal Details */}
        <div className="player-section">
          <h2>Personal Details</h2>
          <p><strong>Born:</strong> {player.Born}</p>
          <p><strong>Specialization:</strong> {player.Specialization}</p>
          <p><strong>Batting Style:</strong> {player["Batting Style"]}</p>
          <p><strong>Bowling Style:</strong> {player["Bowling Style"]}</p>
          <p><strong>Nationality:</strong> {player.Nationality}</p>
          <p><strong>Nicknames:</strong></p>
          <ul>
            {player.Nickname.map((nick, index) => (
              <li key={index}>{nick.trim()}</li>
            ))}
          </ul>
          <p><strong>Jersey Number:</strong> {player["Jersey Number"]}</p>
          <p><strong>Height:</strong> {player.Height}</p>
          <p><strong>IPL team:</strong>{player["IPL Team"]}</p>
          <p><strong>IPL Debut:</strong> {player["IPL Debut"]}</p>
        </div>

        {/* Statistics */}
        <div className="player-section">
          <h2>Statistics</h2>
          <p><strong>Matches:</strong> {player.matches}</p>
          <p><strong>Runs:</strong> {player.runs}</p>
          <p><strong>Wickets:</strong> {player.Wickets}</p>
          <p><strong>Average:</strong> {player.Average}</p>
          <p><strong>Strike Rate:</strong> {player["Strike Rate"]}</p>
          <p><strong>Economy Rate:</strong> {player["Economy Rate"]}</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetails;
