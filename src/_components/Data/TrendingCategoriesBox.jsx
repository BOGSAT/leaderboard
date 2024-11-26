import React from "react";

export default function TrendingBox({ trendingBox }) {
  return <div id="trendingBox">{TrendingBox(trendingBox)}</div>;
}
function TrendingBox(trendingBox) {
  return (
    <>
      <div className="">
        {trendingBox.map((value, index) => (
          <div key={index} className="grid grid-cols-1 gap-4 text-black">
            <div className="flex justify-center name border-b-2 border-gray-400 ">
              {value.category} 
            </div>
            <div className="flex justify-center score border-b-2 border-gray-400 ">
              {value.count}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}