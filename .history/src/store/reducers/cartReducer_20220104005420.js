// store -> reducers -> cartReducer.js

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM" :
      return [...state, action.payload];
    case "DELETE_ITEM" :
      let newState = state.filter(item => {
        if(item.id === action.payload.id) {
          return true;
        }
        return false;
      })
      console.log(newState);
      return [...action.payload];
    default:
      return state;
  }
}

export default cartReducer;