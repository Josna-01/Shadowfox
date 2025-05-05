import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/MatchDetails.css';

const sampleMatches = [
  {
    matchId: 1,
    team1: "RCB",
    team2: "KKR",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/kkr_logo.png",
    date: "March 22, 2025",
    venue: "Eden Gardens, Kolkata",
    status: "Completed",
    team1Score: "177/3",
    team1Overs: "16.2",
    team2Score: "174/8",
    team2Overs: "20",
    result: "RCB won by 7 wickets (22 balls left)",
    playerOfTheMatch: {
      name: "Krunal Pandya",
      performance: "3/29(4)"
    },
    highlights: [
      { type: "image", url: "data:image/jpeg;base64,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" },
      { type: "image", url: "data:image/jpeg;base64,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" },
      { type: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNFhdHdhfhkM37EHmNj2UyHipKoADrAfx1Q&s" },
      { type: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQ62kceMeymnJj9xHCmEm0QA59nSCc71C7A&s" }
    ],
    battingScorecard: [
      { player: "P. Salt", runs: 56, balls: 31, fours: 9, sixes: 2 },
      { player: "V. Kohli", runs: 59, balls: 36, fours: 4, sixes: 3 },
      { player: "D. Padikkal (IP)", runs: 10, balls: 10, fours: 1, sixes: 0 },
      { player: "R. Patidar (C)", runs: 34, balls: 16, fours: 5, sixes: 1 },
      { player: "L. Livingstone", runs: 15, balls: 5, fours: 2, sixes: 1 }
    ],
    bowlingScorecard: [
      { player: "J. Hazlewood", overs: 4.0, wickets: 2, runs: 22 },
      { player: "Y. Dayal", overs: 3.0, wickets: 1, runs: 25 },
      { player: "R. Salam", overs: 3.0, wickets: 1, runs: 35 },
      { player: "K. Pandya", overs: 4.0, wickets: 3, runs: 29 },
      { player: "S. Sharma", overs: 4.0, wickets: 1, runs: 47 },
      { player: "L. Livingstone", overs: 2.0, wickets: 0, runs: 14 }
    ]
  },
  {
    matchId: 8,
    team1: "RCB",
    team2: "CSK",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/csk_logo.png",
    date: "March 28, 2025",
    venue: "Chepauk",
    status: "completed",
    team1Score: 196,
    team1Overs: 20,
    team2Score: 146,
    team2Overs: 20,
    result: "Royal Challengers won by 50 runs",
    playerOfTheMatch: {
      name: "Rajat Patidar",
      performance: "51 (32)"
    },
    highlights: [
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" }
    ],
    battingScorecard: [
      { player: "P. Salt", runs: 32, balls: 16, fours: 5, sixes: 1 },
      { player: "V. Kohli", runs: 31, balls: 30, fours: 2, sixes: 1 },
      { player: "D. Padikkal", runs: 27, balls: 14, fours: 2, sixes: 2 },
      { player: "R. Patidar (C)", runs: 51, balls: 32, fours: 4, sixes: 3 },
      { player: "L. Livingstone", runs: 10, balls: 9, fours: 0, sixes: 1 },
      { player: "J. Sharma (Wk)", runs: 12, balls: 6, fours: 1, sixes: 1 },
      { player: "T. David", runs: 22, balls: 8, fours: 1, sixes: 3 },
      { player: "K. Pandya", runs: 0, balls: 3, fours: 0, sixes: 0 },
      { player: "B. Kumar", runs: 0, balls: 2, fours: 0, sixes: 0 }
    ],
    bowlingScorecard: [
      { player: "B. Kumar", overs: 3.0, wickets: 1, runs: 20 },
      { player: "J. Hazlewood", overs: 4.0, wickets: 3, runs: 21 },
      { player: "Y. Dayal", overs: 3.0, wickets: 2, runs: 18 },
      { player: "L. Livingstone", overs: 4.0, wickets: 2, runs: 28 },
      { player: "S. Sharma", overs: 4.0, wickets: 0, runs: 32 },
      { player: "K. Pandya", overs: 2.0, wickets: 0, runs: 26 }
    ]
  },
  {
    matchId: 14,
    team1: "RCB",
    team2: "GT",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/gt_logo.png",
    date: "April 2, 2025",
    venue: "M. Chinnaswamy Stadium",
    status: "GT won by 8 wickets (13 balls left)",
    team1Score: "169",
    team1Overs: "20",
    team2Score: "170",
    team2Overs: "17.5",
    result: "Gujarat Titans won by 8 wickets",
    playerOfTheMatch: {
      name: "Mohammed Siraj",
      performance: "3/19(4)"
    },
    highlights: [
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" }
    ],
    battingScorecard: [
      { player: "P. Salt", runs: 14, balls: 13, fours: 1, sixes: 1 },
      { player: "V. Kohli", runs: 7, balls: 6, fours: 1, sixes: 0 },
      { player: "D. Padikkal", runs: 4, balls: 3, fours: 1, sixes: 0 },
      { player: "R. Patidar (C)", runs: 12, balls: 12, fours: 2, sixes: 0 },
      { player: "L. Livingstone", runs: 54, balls: 40, fours: 1, sixes: 5 },
      { player: "J. Sharma (WK)", runs: 33, balls: 21, fours: 5, sixes: 1 },
      { player: "K. Pandya", runs: 5, balls: 5, fours: 1, sixes: 0 },
      { player: "T. David", runs: 32, balls: 18, fours: 3, sixes: 2 },
      { player: "B. Kumar", runs: 1, balls: 2, fours: 0, sixes: 0 }
    ],
    bowlingScorecard: [
      { player: "B. Kumar", overs: 4.0, wickets: 1, runs: 23 },
      { player: "J. Hazlewood", overs: 3.5, wickets: 1, runs: 43 },
      { player: "Y. Dayal", overs: 3.0, wickets: 0, runs: 20 },
      { player: "R. Salam", overs: 3.0, wickets: 0, runs: 35 },
      { player: "K. Pandya", overs: 3.0, wickets: 0, runs: 34 },
      { player: "L. Livingstone", overs: 1.0, wickets: 0, runs: 12 }
    ]
  },
  {
    matchId: 21,
    team1: "RCB",
    team2: "MI",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/mi_logo.png",
    date: "April 7, 2025",
    venue: "Wankhede Stadium, Mumbai",
    status: "RCB won by 12 runs",
    team1Score: "221",
    team1Overs: "20",
    team2Score: "209",
    team2Overs: "20",
    result: "RCB won by 12 runs",
    playerOfTheMatch: {
      name: "Rajat Patidar",
      performance: "64(32)"
    },
    highlights: [
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" }
    ],
    battingScorecard: [
      { player: "P. Salt", runs: 4, balls: 2, fours: 1, sixes: 0 },
      { player: "V. Kohli", runs: 67, balls: 42, fours: 8, sixes: 2 },
      { player: "D. Padikkal", runs: 37, balls: 22, fours: 2, sixes: 3 },
      { player: "R. Patidar (C)", runs: 64, balls: 32, fours: 5, sixes: 4 },
      { player: "L. Livingstone", runs: 0, balls: 2, fours: 0, sixes: 0 },
      { player: "J. Sharma (WK)", runs: 40, balls: 19, fours: 2, sixes: 4 },
      { player: "T. David", runs: 1, balls: 1, fours: 0, sixes: 0 }
    ],
    bowlingScorecard: [
      { player: "B. Kumar", overs: 4.0, wickets: 1, runs: 48 },
      { player: "Y. Dayal", overs: 4.0, wickets: 2, runs: 46 },
      { player: "J. Hazlewood", overs: 4.0, wickets: 2, runs: 37 },
      { player: "S. Sharma", overs: 4.0, wickets: 0, runs: 32 },
      { player: "K. Pandya", overs: 4.0, wickets: 4, runs: 45 }
    ]
  },
  {
    matchId: 24,
    team1: "RCB",
    team2: "DC",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/dc_logo.png",
    date: "April 10, 2025",
    venue: "M. Chinnaswamy Stadium",
    status: "DC won by 6 wickets (13 balls left)",
    team1Score: "163",
    team1Overs: "20",
    team2Score: "169",
    team2Overs: "17.5",
    result: "Delhi Capitals won",
    playerOfTheMatch: {
      name: "KL Rahul",
      performance: "93(53)"
    },
    highlights: [
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" }
    ],
    battingScorecard: [
      { player: "P. Salt", runs: 37, balls: 17, fours: 4, sixes: 3 },
      { player: "V. Kohli", runs: 22, balls: 14, fours: 1, sixes: 2 },
      { player: "D. Padikkal", runs: 1, balls: 8, fours: 0, sixes: 0 },
      { player: "R. Patidar (C)", runs: 25, balls: 23, fours: 1, sixes: 1 },
      { player: "L. Livingstone", runs: 4, balls: 6, fours: 0, sixes: 0 },
      { player: "J. Sharma (Wk)", runs: 3, balls: 11, fours: 0, sixes: 0 },
      { player: "K. Pandya", runs: 18, balls: 18, fours: 1, sixes: 0 },
      { player: "T. David", runs: 37, balls: 20, fours: 2, sixes: 4 },
      { player: "B. Kumar", runs: 1, balls: 4, fours: 0, sixes: 0 }
    ],
    bowlingScorecard: [
      { player: "B. Kumar", overs: 4.0, wickets: 2, runs: 26 },
      { player: "Y. Dayal", overs: 3.5, wickets: 1, runs: 45 },
      { player: "J. Hazlewood", overs: 3.0, wickets: 0, runs: 40 },
      { player: "S. Sharma", overs: 4.0, wickets: 1, runs: 25 },
      { player: "K. Pandya", overs: 2.0, wickets: 0, runs: 19 },
      { player: "L. Livingstone", overs: 1.0, wickets: 0, runs: 14 }
    ]
  },
  {
    matchId: 34,
    team1: "RCB",
    team2: "PBKS",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/pbks_logo.png",
    date: "April 18, 2025",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    status: "PBKS won by 5 wickets (11 balls left)",
    team1Score: "95",
    team1Overs: "14",
    team2Score: "98",
    team2Overs: "12.1",
    result: "Punjab Kings won by 5 wickets",
    playerOfTheMatch: {
      name: "Tim David",
      performance: "50(26)"
    },
    highlights: [
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" }
    ],
    battingScorecard: [
      { player: "P. Salt", runs: 4, balls: 4, fours: 1, sixes: 0 },
      { player: "V. Kohli", runs: 1, balls: 3, fours: 0, sixes: 0 },
      { player: "R. Patidar (C)", runs: 23, balls: 18, fours: 1, sixes: 1 },
      { player: "L. Livingstone", runs: 4, balls: 6, fours: 1, sixes: 0 },
      { player: "J. Sharma (Wk)", runs: 2, balls: 7, fours: 0, sixes: 0 },
      { player: "K. Pandya", runs: 1, balls: 2, fours: 0, sixes: 0 },
      { player: "T. David", runs: 50, balls: 26, fours: 5, sixes: 3 },
      { player: "M. Bhandage (IP)", runs: 1, balls: 4, fours: 0, sixes: 0 },
      { player: "B. Kumar", runs: 8, balls: 13, fours: 1, sixes: 0 },
      { player: "Y. Dayal", runs: 0, balls: 1, fours: 0, sixes: 0 },
      { player: "J. Hazlewood", runs: 0, balls: 1, fours: 0, sixes: 0 }
    ],
    bowlingScorecard: [
      { player: "B. Kumar", overs: 3.0, wickets: 2, runs: 26 },
      { player: "Y. Dayal", overs: 2.1, wickets: 0, runs: 18 },
      { player: "J. Hazlewood", overs: 3.0, wickets: 3, runs: 14 },
      { player: "K. Pandya", overs: 1.0, wickets: 0, runs: 10 },
      { player: "S. Sharma", overs: 3.0, wickets: 0, runs: 25 }
    ]
  },
  {
    matchId: 37,
    team1: "RCB",
    team2: "PBKS",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/pbks_logo.png",
    date: "April 20, 2025",
    venue: "New PCA Stadium, Mohali",
    status: "RCB won by 7 wickets (5 balls left)",
    team1Score: "159",
    team1Overs: "18.5",
    team2Score: "157",
    team2Overs: "20",
    result: "Royal Challengers Bengaluru won by 7 wickets",
    playerOfTheMatch: {
      name: "Virat Kohli",
      performance: "73*(54)"
    },
    highlights: [
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" }
    ],
    battingScorecard: [
      { player: "P. Salt", runs: 1, balls: 3, fours: 0, sixes: 0 },
      { player: "V. Kohli", runs: 73, balls: 54, fours: 7, sixes: 1 },
      { player: "D. Padikkal", runs: 61, balls: 35, fours: 5, sixes: 4 },
      { player: "R. Patidar (C)", runs: 12, balls: 13, fours: 1, sixes: 0 },
      { player: "J. Sharma (Wk)", runs: 11, balls: 8, fours: 0, sixes: 1 }
    ],
    bowlingScorecard: [
      { player: "B. Kumar", overs: 4.0, wickets: 0, runs: 26 },
      { player: "Y. Dayal", overs: 2.0, wickets: 0, runs: 22 },
      { player: "J. Hazlewood", overs: 4.0, wickets: 0, runs: 39 },
      { player: "K. Pandya", overs: 4.0, wickets: 2, runs: 25 },
      { player: "R. Shepherd", overs: 2.0, wickets: 1, runs: 18 },
      { player: "S. Sharma", overs: 4.0, wickets: 2, runs: 26 }
    ]
  },
  {
    matchId: 42,
    team1: "RCB",
    team2: "RR",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/rr_logo.png",
    date: "April 24, 2025",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    status: "RCB won by 11 runs",
    team1Score: "205",
    team1Overs: "20",
    team2Score: "194",
    team2Overs: "20",
    result: "Royal Challengers Bengaluru won by 11 runs",
    playerOfTheMatch: {
      name: "Josh Hazlewood",
      performance: "4/33(4)"
    },
    highlights: [
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" }
    ],
    battingScorecard: [
      { player: "P. Salt", runs: 26, balls: 23, fours: 4, sixes: 0 },
      { player: "V. Kohli", runs: 70, balls: 42, fours: 8, sixes: 2 },
      { player: "D. Padikkal", runs: 50, balls: 27, fours: 4, sixes: 3 },
      { player: "T. David", runs: 23, balls: 15, fours: 2, sixes: 1 },
      { player: "R. Patidar (C)", runs: 1, balls: 3, fours: 0, sixes: 0 },
      { player: "J. Sharma (Wk)", runs: 20, balls: 10, fours: 4, sixes: 0 }
    ],
    bowlingScorecard: [
      { player: "B. Kumar", overs: 4.0, wickets: 1, runs: 50 },
      { player: "Y. Dayal", overs: 3.0, wickets: 1, runs: 33 },
      { player: "J. Hazlewood", overs: 4.0, wickets: 4, runs: 33 },
      { player: "R. Shepherd", overs: 1.0, wickets: 0, runs: 15 },
      { player: "S. Sharma (IP)", overs: 4.0, wickets: 0, runs: 31 },
      { player: "K. Pandya", overs: 4.0, wickets: 2, runs: 31 }
    ]
  },
  {
    matchId: 46,
    team1: "RCB",
    team2: "DC",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/dc_logo.png",
    date: "April 27, 2025",
    venue: "Arun Jaitley Stadium, Delhi",
    status: "RCB won by 6 wickets (9 balls left)",
    team1Score: "165",
    team1Overs: "18.3",
    team2Score: "162",
    team2Overs: "20",
    result: "Royal Challengers Bengaluru won by 6 wickets",
    playerOfTheMatch: {
      name: "Krunal Pandya",
      performance: "1/28(4) & 73*(47)"
    },
    highlights: [
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" }
    ],
    battingScorecard: [
      { player: "J. Bethell", runs: 12, balls: 6, fours: 1, sixes: 1 },
      { player: "V. Kohli", runs: 51, balls: 47, fours: 4, sixes: 0 },
      { player: "D. Padikkal", runs: 0, balls: 2, fours: 0, sixes: 0 },
      { player: "R. Patidar (C)", runs: 6, balls: 6, fours: 1, sixes: 0 },
      { player: "K. Pandya", runs: 73, balls: 47, fours: 5, sixes: 4 },
      { player: "T. David", runs: 19, balls: 5, fours: 3, sixes: 1 }
    ],
    bowlingScorecard: [
      { player: "B. Kumar", overs: 4.0, wickets: 3, runs: 33 },
      { player: "Y. Dayal", overs: 4.0, wickets: 1, runs: 42 },
      { player: "J. Hazlewood", overs: 4.0, wickets: 2, runs: 36 },
      { player: "S. Sharma", overs: 4.0, wickets: 0, runs: 22 },
      { player: "K. Pandya", overs: 4.0, wickets: 1, runs: 28 }
    ]
  },
  {
    matchId: 52,
    team1: "RCB",
    team2: "CSK",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/csk_logo.png",
    date: "May 03, 2025",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    status: "RCB won by 2 runs",
    team1Score: "213",
    team1Overs: "20",
    team2Score: "211",
    team2Overs: "20",
    result: "Royal Challengers Bengaluru won by 2 runs",
    playerOfTheMatch: {
      name: "Romario Shepherd",
      performance: "0/18(1) & 53*(14)"
    },
    highlights: [
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" },
      { type: "image", url: "" }
    ],
    battingScorecard: [
      { player: "J. Bethell", runs: 55, balls: 33, fours: 8, sixes: 2 },
      { player: "V. Kohli", runs: 62, balls: 33, fours: 5, sixes: 5 },
      { player: "D. Padikkal", runs: 17, balls: 15, fours: 1, sixes: 1 },
      { player: "R. Patidar (C)", runs: 11, balls: 15, fours: 1, sixes: 0 },
      { player: "J. Sharma (Wk)", runs: 7, balls: 8, fours: 1, sixes: 0 },
      { player: "T. David", runs: 2, balls: 3, fours: 0, sixes: 0 },
      { player: "R. Shepherd", runs: 53, balls: 14, fours: 4, sixes: 6 }
    ],
    bowlingScorecard: [
      { player: "K. Pandya", overs: 3.0, wickets: 1, runs: 24 },
      { player: "B. Kumar", overs: 4.0, wickets: 0, runs: 55 },
      { player: "Y. Dayal", overs: 4.0, wickets: 1, runs: 41 },
      { player: "L. Ngidi", overs: 4.0, wickets: 3, runs: 30 },
      { player: "S. Sharma (IP)", overs: 4.0, wickets: 0, runs: 43 },
      { player: "R. Shepherd", overs: 1.0, wickets: 0, runs: 18 }
    ]
  },
  {
    matchId: 59,
    team1: "RCB",
    team2: "LSG",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/lsg_logo.png",
    date: "May 09, 2025",
    venue: "Ekana Cricket Stadium B Ground, Lucknow",
    status: "Not Completed",
    team1Score: null,
    team1Overs: null,
    team2Score: null,
    team2Overs: null,
    result: null,
    playerOfTheMatch: {
      name: null,
      performance: null
    },
    highlights: [
      { type: "image", url: null },
      { type: "image", url: null },
      { type: "image", url: null },
      { type: "image", url: null }
    ],
    battingScorecard: [],
    bowlingScorecard: []
  },
  {
    matchId: 64,
    team1: "RCB",
    team2: "SRH",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/srh_logo.png",
    date: "May 13, 2025",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    status: "Not Completed",
    team1Score: null,
    team1Overs: null,
    team2Score: null,
    team2Overs: null,
    result: null,
    playerOfTheMatch: {
      name: null,
      performance: null
    },
    highlights: [
      { type: "image", url: null },
      { type: "image", url: null },
      { type: "image", url: null },
      { type: "image", url: null }
    ],
    battingScorecard: [],
    bowlingScorecard: []
  },
  {
    matchId: 68,
    team1: "RCB",
    team2: "KKR",
    team1Logo: "/images/rcb_logo.png",
    team2Logo: "/images/kkr_logo.png",
    date: "May 17, 2025",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    status: "Not Completed",
    team1Score: null,
    team1Overs: null,
    team2Score: null,
    team2Overs: null,
    result: null,
    playerOfTheMatch: {
      name: null,
      performance: null
    },
    highlights: [
      { type: "image", url: null }
    ],
    battingScorecard: [],
    bowlingScorecard: []
  }
];

const MatchDetails = () => {
  const { matchId } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const matchDetails = sampleMatches.find(m => m.matchId === parseInt(matchId));
    setMatch(matchDetails);
  }, [matchId]);

  if (!match) return <div>Loading...</div>;

  return (
    <div className="match-details-page">
      <h1>{match.team1} vs {match.team2}</h1>
      <p><strong>Match Date:</strong> {match.date}</p>
      <p><strong>Venue:</strong> {match.venue}</p>
      <p><strong>Status:</strong> {match.status}</p>

      <div className="match-details-team-info">
        <div className="match-details-team">
          <img className="match-details-team-logo" src={match.team1Logo} alt={match.team1} />
          <div>{match.team1}</div>
          <div>{match.team1Score} ({match.team1Overs} overs)</div>
        </div>
        <div className="match-details-vs">VS</div>
        <div className="match-details-team">
          <img className="match-details-team-logo" src={match.team2Logo} alt={match.team2} />
          <div>{match.team2}</div>
          <div>{match.team2Score} ({match.team2Overs} overs)</div>
        </div>
      </div>

      <div className="match-details-result">
        <h2>Match Result</h2>
        <p>{match.result}</p>
      </div>

      <div className="match-details-player-of-the-match">
        <h3>Player of the Match</h3>
        <p><strong>{match.playerOfTheMatch.name}</strong></p>
        <p>{match.playerOfTheMatch.performance}</p>
      </div>

      {/* <div className="match-details-match-highlights">
        <h3>Match Highlights</h3>
        <ul>
          {match.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div> */}
      <div className="match-details-match-highlights">
  <h3>Match Highlights</h3>
  <div className="highlight-media-container">
    {match.highlights.map((highlight, index) => {
      if (highlight.type === 'video') {
        return (
          <div key={index} className="highlight-video">
            <iframe
              width="300"
              height="180"
              src={highlight.url}
              title={`Highlight Video ${index}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        );
      } else if (highlight.type === 'image') {
        return (
          <div key={index} className="highlight-image">
            <img src={highlight.url} alt={`Highlight ${index}`} width="300" />
          </div>
        );
      } else {
        return null;
      }
    })}
  </div>
</div>


      <div className="match-details-scorecard">
        <h3>Batting Scorecard</h3>
        <table className="match-details-table">
          <thead>
            <tr>
              <th className="match-details-th">Player</th>
              <th className="match-details-th">Runs</th>
              <th className="match-details-th">Balls</th>
              <th className="match-details-th">4s</th>
              <th className="match-details-th">6s</th>
            </tr>
          </thead>
          <tbody>
            {match.battingScorecard.map((player, index) => (
              <tr key={index}>
                <td className="match-details-td">{player.player}</td>
                <td className="match-details-td">{player.runs}</td>
                <td className="match-details-td">{player.balls}</td>
                <td className="match-details-td">{player.fours}</td>
                <td className="match-details-td">{player.sixes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Bowling Scorecard</h3>
        <table className="match-details-table">
          <thead>
            <tr>
              <th className="match-details-th">Player</th>
              <th className="match-details-th">Overs</th>
              <th className="match-details-th">Wickets</th>
              <th className="match-details-th">Runs</th>
            </tr>
          </thead>
          <tbody>
            {match.bowlingScorecard.map((player, index) => (
              <tr key={index}>
                <td className="match-details-td">{player.player}</td>
                <td className="match-details-td">{player.overs}</td>
                <td className="match-details-td">{player.wickets}</td>
                <td className="match-details-td">{player.runs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchDetails;
