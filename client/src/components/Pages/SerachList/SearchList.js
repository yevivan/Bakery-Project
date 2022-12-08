import CardList from '../../CardList/CardList';
import Search from '../../Search/Search';
import styles from './SearchList.module.scss';

function SearchList() {
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
