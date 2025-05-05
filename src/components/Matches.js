import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/matches.css';

const totalMatches = 74;

const sampleMatches = [
  {
    "matchId": 1,
    "team1": "Royal Challengers Bangalore",
    "team2": "Kolkata Knight Riders",
    "date": "2025-03-22",
    "time": null,
    "venue": "Eden Gardens",
    "status": "Completed",
    "matchNumber": 1,
    "result": "RCB won by 7 wickets",
    "team1Score": "177/3",
    "team1Overs": "16.2",
    "team2Score": "174/8",
    "team2Overs": "20",
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/kkr_logo.png"
  },
  {
    "matchId": 8,
    "team1": "Royal Challengers Bangalore",
    "team2": "Chennai Super Kings",
    "date": "2025-03-28",
    "time": null,
    "venue": "MA Chidambaram Stadium",
    "status": "Completed",
    "matchNumber": 8,
    "result": "RCB won by 50 runs",
    "team1Score": "196/7",
    "team1Overs": "20",
    "team2Score": "146/8",
    "team2Overs": "20",
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/csk_logo.png"
  },
  {
    "matchId": 14,
    "team1": "Royal Challengers Bangalore",
    "team2": "Gujarat Titans",
    "date": "2025-04-02",
    "time": null,
    "venue": "M.Chinnaswamy Stadium",
    "status": "Completed",
    "matchNumber": 14,
    "result": "GT won by 8 wickets",
    "team1Score": "169/8",
    "team1Overs": "20",
    "team2Score": "170/2",
    "team2Overs": "19.1",
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/gt_logo.png"
  },
  {
    "matchId": 21,
    "team1": "Royal Challengers Bangalore",
    "team2": "Mumbai Indians",
    "date": "2025-04-07",
    "time": null,
    "venue": "Wankhede Stadium",
    "status": "Completed",
    "matchNumber": 21,
    "result": "RCB won by 12 runs",
    "team1Score": "221/5",
    "team1Overs": "20",
    "team2Score": "209/9",
    "team2Overs": "20",
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/mi_logo.png"
  },
  {
    "matchId": 24,
    "team1": "Royal Challengers Bangalore",
    "team2": "Delhi Capitals",
    "date": "2025-04-10",
    "time": null,
    "venue": "M.Chinnaswamy Stadium",
    "status": "Completed",
    "matchNumber": 24,
    "result": "DC won by 6 wickets",
    "team1Score": "163/7",
    "team1Overs": "20",
    "team2Score": "169/4",
    "team2Overs": "18.3",
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/dc_logo.png"
  },
  {
    "matchId": 28,
    "team1": "Royal Challengers Bangalore",
    "team2": "Rajasthan Royals",
    "date": "2025-04-13",
    "time": null,
    "venue": "Sawai Mansingh Stadium",
    "status": "Completed",
    "matchNumber": 28,
    "result": "RCB won by 9 wickets",
    "team1Score": "175/1",
    "team1Overs": "18.4",
    "team2Score": "173/4",
    "team2Overs": "20",
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/rr_logo.png"
  },
  {
    "matchId": 34,
    "team1": "Royal Challengers Bangalore",
    "team2": "Punjab Kings",
    "date": "2025-04-18",
    "time": null,
    "venue": "M.Chinnaswamy Stadium",
    "status": "Completed",
    "matchNumber": 34,
    "result": "PBKS won by 5 wickets",
    "team1Score": "95/9",
    "team1Overs": "20",
    "team2Score": "98/5",
    "team2Overs": "14.2",
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/pbks_logo.png"
  },
  {
    "matchId": 37,
    "team1": "Royal Challengers Bangalore",
    "team2": "Punjab Kings",
    "date": "2025-04-20",
    "time": null,
    "venue": "Mullanpur",
    "status": "Completed",
    "matchNumber": 37,
    "result": "RCB won by 7 wickets",
    "team1Score": "159/3",
    "team1Overs": "17.4",
    "team2Score": "157/6",
    "team2Overs": "20",
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/pbks_logo.png"
  },
  {
    "matchId": 42,
    "team1": "Royal Challengers Bangalore",
    "team2": "Rajasthan Royals",
    "date": "2025-04-24",
    "time": null,
    "venue": "M.Chinnaswamy Stadium",
    "status": "Completed",
    "matchNumber": 42,
    "result": "RCB won by 11 runs",
    "team1Score": "205/5",
    "team1Overs": "20",
    "team2Score": "194/9",
    "team2Overs": "20",
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/rr_logo.png"
  },
  {
    "matchId": 46,
    "team1": "Royal Challengers Bangalore",
    "team2": "Delhi Capitals",
    "date": "2025-04-27",
    "time": null,
    "venue": "Arun Jaitley Stadium",
    "status": "Completed",
    "matchNumber": 46,
    "result": "RCB won by 6 wickets",
    "team1Score": "165/4",
    "team1Overs": "18.3",
    "team2Score": "162/8",
    "team2Overs": "20",
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/dc_logo.png"
  },
  {
    "matchId": 52,
    "team1": "Royal Challengers Bangalore",
    "team2": "Chennai Super Kings",
    "date": "2025-05-03",
    "time": null,
    "venue": "M.Chinnaswamy Stadium",
    "status": "Completed",
    "matchNumber": 52,
    "result": "RCB won by 2 runs",
    "team1Score": "213/5",
    "team1Overs": "20",
    "team2Score": "211/5",
    "team2Overs": "20",
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/csk_logo.png"
  },
  {
    "matchId": 59,
    "team1": "Royal Challengers Bangalore",
    "team2": "Lucknow Super Giants",
    "date": "2025-05-09",
    "time": "7:30 PM IST",
    "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
    "status": "Upcoming",
    "matchNumber": 59,
    "result": null,
    "team1Score": null,
    "team1Overs": null,
    "team2Score": null,
    "team2Overs": null,
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/lsg_logo.png"
  },
  {
    "matchId": 64,
    "team1": "Royal Challengers Bangalore",
    "team2": "Sunrisers Hyderabad",
    "date": "2025-05-13",
    "time": "7:30 PM IST",
    "venue": "M.Chinnaswamy Stadium",
    "status": "Upcoming",
    "matchNumber": 64,
    "result": null,
    "team1Score": null,
    "team1Overs": null,
    "team2Score": null,
    "team2Overs": null,
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/srh_logo.png"
  },
  {
    "matchId": 68,
    "team1": "Royal Challengers Bangalore",
    "team2": "Kolkata Knight Riders",
    "date": "2025-05-17",
    "time": "7:30 PM IST",
    "venue": "M.Chinnaswamy Stadium",
    "status": "Upcoming",
    "matchNumber": 68,
    "result": null,
    "team1Score": null,
    "team1Overs": null,
    "team2Score": null,
    "team2Overs": null,
    "team1Logo": "/images/rcb_logo.png",
    "team2Logo": "/images/kkr_logo.png"
  }

];
// Only used for filtering comparisons (not for display)
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}/${formattedMonth}/${year}`; // dd/mm/yyyy
};

function Matches() {
  const [matches, setMatches] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [filterTeam, setFilterTeam] = useState('');
  const navigate = useNavigate();
  // const totalMatches = sampleMatches.length;

  const filterMatches = useCallback(() => {
    let filtered = sampleMatches;

    if (filterDate) {
      const formattedFilterDate = filterDate.split('-').reverse().join('/');
      filtered = filtered.filter(
        match => formatDate(match.date) === formattedFilterDate
      );
    }

    if (filterTeam) {
      filtered = filtered.filter(
        match =>
          match.team1.toLowerCase().includes(filterTeam.toLowerCase()) ||
          match.team2.toLowerCase().includes(filterTeam.toLowerCase())
      );
    }

    setMatches(filtered);
  }, [filterDate, filterTeam]);

  const handleViewDetails = (match) => {
    navigate(`/match-details/${match.matchId}`);
  };

  useEffect(() => {
    filterMatches();
  }, [filterMatches]);

  return (
    <div className="container">
      <h1>RCB 2025 Matches</h1>
      <div className="filters">
        <input
          type="date"
          value={filterDate}
          onChange={e => setFilterDate(e.target.value)}
        />
        <select
          value={filterTeam}
          onChange={e => setFilterTeam(e.target.value)}
        >
          <option value="">All Teams</option>
          {/* <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option> */}
          <option value="Mumbai Indians">Mumbai Indians</option>
          <option value="Delhi Capitals">Delhi Capitals</option>
          <option value="Chennai Super Kings">Chennai Super Kings</option>
          <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
          <option value="Punjab Kings">Punjab Kings</option>
          <option value="Rajasthan Royals">Rajasthan Royals</option>
          <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
          <option value="Gujarat Titans">Gujarat Titans</option>
          <option value="Lucknow Super Giants">Lucknow Super Giants</option>
        </select>
      </div>

      <div className="matches-container">
        {matches.length === 0 ? (
          <p>No matches found.</p>
        ) : (
          matches.map(match => (
            <div className="match-card" key={match.matchId}>
              <div className="match-header">
                <span className="match-title">
                  IPL T20 Match {match.matchNumber} of {totalMatches}
                </span>
                <span className="match-date">{match.date}</span> {/* Displaying date in yyyy-mm-dd */}
              </div>

              <div className="match-details">
                <div className="team-info">
                  <img src={match.team1Logo} alt={match.team1} className="team-logo" />
                  <div className="team-data">
                    <span className="team-name">{match.team1}</span>
                    {match.team1Score && (
                      <span className="team-score">
                        {match.team1Score} ({match.team1Overs})
                      </span>
                    )}
                  </div>
                </div>

                <div className="vs-team-group">
                  <span className="vs">vs</span>
                </div>

                <div className="team-info">
                  <img src={match.team2Logo} alt={match.team2} className="team-logo" />
                  <div className="team-data">
                    <span className="team-name">{match.team2}</span>
                    {match.team2Score && (
                      <span className="team-score">
                        {match.team2Score} ({match.team2Overs})
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="match-result">
                {match.result ? (
                  <span>{match.result}</span>
                ) : (
                  <span>{match.time}</span>
                )}
              </div>
              <button onClick={() => handleViewDetails(match)}>View Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Matches;