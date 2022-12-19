import { useDispatch } from 'react-redux';
import CardList from '../../CardList/CardList';
import Search from '../../Search/Search';
import styles from './SearchList.module.scss';
import { closeMenuMobile } from '../../../store/slices/menuMobileSlices';

function SearchList() {
  const dispatch = useDispatch();
  dispatch(closeMenuMobile(false));
  return (
    <div className={styles.searchList}>
      <h2>SearchList</h2>
      <div className={styles.searchContainer}>
        <Search />
      </div>

      <CardList />
    </div>
  );
}
export default SearchList;
