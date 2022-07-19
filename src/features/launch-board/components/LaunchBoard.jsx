import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllLaunches } from "../helpers";

const LaunchBoard = () => {
  const { isLoading, allLaunches, error } = useSelector(state => state.launchBoard);
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
            <th className="p-2 w-1/5">Launch Date(mm/dd/yyyy)</th>
            <th className="p-2 w-1/5">Launch Status</th>
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
            allLaunches.map(launch => (
              <tr
                title={launch.mission_name}
                key={launch.mission_name}
                className=" hover:bg-slate-50 hover:text-zinc-900 transition-colors cursor-pointer"
              >
                <td className="p-2">{launch.mission_name}</td>
                <td>{launch.flight_number}</td>
                <td>{launch.rocket.rocket_name}</td>
                <td>{new Date(launch.launch_date_local).toLocaleDateString()}</td>
                <td>
                  {launch.launch_success ? "Success" : launch.upcoming ? "Upcoming" : "Failed"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export { LaunchBoard };
