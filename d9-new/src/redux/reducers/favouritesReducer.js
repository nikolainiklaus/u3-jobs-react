const initialState = {
  list: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };
    case "FETCH_JOBS_SUCCESS":
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default favouritesReducer;
