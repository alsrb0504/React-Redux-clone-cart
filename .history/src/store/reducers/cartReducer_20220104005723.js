// store -> reducers -> cartReducer.js

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM" :
      return [...state, action.payload];
    case "DELETE_ITEM" :
      let newState = state.filter(item => {
        if(item.id !== action.payload.item.id) {
          return true;
        }
        return false;
      })
      return newState;
    default:
      return state;
  }
}

export default cartReducer;