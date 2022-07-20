import { useSelector, useDispatch } from "react-redux";
import { removeFilter, addFilter } from "../launchBoardSlice";

const LaunchStatusFilter = () => {
  const {
    filters: { appliedFilters },
  } = useSelector(state => state.launchBoard);

  const dispatch = useDispatch();

  const handleCheckbox = e => {
    const { name } = e.target;

    if (appliedFilters.includes(name)) {
      dispatch(removeFilter(name));
    } else {
      dispatch(addFilter(name));
    }
  };

  return (
    <form className="absolute bg-[#3d3c3c] top-8 right-20 flex flex-col items-start p-2 rounded-md shadow-xl">
      <label className="flex gap-2 cursor-pointer">
        <input
          className="w-4"
          type="checkbox"
          name="past"
          checked={appliedFilters.includes("past")}
          onChange={handleCheckbox}
        />
        Past
      </label>
      <label className="flex gap-2 cursor-pointer">
        <input
          className="w-4"
          type="checkbox"
          name="upcoming"
          checked={appliedFilters.includes("upcoming")}
          onChange={handleCheckbox}
        />
        Upcoming
      </label>
      <label className="flex gap-2 cursor-pointer">
        <input
          className="w-4"
          type="checkbox"
          name="success"
          checked={appliedFilters.includes("success")}
          onChange={handleCheckbox}
        />
        Success
      </label>
      <label className="flex gap-2 cursor-pointer">
        <input
          className="w-4"
          type="checkbox"
          name="failed"
          checked={appliedFilters.includes("failed")}
          onChange={handleCheckbox}
        />
        Failed
      </label>
    </form>
  );
};

export { LaunchStatusFilter };
