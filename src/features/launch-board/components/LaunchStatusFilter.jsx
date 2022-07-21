import { forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFilter, addFilter } from "../launchBoardSlice";

const LaunchStatusFilter = forwardRef(({ setShowStatusFilter }, ref) => {
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

    setShowStatusFilter(false);
  };

  return (
    <form
      ref={ref}
      className="absolute bg-[#3d3c3c] top-8 right-20 flex flex-col gap-2 items-start p-2 rounded-md shadow-xl"
    >
      <fieldset className="border-zinc-50 border-2 rounded-md p-2 flex flex-col gap-2 w-full">
        <label className="flex gap-2 cursor-pointer">
          <input
            className="w-6"
            type="checkbox"
            name="past"
            checked={appliedFilters.includes("past")}
            onChange={handleCheckbox}
          />
          Past
        </label>
      </fieldset>

      <fieldset className="border-zinc-50 border-2 rounded-md p-2 flex flex-col gap-2">
        <label className="flex gap-2 cursor-pointer">
          <input
            className="w-6"
            type="checkbox"
            name="upcoming"
            checked={appliedFilters.includes("upcoming")}
            onChange={handleCheckbox}
          />
          Upcoming
        </label>
      </fieldset>
    </form>
  );
});

export { LaunchStatusFilter };
