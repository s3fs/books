const bookReducer = (state = { books: [], book: null, index: 0, loading: false, category: 'All', sort: 'Relevance' }, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        books: action.data
      }
    case 'SET_BOOK':
      return {
        ...state,
        book: action.data
      }
    case 'SET_LOADING_STATE':
      return {
        ...state,
        loading: !state.loading
      }
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

export const search = (data) => {
  console.log(`data`, data)
  return {
    type: 'SEARCH',
    data
  }
}

export const changeCategory = (category) => {
  return {
    type: 'CHANGE_CATEGORY',
    data: category
  }
}

export const changeSort = (sort) => {
  return {
    type: 'CHANGE_SORT',
    data: sort
  }
}

export const setLoadingState = () => {
  return {
    type: 'SET_LOADING_STATE'
  }
}

export default bookReducer