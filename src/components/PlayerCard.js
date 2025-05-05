import React from 'react';
import { Link } from 'react-router-dom';
import BatterIcon from './images/batsman_icon.svg';
import BowlerIcon from './images/bowler_icon.svg';
import AllRounderIcon from './images/allrounder_icon.svg';
import WicketkeeperIcon from './images/wicketkeeper_icon.svg';
import CaptainIcon from './images/captian_icon.svg';
import ForeignIcon from './images/foreignplayer_icon.svg';

function PlayerCard({ name, img, roles = [], isForeigner, isCaptain, isWicketkeeper }) {
  return (
    <Link to={`/player-details/${encodeURIComponent(name)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="player-card">
        <img src={img} alt={name} className="player-img" />
        <h3>{name}</h3>
        <h5>{roles.join(', ')}</h5>

        <div className="player-icons">
          {/* Left Icons (e.g., Batter, Bowler, All-Rounder) */}
          <div className="left-icons">
            {roles.includes('Batter') && <img src={BatterIcon} alt="Batter" className="player-sticker" />}
            {roles.includes('Bowler') && <img src={BowlerIcon} alt="Bowler" className="player-sticker" />}
            {roles.includes('All-Rounder') && <img src={AllRounderIcon} alt="All-Rounder" className="player-sticker" />}
          </div>

          {/* Right Icon (e.g., Wicketkeeper, Captain, Foreigner) */}
          <div className="right-icons">
            {isWicketkeeper && <img src={WicketkeeperIcon} alt="Wicketkeeper" className="player-sticker" />}
            {isCaptain && <img src={CaptainIcon} alt="Captain" className="player-sticker" />}
            {isForeigner && <img src={ForeignIcon} alt="Foreign Player" className="player-sticker" />}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PlayerCard;
