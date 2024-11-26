import React from "react";
import Navbar from "./navbar";
import CategorieList from "./CategorieList";
import Table from "../Data/Table";
import { challengeData } from "../../challengeData";
import TopCoders from "../Data/TopCoders";
import { topCoders } from "../../topCoders";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <div>
            <h2 className="dark ml-1 mt-5 text-black text-2xl font-bold">
              Challenges
            </h2>
          </div>
          <div>
            <CategorieList />
          </div>
          <div className="flex-auto border-2 rounded-md">
            <Table challengeData={challengeData} />
          </div>
        </div>
        <div>
          <div className="m-5">
            <div>
              <h2 className="text-black flex justify-center text-2xl font-bold">
                Trending Categories
              </h2>
            </div>
            <div className="flex gap-2">
              <div>
                <button
                  type="button"
                  class="inline-flex items-center px-2 py-0.5 text-xs font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Math
                  <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-green-800 bg-green-200 rounded-full">
                    2
                  </span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="inline-flex items-center px-2 py-0.5 text-xs font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  data structures
                  <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-green-800 bg-green-200 rounded-full">
                    2
                  </span>
                </button>
              </div>
            </div>
          </div>
          <h3 className="text-black flex justify-center text-lg font-bold">
            Top 4 coders
          </h3>
          <div className="flex-auto gap-2 border-2 rounded-md">
            <TopCoders topCoders={topCoders} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
