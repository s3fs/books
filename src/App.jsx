import { useDispatch, useSelector } from "react-redux"
import { search, changeCategory, changeSort, setLoadingState, loadMore } from "./reducers/bookReducer"
import { getBooks } from "./services/bookService"
import { Routes, Link, Route, useMatch, useNavigate } from "react-router-dom"

const categoryOptions = ['All', 'Art', 'Biography', 'Computers', 'History', 'Medical', 'Poetry']
const sortOptions = ['Relevance', 'Newest']

const Search = ({ dispatch, state }) => {
  const navigate = useNavigate()

  const handleFormSubmit = async (ev) => {
    ev.preventDefault()
    const data = ev.target[0].value
    if (!data) return
    ev.target[0].value = ''
    navigate('/books')
    dispatch(setLoadingState())
    const res = await getBooks({ data, index: state.index, category: state.category })
    dispatch(search(res.items, data, res.totalItems))
    dispatch(setLoadingState())
  }

  return(
    <div>
      <form className='search-form' onSubmit={handleFormSubmit}>
        <div className='input-wrapper'><input className='search-form_input' placeholder='Enter a book name...' /><button type='submit' className='search-form_submit-button'>Search</button></div>
      <div className='search-form_selectors'>
        <label htmlFor='category-selector'>Category: {' '}
          <select id='category-selector' onChange={({ target }) => dispatch(changeCategory(target.value))}>
            {categoryOptions.map(n => <option key={n}>{n}</option>)}
          </select>
        </label>
        <label htmlFor='sort-selector'>Sort by: {' '}
          <select id='sort-selector' onChange={({ target }) => dispatch(changeSort(target.value))}>
            {sortOptions.map(n => <option key={n}>{n}</option>)}
          </select>
        </label>
      </div>
      </form>
    </div>
  )
}

const Books = ({ dispatch, state, books }) => {
  if (books === undefined) {
    return <h3 className='screen'>Hmm. No results for that.</h3>
  }

  if (books.length === 0) {
    return <h3 className='screen'>Hi! Start searching the library by entering a title above.</h3>
  }

  const loadMoreBooks = async () => {
    const res = await getBooks({ data: state.query, index: state.index + 30, category: state.category })
    dispatch(loadMore(res.items))
  }

  const sortedBooks = state.sort === 'Relevance' ? books : [...books].sort((a, b) => Number(b.volumeInfo?.publishedDate?.substring(0, 4)) - Number(a.volumeInfo?.publishedDate?.substring(0, 4)))

  return(
    <div>
      <h3 className='screen'>Found {state.booksAmount} books on "{state.query}"</h3>
      <ul className='book-card_container'>
        {sortedBooks.map(n => <Book key={n.id} book={n} />)}
      </ul>
      <div className="pagination-button_container"><button className='pagination-button' onClick={loadMoreBooks}>Load more...</button></div>
    </div>
  )
}

const Book = ({ book, page }) => {
  if (book === null || book === undefined) {
    return(
      <h3 className='screen'>No such book. <Link to='/books'>Go to the main page.</Link></h3>
    )
  }

  if (page) {
    return(
      <div>
        <div className='book-page_container'>
          <img className='book-page_image' src={book.volumeInfo?.imageLinks?.smallThumbnail}></img>
          <div className='book-page_contents'>
          <span className='book-page_contents__title'>
            {book.volumeInfo?.title}
          </span>
          <span className='book-card_contents__categories'>
            Categories: {book.volumeInfo?.categories?.join(', ') || 'No categories listed'}
          </span>
          <span className='book-card_contents__authors'>
            Authors: {book.volumeInfo?.authors?.join(', ') || 'Author unknown'}
          </span>
        </div>
        </div>
        <div className='book-page_description'>{book.volumeInfo?.description}</div>
        <h3 className='screen'>
          <Link to='/books'>Go back</Link>
        </h3>
      </div>
    )
  }

  return(
    <li key={book.id}>
    <Link className='book-card' to={`/books/${book.id}`}>
      <img className='book-card_image' src={book.volumeInfo?.imageLinks?.smallThumbnail}></img>
      <div className='book-card_contents'>
        <span className='book-card_contents__title'>
          {book.volumeInfo?.title?.length > 40 ? `${book.volumeInfo?.title.substring(0, 40)}...`: book.volumeInfo?.title}
        </span>
        <span className='book-card_contents__categories'>
          {book.volumeInfo?.categories}
        </span>
        <span className='book-card_contents__authors'>
          {book.volumeInfo?.authors?.join(', ')}
        </span>
      </div>
      <div>{page ? book.volumeInfo?.description : null}</div>
    </Link>
    </li>
  )
}

const App = () => {
  const dispatch = useDispatch()
  const [books, loadingState, state] = useSelector(state => [state.books, state.loading, state])

  const match = useMatch('/books/:id')
  const book = match ? books.find(n => n.id === match.params.id) : null

  return(
    <div className='container'>
      <Search dispatch={dispatch} state={state} />
      <Routes>
        <Route path='/books/:id' element={<Book book={book} page={true} />} />
        <Route path='/books' element={loadingState ? <h3 className='loading screen'>Loading... Please wait.</h3> : <Books books={books} dispatch={dispatch} state={state} />} />
      </Routes>
    </div>
  )
}

export default App