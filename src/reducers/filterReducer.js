const filterReducer = (state = { }, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        category: action.data
      }
    case 'CHANGE_SORT':
      return {
        ...state,
        sort: action.data
      }
    default: 
      return state
  }
}



export default filterReducer