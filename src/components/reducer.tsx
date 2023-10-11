// reducer.js

// Define an initial state
const initialState = {
    count: 0,
  };
  
  // Define the reducer function
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  