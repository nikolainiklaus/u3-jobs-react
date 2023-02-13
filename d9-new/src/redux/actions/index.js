export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addToFavourite = (companyName) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: companyName,
  };
};

export const removeFromFavourite = (companyName) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: companyName,
  };
};

export const fetchJobs = (query) => {
  return async (dispatch) => {
    try {
      const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?search=";
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: "FETCH_JOBS_SUCCESS", payload: data });
        console.log("success", data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
