import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.scss';
import { fetchSearchedItems } from '../../store/slices/searchSlices';
import ButtonComponent from '../Button/ButtonComponent';

function Filter() {
  const dispatch = useDispatch();
  const searchPhrases = {};
  const [input, setInput] = useState('');
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchPhrases.query = input || ' ';
    if (searchPhrases.query) { dispatch(fetchSearchedItems(searchPhrases)); }
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
export default Filter;
