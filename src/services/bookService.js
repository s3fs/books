import axios from "axios"

export const getBooks = async ({ data, index, category }) => {
  const query = data.split(' ').join('+')
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}${category !== 'All' ? `+subject:${category}`: ''}&maxResults=30&startIndex=${index}`
  const res = await axios.get(url)
  return res.data
}