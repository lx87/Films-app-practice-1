import { useState } from 'react';
import PropTypes from 'prop-types';

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
          placeholder="Введите название фильма"
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
          Фильмы
        </label>
        <label className='me-4'>
          <input
            className='me-2'
            type="radio"
            value="series"
            checked={type === 'series'}
            onChange={handleTypeChange}
          />
          Сериалы
        </label>
        <label className="me-4">
          <input
            className='me-2'
            type="radio"
            value="all"
            checked={type === 'all'}
            onChange={handleTypeChange}
          />
          Все
        </label>
      </div>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
