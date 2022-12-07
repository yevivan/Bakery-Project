import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './SearchForHeader.module.scss';

import { fetchCatalog } from '../../store/slices/catalogSlices';
import searchSvg from '../../svg/search.svg';

import { clearFilter } from '../../store/slices/filterSlices';
import { addSearch } from '../../store/slices/searchSlices';

function SearchForHeader({ style }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search.search);

  console.log(search);
  function handleInputChange(e) {
    dispatch(addSearch(e.target.value));
  }
  function handleSubmit(e) {
    e.preventDefault();
    // search.query = input || ' ';
    console.log(search);
    if (search.query) {
      dispatch(fetchCatalog(search)); dispatch(clearFilter());
      navigate('/search');
    }
  }

  return (
    <div style={style}>
      <form className={styles.searchForm} style={styles} onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input type="search" value={search.query} onInput={handleInputChange} name="search" placeholder="search" className={styles.searchInput} />
        </label>

        <button type="submit" className={styles.btnSearch}>

          <div>
            <img src={searchSvg} alt="search" />
          </div>

        </button>

      </form>
    </div>

  );
}
export default SearchForHeader;
