import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../../components";
import { getAllLaunches } from "../helpers";
import { TableRow } from "./TableRow";

const LaunchBoard = () => {
  const { isLoading, allLaunches, error } = useSelector(state => state.launchBoard);
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [showDateFilter, setShowDateFilter] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLaunches());
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl text-center">All Launches</h1>

      <table className="m-auto w-full mt-4 border-spacing-y-2 border-separate">
        <thead>
          <tr className="sticky top-0 bg-[#054B83] w-1/5">
            <th className="p-2 w-1/5">Mission Name</th>
            <th className="p-2 w-1/5">Flight Number</th>
            <th className="p-2 w-1/5">Rocket</th>
            <th className="p-2 w-1/5 relative">
              Launch Date(mm/dd/yyyy)
              <button onClick={() => setShowDateFilter(prevState => !prevState)}>
                {showDateFilter ? "Hide" : "Show"}
              </button>
              {showDateFilter ? (
                <div className="absolute bg-[#3d3c3c] top-8 right-20 flex flex-col items-start p-2 rounded-md shadow-xl">
                  <label className="flex gap-2">
                    Start Date
                    <input className="text-zinc-400" type="date" />
                  </label>
                  <label className="flex gap-2">
                    End Date
                    <input className="text-zinc-400" type="date" />
                  </label>
                </div>
              ) : null}
            </th>

            <th className="p-2 w-1/5 relative">
              Launch Status
              <button onClick={() => setShowStatusFilter(prevState => !prevState)}>
                {showStatusFilter ? "Hide" : "Show"}
              </button>
              {showStatusFilter ? (
                <div className="absolute bg-[#3d3c3c] top-8 right-20 flex flex-col items-start p-2 rounded-md shadow-xl">
                  <label className="flex gap-2">
                    <input type="checkbox" name="past" />
                    Past
                  </label>
                  <label className="flex gap-2">
                    <input type="checkbox" name="past" />
                    Upcoming
                  </label>
                  <label className="flex gap-2">
                    <input type="checkbox" name="past" />
                    Success
                  </label>
                  <label className="flex gap-2">
                    <input type="checkbox" name="past" />
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
            allLaunches.map(launch => <TableRow key={launch.mission_name} launch={launch} />)}
        </tbody>
      </table>
    </div>
  );
};
export { LaunchBoard };
