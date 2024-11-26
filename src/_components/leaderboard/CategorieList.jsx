import React from "react";
import Table from "../Data/Table";
import { challengeData } from "../../challengeData";

function CategorieList() {
  return (
    <div>
      <h3 className="text-black ml-1 mb-1">Select category</h3>
      <span>
        <button className="inline-flex items-center ml-1 px-3 py-0.5 font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          All
        </button>{" "}
        <button className="inline-flex items-center ml-1 px-3 py-0.5 font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Data structure
        </button>{" "}
        <button className="inline-flex items-center ml-1 px-3 py-0.5 font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Graphs
        </button>{" "}
        <button className="inline-flex items-center ml-1 px-3 py-0.5 font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Databases
        </button>
      </span>
      <div className=" mt-8 grid grid-cols-5 gap-4 text-black font-bold ">
        <div className=" flex justify-center">Status</div>
        <div className=" flex justify-center">Title</div>
        <div className=" flex justify-center">Category</div>
        <div className=" flex justify-center">Diffuculty</div>
        <div className=" flex justify-center">Solution Rate</div>
      </div>
    </div>
  );
}

export default CategorieList;
