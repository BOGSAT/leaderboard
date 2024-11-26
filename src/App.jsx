import React from "react";
import Board from "./_components/leaderboard/Leaderboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./_components/leaderboard/HomePage";
import ProfilePage from "./_components/leaderboard/profilePage/ProfilePage";
import Challenges from "./_components/Challenges";

function App() {
  return (
    <Router>
      <div className="flex flex-col w-full h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<Board />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/challenges" element={<Challenges />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
