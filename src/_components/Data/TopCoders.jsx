import React from "react";

export default function TopCoders({ topCoders }) {
  return <div id="topCoders">{LoopCoders(topCoders)}</div>;
}
function LoopCoders(topCoders) {
  return (
    <>
      <div className="">
        {topCoders.map((value, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 text-black w-96">
            <div className="flex justify-center score border-b-2 border-gray-400 ">
              <img
                className="w-auto h-9 rounded-xl"
                src={value.avatar_url}
                alt=""
              />
            </div>
            <div className="flex justify-center name border-b-2 border-gray-400 ">
              {value.first_name} {value.last_name}
            </div>
            <div className="flex justify-center score border-b-2 border-gray-400 ">
              {value.score}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
