export const addCart = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item
  }
}

export const deleteCart = (items) => {
  console.log(items);
  return {
    type: "DELETE_ITEM",
    payload: items
  }
}