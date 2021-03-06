const bookReducer = (state = { books: [], query: null, index: 0, loading: false, category: 'All', sort: 'Relevance', booksAmount: 0 }, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        books: action.data,
        query: action.query,
        booksAmount: action.amount
      }
    case 'LOAD_MORE_BOOKS':
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

export const search = (data, query, amount) => {
  return {
    type: 'SEARCH',
    data,
    query,
    amount
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