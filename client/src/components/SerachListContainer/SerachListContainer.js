import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from '../Pages/SerachList/SearchList.module.scss';
import Search from '../Search/Search';
import ButtonComponent from '../Button/ButtonComponent';
import CardList from '../CardList/CardList';
import { fetchCatalog } from '../../store/slices/catalogSlices';

function SearchListContainer() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  useEffect(() => {
    dispatch(fetchCatalog(search));
  }, [search]);

  return (
    <div className={styles.searchList}>
      <h2>SearchList</h2>
      <div className={styles.searchContainer}>
        <Search props={<ButtonComponent text="Search" style={{ height: '100%', width: '30%' }} />} />
      </div>

      <CardList />
    </div>
  );
}
export default SearchListContainer;
