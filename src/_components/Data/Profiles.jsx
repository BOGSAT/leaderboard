import React from "react";

export default function Profiles({ database }) {
  return <div id="profiles">{item(database)}</div>;
}

function item(database) {
  return (
    <>
      <div className="">
        <div className="  grid grid-cols-4 gap-4 text-black font-bold ">
          <div className=" flex justify-center">Rank</div>
          <div className=" flex justify-center">Name</div>
          <div className=" flex justify-center">Score</div>
          <div className=" flex justify-center">Solved Challenges</div>
        </div>
        {database.map((value, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 text-black">
            <div className="flex justify-center rank border-b-2 border-gray-400 ">
              {value.rank}{" "}
            </div>
            <div className="flex justify-center name border-b-2 border-gray-400 ">
              {value.first_name} {value.last_name}
            </div>
            <div className="flex justify-center score border-b-2 border-gray-400 ">
              {value.score}
            </div>
            <div className="flex justify-center solved_challenges border-b-2 border-gray-400 ">
              {value.solved_challenges}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
