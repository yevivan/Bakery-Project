import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Search.module.scss';
// import { fetchSearchedItems } from '../../store/slices/searchSlices';
import ButtonComponent from '../Button/ButtonComponent';
import { fetchCatalog } from '../../store/slices/catalogSlices';

function Search() {
  const dispatch = useDispatch();
  const filter = {};
  const [input, setInput] = useState('');
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    filter.query = input || ' ';
    if (filter.query) { dispatch(fetchCatalog(filter)); }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.search_form}>
      <label htmlFor="search">
        <input type="search" value={input} onInput={handleInputChange} name="search" placeholder="search" className={styles.search_input} />
      </label>
      <ButtonComponent text="SUBMIT" type="submit" className={styles.search_btn} />

    </form>
  );
}
export default Search;
