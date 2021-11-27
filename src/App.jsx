import { useDispatch, useSelector } from "react-redux"
import { search, changeCategory, changeSort, setLoadingState } from "./reducers/bookReducer"
import { getBooks } from "./services/bookService"
import { Routes, Link, Route, useMatch } from "react-router-dom"

const categoryOptions = ['All', 'Art', 'Biography', 'Computers', 'History', 'Medical', 'Poetry']
const sortOptions = ['Relevance', 'Newest']

const Search = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const handleFormSubmit = async (ev) => {
    ev.preventDefault()
    const data = ev.target[0].value
    if (!data) return
    ev.target[0].value = ''
    dispatch(setLoadingState())
    const res = await getBooks({ data, index: state.index, category: state.category })
    dispatch(search(res.items))
    dispatch(setLoadingState())
  }

  return(
    <div>
      <form className='search-form' onSubmit={handleFormSubmit}>
        <div className='input-wrapper'><input className='search-form_input' placeholder='Enter a book name...' /><button type='submit' className='search-form_submit-button'>Search</button></div>
      <div className='search-form_selectors'>
        <label htmlFor='category-selector'>Category: 
          <select id='category-selector' onChange={({ target }) => dispatch(changeCategory(target.value))}>
            {categoryOptions.map(n => <option key={n}>{n}</option>)}
          </select>
        </label>
        <label htmlFor='sort-selector'>Sort by: 
          <select id='sort-selector' onChange={({ target }) => dispatch(changeSort(target.value))}>
            {sortOptions.map(n => <option key={n}>{n}</option>)}
          </select>
        </label>
      </div>
      </form>
    </div>
  )
}

const Books = ({ books }) => {
  if (books.length === 0) {
    return null
  }

  return(
    <ul className='book-card_container'>
      {
        books.map(n => {
          return(
            <li key={n.id}>
              <Link className='book-card' to={`/books/${n.id}`}>
                <img className='book-card_image' src={n.volumeInfo.imageLinks?.smallThumbnail }></img>
                <div className='book-card_contents'>
                  <span className='book-card_contents__title'>
                    {n.volumeInfo?.title.length > 40 ? `${n.volumeInfo?.title.substring(0, 40)}...`: n.volumeInfo?.title}
                  </span>
                  <span className='book-card_contents__categories'>
                    {n.volumeInfo?.categories}
                  </span>
                  <span className='book-card_contents__authors'>
                    {n.volumeInfo.authors?.join(', ')}
                  </span>
                </div>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

const Book = ({ book }) => {
  if (book === null || book === undefined) {
    return(
      <div>No such book. <Link to='/books'>Go to the main page.</Link></div>
    )
  }

  return(
    <div>
      <div>{book.volumeInfo.title}</div>
      <Link to='/books'>Back</Link>
    </div>
  )
}

const App = () => {
  const books = useSelector(({ books }) => books)
  const loadingState = useSelector(({ loading }) => loading)

  const match = useMatch('/books/:id')
  const book = match ? books.find(n => n.id === match.params.id) : null

  return(
    <div className='container'>
      <Search />
      <Routes>
        <Route path='/books/:id' element={<Book book={book} />} />
        <Route path='/books' element={loadingState ? <div>Loading...</div> : <Books books={books}/>} />
      </Routes>
    </div>
  )
}

export default App