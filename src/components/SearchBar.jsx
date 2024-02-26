
import styles from './SearchBar.module.css';
import { useState } from 'react';
import { toast } from "react-toastify";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className={styles.inputField}
        />
         <button type="submit" className={styles.searchButton}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
