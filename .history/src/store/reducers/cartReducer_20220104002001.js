// store -> reducers -> cartReducer.js

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM" :
      console.log(action);
      return [...state, action.payload];
    case "DELETE_ITEM" :
      return [...action.payload];
    default:
      return state;
  }
}

export default cartReducer;