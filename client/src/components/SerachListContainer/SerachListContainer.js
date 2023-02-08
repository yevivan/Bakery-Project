import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from '../Pages/SerachList/SearchList.module.scss';
import Search from '../Search/Search';
import ButtonComponent from '../Button/ButtonComponent';
import CardList from '../CardList/CardList';
import { fetchCatalog } from '../../store/slices/catalogSlices';
import CardListForSearch from '../CardListForSearch/CardListForSearch';

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
        <Search style={{ width: '100%' }} styles={{ width: '100%', height: '40px', display: 'flex' }} stylesLabel={{ flexGrow: '1', height: '40px' }} stylesInput={{ width: '100%', height: '100%', opacity: '1' }} props={<ButtonComponent text="Search" style={{ height: '100%' }} />} />
      </div>

      <CardListForSearch />
    </div>
  );
}
export default SearchListContainer;
