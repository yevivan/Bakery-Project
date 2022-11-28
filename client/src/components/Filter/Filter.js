import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.scss';
import { fetchSearchedItems } from '../../store/slices/searchSlices';
// import { getSearchedItems } from '../../api/getSearchedItems';

function Filter() {
  const dispatch = useDispatch();
  const searchPhrases = {};
  const [input, setInput] = useState('');
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchPhrases.query = input;
    console.log(searchPhrases);
    if (searchPhrases.query) { dispatch(fetchSearchedItems(searchPhrases)); }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input type="search" value={input} onInput={handleInputChange} name="search" placeholder="search" className={styles.search_input} />
      </label>
    </form>
  );
}
export default Filter;
