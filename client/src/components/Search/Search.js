import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.scss';

import { fetchCatalog } from '../../store/slices/catalogSlices';

import { clearFilter } from '../../store/slices/filterSlices';
import { addSearch } from '../../store/slices/searchSlices';

function Search({
  style, stylesInput, stylesLabel, props,
}) {
  const search = useSelector((state) => state.search.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query');
  // dispatch(addSearch(query));

  function handleInputChange(e) {
    dispatch(addSearch(e.target.value));
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (search.query) {
      console.log(search.query);
      dispatch(fetchCatalog(search));
      dispatch(clearFilter());
      navigate(`/search?query=${search.query}`);
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
