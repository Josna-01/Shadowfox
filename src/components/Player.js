// import React from 'react';
// import { useParams } from 'react-router-dom';
// import PlayerDetails from './PlayerDetails';

// function Player() {
//   const { name } = useParams();  // Access the player name from the URL parameters

//   return (
//     <div className="player-page">
//       <h2>Player: {name}</h2>
//       {/* Optionally, you could pass the player name to PlayerDetails if you want additional custom logic */}
//       <PlayerDetails />
//     </div>
//   );
// }

// export default Player;
import React from 'react';
import { useParams } from 'react-router-dom';
import PlayerDetails from './PlayerDetails';

function Player() {
  const { name } = useParams();  // Access the player name from the URL parameters

  return (
    <div className="player-page">
      <h2>Player: {name}</h2>
      {/* Pass the player name as a prop to PlayerDetails */}
      <PlayerDetails playerName={name} />
    </div>
  );
}

export default Player;
