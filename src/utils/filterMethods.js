const filterLaunchList = ({ appliedFilters, dateEndpoints }, data) => {
  let tempData = [...data];

  if (appliedFilters.includes("past") && appliedFilters.includes("upcoming")) {
    tempData = data;
  } else {
    if (appliedFilters.includes("past")) {
      tempData = tempData.filter(launch => !launch.upcoming);
    }
    if (appliedFilters.includes("upcoming")) {
      tempData = tempData.filter(launch => launch.upcoming);
    }
  }

  if (!(appliedFilters.includes("success") && appliedFilters.includes("failed"))) {
    if (appliedFilters.includes("success")) {
      tempData = tempData.filter(launch => launch.launch_success);
    }
    if (appliedFilters.includes("failed")) {
      tempData = tempData.filter(launch => !launch.launch_success);
    }
  }

  if (dateEndpoints.start && dateEndpoints.end) {
    tempData = tempData.filter(
      launch =>
        new Date(launch.launch_date_utc) < new Date(dateEndpoints.end) &&
        new Date(launch.launch_date_utc) > new Date(dateEndpoints.start)
    );
  }

  return tempData;
};

export { filterLaunchList };
