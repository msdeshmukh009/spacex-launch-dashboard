import { useSelector, useDispatch } from "react-redux";
import { addStartDate, addEndDate, clearDateEndpoints } from "../launchBoardSlice";

const DatesFilter = () => {
  const {
    filters: { dateEndpoints },
  } = useSelector(state => state.launchBoard);

  const dispatch = useDispatch();

  const handleDate = e => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(value, name);
    if (name === "start") {
      dispatch(addStartDate(value));
    }
    if (name === "end") {
      dispatch(addEndDate(value));
    }
  };

  const clearDates = e => {
    e.preventDefault();
    dispatch(clearDateEndpoints());
  };

  return (
    <form className="absolute w-max bg-[#3d3c3c] top-8 right-8  flex flex-col gap-2 items-center justify-center p-2 rounded-md shadow-xl">
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
    </form>
  );
};

export { DatesFilter };
