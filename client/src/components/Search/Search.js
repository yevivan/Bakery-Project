import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import styles from './Search.module.scss';

import { clearFilter } from '../../store/slices/filterSlices';
import { addSearch } from '../../store/slices/searchSlices';

function Search({
  style, stylesInput, stylesLabel, props,
}) {
  const search = useSelector((state) => state.search.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState(search.query || '');
  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query');
  // dispatch(addSearch(query));

  // function handleInputChange(e) {
  //   dispatch(addSearch(e.target.value));
  //   console.log(e.target.value);
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //
  //   if (search.query) {
  //     console.log(search.query);
  //     dispatch(fetchCatalog(search));
  //     dispatch(clearFilter());
  //     navigate(`/search?query=${search.query}`);
  //   }
  // }

  // function handleInputChange(e) {
  //   setSearchValue(e.target.search.value);
  //   // const searchQuery = e.target.search.value;
  //   // console.log(searchQuery);
  // }
  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.search.value.length) {
      console.log(e.target.search.value);
      dispatch(addSearch(e.target.search.value));
      // dispatch(fetchCatalog(search));
      dispatch(clearFilter());
      navigate(`/search?query=${e.target.search.value}`);
    }
  }
  useEffect(() => {
    setSearchValue(search.query);
  }, [search]);

  return (
    <div style={style}>
      <form className={styles.searchForm} style={styles} onSubmit={handleSubmit}>
        <label htmlFor="search" style={stylesLabel}>
          <input type="search" name="search" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="search" className={styles.searchInput} style={stylesInput} />
        </label>
        {/* onChange={handleInputChange} value={search.query} */}
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
