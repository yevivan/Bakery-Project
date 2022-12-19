import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.scss';

import { fetchCatalog } from '../../store/slices/catalogSlices';

import { clearFilter } from '../../store/slices/filterSlices';
import { addSearch } from '../../store/slices/searchSlices';

function Search({
  style, stylesInput, stylesLabel, props,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search.search);

  function handleInputChange(e) {
    dispatch(addSearch(e.target.value));
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (search.query) {
      dispatch(fetchCatalog(search)); dispatch(clearFilter());
      navigate('/search');
    }
  }

  return (
    <div style={style}>
      <form className={styles.searchForm} style={styles} onSubmit={handleSubmit}>
        <label htmlFor="search" style={stylesLabel}>
          <input type="search" value={search.query} onInput={handleInputChange} name="search" placeholder="search" className={styles.searchInput} style={stylesInput} />
        </label>

        <button type="submit" className={styles.btnSearch}>

          <div>
            {props}

          </div>

        </button>

      </form>
    </div>

  );
}
export default Search;
