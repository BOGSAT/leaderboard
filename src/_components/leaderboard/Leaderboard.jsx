import React from "react";
import Profiles from "../Data/Profiles";
import { database } from "../../database";
import Navbar from "./navbar";


export default function Board() {
  return (
    <div className="dark flex flex-col w-full h-full">
      <Navbar />
      <div className="dark flex-grow bg-white dark:bg-purple-550">
        <h1 className="dark mt-5 text-black">Leaderboard</h1>
        <Profiles database={database} />
      </div>
    </div>
  );
}
