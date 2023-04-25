import axios from 'axios';
import { useState } from 'react';
import Search from './Search';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const handleSubmit = async (e) => {
    
    setSearchResult([]);
    const config = { params: { q: searchTerm } };
     const response = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
     console.log(response.data)
    const results = response.data.map((res) => ({
      title: res.show.name,
      img : res.show.image?.medium,
      type: res.show.type,
      genre: res.show.genres.join(', '),
      summary: res.show.summary,
    }))
    setSearchResult(results)
    setSearchTerm('')
  }

  return (
    <div className="text-center pt-8">
    <h1 className='font-bold text-3xl my-8 pb-4 font-sans text-gray-500'>DNB's Movie-search App</h1>
    <div>
    <input
    className="input-field bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-9/12 p-2.5"
    type="text"
    value={searchTerm}
    placeholder="Search Movies here.."
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button
    className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium  text-sm  sm:w-auto px-5 py-2.5 text-center"
    onClick={() => handleSubmit()}
  >
    Search
  </button>
    </div>
      {searchResult.map((result, index) =>(
        <Search
        key={index}
        title={result.title}
        image={result.img}
        type={result.type}
        genre={result.genre}
        summary={result.summary}
        />
      ))}
    </div>
  );
}

export default App;
