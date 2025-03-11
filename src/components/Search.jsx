import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all')

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query, type === 'all' ? '' : type);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(query, type === 'all' ? '' : type);
    }
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  
  return (
    <div className="container my-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter name"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Поиск
        </button>
      </div>

      <div className="mt-3">
        <label className="me-4">
          <input
            className='me-2'
            type="radio"
            value="movie"
            checked={type === 'movie'}
            onChange={handleTypeChange}
          />
          Films
        </label>
        <label className='me-4'>
          <input
            className='me-2'
            type="radio"
            value="series"
            checked={type === 'series'}
            onChange={handleTypeChange}
          />
          Series
        </label>
        <label className="me-4">
          <input
            className='me-2'
            type="radio"
            value="all"
            checked={type === 'all'}
            onChange={handleTypeChange}
          />
          All types
        </label>
      </div>
    </div>
  );
};

export default Search;
