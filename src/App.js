import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Search from './components/Search'
import Pagination from './components/Pagination'
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(101)
  
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`http://universities.hipolabs.com/search?country=${query}`)

      setItems(res.data)
      setLoading(false)
    }

    fetchItems()
  }, [query])

  const indexLastItem = currentPage * itemsPerPage
  const indexFirstItem = indexLastItem - itemsPerPage
  const currentItem = items.slice(indexFirstItem - indexLastItem)

  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  return (
    <div className="container">
      <h1 className="title center">Worldwide Univeristies</h1>
      <Search getQuery={(q) => setQuery(q)} />
      <Countries isLoading={isLoading}  items={currentItem} />

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
