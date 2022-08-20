import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
const axios = require('axios').default;

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {
      if(search) {
        axios.baseURL = "https://itunes.apple.com"
        axios.get(`/search?term=${search}`)
          .then(function(response) {
            if (response.data.resultCount > 0) {
              setData(response.data.results)
            }
            else {
              setMessage("Not found!")
            }
          })
      }
    }, [search])

  

    return (
        <div> 
          <SearchBar handleSearch={setSearch} />
          {message}
          <DataContext.Provider value={data}> 
            <Gallery />
            </DataContext.Provider>
           
        </div>
    )
}

export default App

