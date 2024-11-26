import React from "react";

export default function Table({ challengeData }) {
  return <div id="table">{item(challengeData)}</div>;
}

function item(challengeData) {
  return (
    <>
      <div>
        {challengeData.map((value, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 text-black">
            <div className="flex justify-center rank border-b-2 border-gray-400">
              {value.status}
            </div>
            <div className="flex justify-center name border-b-2 border-gray-400">
              {value.title}
            </div>
            <div className="flex justify-center score border-b-2 border-gray-400">
              {value.category}
            </div>
            <div className="flex justify-center difficulty border-b-2 border-gray-400">
              {value.difficulty}
            </div>
            <div className="flex justify-center solved_challenges border-b-2 border-gray-400">
              {value.solutionRate}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
