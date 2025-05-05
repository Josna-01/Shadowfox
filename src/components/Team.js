import React from 'react';
import PlayerCard from './PlayerCard';
import RajatImg from './images/Rajat.avif';
import ViratImg from './images/Virat.avif';
import PhilImg from './images/Salt.avif';
import JitheshImg from './images/Jitesh.avif';
import DevduttImg from './images/Padikkal.avif';
import SwastikImg from './images/Swastik.avif';
import LiamImg from './images/Livingstone.avif';
import KrunalImg from './images/Krunal.avif';
import SwapnilImg from './images/Swapnil.avif';
import TimImg from './images/Tim.avif';
import RomarioImg from './images/Romario.avif';
import ManojImg from './images/Manoj.avif';
import JoshImg from './images/Hazlewood.avif';
import RasikhImg from './images/Rasikh.avif';
import SuyashImg from './images/Suyash.avif';
import BhuviImg from './images/Bhuvi.avif';
import NuwanImg from './images/Nuwan.avif';
import NgidiImg from './images/Lungisani.avif';
import AbhinandanImg from './images/Abhinandan.avif';
import MohitImg from './images/Mohit.avif';
import YashImg from './images/Yash.avif';


function Team() {
  const batters = [
    { name: "Rajat Patidar", img: RajatImg, roles: ["Batter"], isCaptain: true },
    { name: "Virat Kohli", img: ViratImg, roles: ["Batter"] },
    { name: "Phil Salt", img: PhilImg, roles: ["Batter"], isForeigner: true ,isWicketkeeper: true},
    { name: "Jithesh Sharma", img: JitheshImg, roles: ["Batter"],isWicketkeeper: true },
    { name: "Devdutt Padikkal", img: DevduttImg, roles: ["Batter"] },
    { name: "Swastik Chhikara", img: SwastikImg, roles: ["Batter"] },
  ];

  const allRounders = [
    { name: "Liam Livingstone", img: LiamImg, roles: ["All-Rounder"], isForeigner: true },
    { name: "Krunal Pandya", img: KrunalImg, roles: ["All-Rounder"] },
    { name: "Swapnil Singh", img: SwapnilImg, roles: ["All-Rounder"] },
    { name: "Tim David", img: TimImg, roles: ["All-Rounder"], isForeigner: true },
    { name: "Romario Shepherd", img: RomarioImg, roles: ["All-Rounder"], isForeigner: true },
    { name: "Manoj Bhandage", img: ManojImg, roles: ["All-Rounder"] },
  ];

  const bowlers = [
    { name: "Josh Hazlewood", img: JoshImg, roles: ["Bowler"], isForeigner: true },
    { name: "Rasikh Dar", img: RasikhImg, roles: ["Bowler"] },
    { name: "Suyash Sharma", img: SuyashImg, roles: ["Bowler"] },
    { name: "Bhuvneshwar Kumar", img: BhuviImg, roles: ["Bowler"] },
    { name: "Nuwan Thushara", img: NuwanImg, roles: ["Bowler"], isForeigner: true },
    { name: "Lungi Ngidi", img: NgidiImg, roles: ["Bowler"], isForeigner: true },
    { name: "Abhinandan Singh", img: AbhinandanImg, roles: ["Bowler"] },
    { name: "Mohit Sharma", img: MohitImg, roles: ["Bowler"] },
    { name: "Yash Dayal", img: YashImg, roles: ["Bowler"] },
  ];

  return (
    <div className="team_container" >
      {/* <h1>RCB Team</h1> */}

      <h2>Batters</h2>
      <div className="player-grid">
        {batters.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>

      <h2>All-Rounders</h2>
      <div className="player-grid">
        {allRounders.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>

      <h2>Bowlers</h2>
      <div className="player-grid">
        {bowlers.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  );
}

export default Team;
