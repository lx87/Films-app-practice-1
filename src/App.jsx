import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import Movies from './components/Movies'

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query, type) => {
    if(!query.trim()) return;
    setLoading(true);
    setHasSearched(true);

    const responce = await fetch(`https://www.omdbapi.com/?s=${query}&type=${type}&apikey=4866d5e8`);
    const data = await responce.json();
    setMovies(data.Search || []);
    setLoading(false);
  }

  return (
      <div className='wrapper'>
        <Header />
        <main className='main-content'>
          <Search onSearch={handleSearch}/>
          {loading ? ( 
            <div className='spinner-border spinner-custom not-found' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
           ) : ( <Movies movies={movies} hasSearched={hasSearched} />)}
        </main>
        <Footer />
      </div>
  )
}

export default App