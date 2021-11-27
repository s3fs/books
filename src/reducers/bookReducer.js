const bookReducer = (state = { books: [], query: null, index: 0, loading: false, category: 'All', sort: 'Relevance' }, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        books: action.data,
        query: action.query
      }
    case 'LOAD_MORE_BOOKS':
      console.log(`action.data`, action.data)
      return {
        ...state,
        books: [...state.books, ...action.data],
        index: state.index + 30
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

export const search = (data, query) => {
  return {
    type: 'SEARCH',
    data,
    query
  }
}

export const loadMore = (data) => {
  return {
    type: 'LOAD_MORE_BOOKS',
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