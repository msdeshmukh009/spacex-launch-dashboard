import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllLaunches } from "../helpers";
import {
  addFilter,
  removeFilter,
  addStartDate,
  addEndDate,
  clearDateEndpoints,
} from "../launchBoardSlice";
import { filterLaunchList } from "../../../utils";
import { TableRow } from "./TableRow";

const LaunchBoard = () => {
  const {
    isLoading,
    allLaunches,
    error,
    filters: { appliedFilters, dateEndpoints },
  } = useSelector(state => state.launchBoard);
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [showDateFilter, setShowDateFilter] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLaunches());
  }, []);

  const handleCheckbox = e => {
    const { name } = e.target;

    if (appliedFilters.includes(name)) {
      dispatch(removeFilter(name));
    } else {
      dispatch(addFilter(name));
    }
  };

  const handleDate = e => {
    const { name, value } = e.target;
    console.log(value, name);
    if (name === "start") {
      dispatch(addStartDate(value));
    }
    if (name === "end") {
      dispatch(addEndDate(value));
    }
  };

  const clearDates = () => {
    dispatch(clearDateEndpoints());
    setShowDateFilter(false);
  };

  const filteredList = filterLaunchList({ appliedFilters, dateEndpoints }, allLaunches);

  return (
    <div className="text-center">
      <h1 className="text-2xl text-center">All Launches</h1>

      <table className="m-auto w-full mt-4 border-spacing-y-2 border-separate">
        <thead>
          <tr className="sticky top-0 bg-[#054B83] w-1/5">
            <th className="p-2 w-1/5">Mission Name</th>
            <th className="p-2 w-1/5">Flight Number</th>
            <th className="p-2 w-1/5">Rocket</th>
            <th className="p-2 w-1/5 relative ">
              <span>Launch Date</span>
              <button
                className={`text-xs inline-block ml-2 transition-all ${
                  showDateFilter ? "rotate-180" : ""
                }`}
                onClick={() => setShowDateFilter(prevState => !prevState)}
              >
                <i className="fas fa-triangle"></i>
              </button>
              {showDateFilter ? (
                <div className="absolute w-max bg-[#3d3c3c] top-8 right-8  flex flex-col gap-2 items-center justify-center p-2 rounded-md shadow-xl">
                  <div className="flex justify-end w-full">
                    <button title="Clear Filter" onClick={clearDates}>
                      Clear
                    </button>
                  </div>
                  <label className="flex justify-between gap-2 w-full">
                    <span> Start Date</span>
                    <input
                      className="text-zinc-400 p-2 rounded-md"
                      type="date"
                      name="start"
                      value={dateEndpoints.start}
                      onChange={handleDate}
                    />
                  </label>
                  <label className="flex justify-between gap-2 w-full">
                    <span>End Date</span>
                    <input
                      className="text-zinc-400 p-2 rounded-md"
                      type="date"
                      name="end"
                      min={dateEndpoints.start}
                      value={dateEndpoints.end}
                      onChange={handleDate}
                    />
                  </label>
                </div>
              ) : null}
            </th>

            <th className="p-2 w-1/5 relative">
              <span>Launch Status</span>
              <button
                className={`text-xs inline-block ml-2 transition-all ${
                  showStatusFilter ? "rotate-180" : ""
                }`}
                onClick={() => setShowStatusFilter(prevState => !prevState)}
              >
                <i className="fas fa-triangle"></i>
              </button>
              {showStatusFilter ? (
                <div className="absolute bg-[#3d3c3c] top-8 right-20 flex flex-col items-start p-2 rounded-md shadow-xl">
                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      name="past"
                      checked={appliedFilters.includes("past")}
                      onChange={handleCheckbox}
                    />
                    Past
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      name="upcoming"
                      checked={appliedFilters.includes("upcoming")}
                      onChange={handleCheckbox}
                    />
                    Upcoming
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      name="success"
                      checked={appliedFilters.includes("success")}
                      onChange={handleCheckbox}
                    />
                    Success
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      name="failed"
                      checked={appliedFilters.includes("failed")}
                      onChange={handleCheckbox}
                    />
                    Failed
                  </label>
                </div>
              ) : null}
            </th>
          </tr>
        </thead>

        <tbody>
          {isLoading && (
            <tr>
              <td className="text-center">Loading...</td>
              <td className="text-center">Loading...</td>
              <td className="text-center">Loading...</td>
              <td className="text-center">Loading...</td>
              <td className="text-center">Loading...</td>
            </tr>
          )}

          {!isLoading &&
            filteredList.map(launch => <TableRow key={launch.mission_name} launch={launch} />)}
        </tbody>
      </table>
      {filteredList.length === 0 && !isLoading ? <h2>No Data Available</h2> : null}
    </div>
  );
};
export { LaunchBoard };
