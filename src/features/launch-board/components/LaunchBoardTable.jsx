import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllLaunches } from "../helpers";
import { filterLaunchList } from "../../../utils";
import { TableRow } from "./TableRow";
import { DatesFilter } from "./DatesFilter";
import { LaunchStatusFilter } from "./LaunchStatusFilter";

const LaunchBoardTable = () => {
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
  }, [dispatch]);

  const filteredList = filterLaunchList({ appliedFilters, dateEndpoints }, allLaunches);

  const TableHead = () => {
    return (
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

            {showDateFilter ? <DatesFilter /> : null}
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

            {showStatusFilter ? <LaunchStatusFilter /> : null}
          </th>
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    return (
      <tbody>
        {!isLoading &&
          filteredList.map(launch => <TableRow key={launch.mission_name} launch={launch} />)}
      </tbody>
    );
  };

  return (
    <>
      <table className="m-auto w-full mt-4 border-spacing-y-2 border-separate">
        <TableHead />
        <TableBody />
      </table>

      {isLoading ? <h2>Loading...</h2> : null}
      {error ? <h2 className="text-red-600 text-2xl">{error}</h2> : null}
      {filteredList.length === 0 && !isLoading ? <h2>No Data Available</h2> : null}
    </>
  );
};

export { LaunchBoardTable };
