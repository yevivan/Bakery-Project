import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Search from '../../Search/Search';
// import CardList from '../../CardList/CardList';
import CardList from '../../CardList/CardList';
import Filter from '../../Filter/Filter';

import styles from './Catalog.module.scss';
import { changeFilterCategory } from '../../../store/slices/filterSlices';

function Catalog() {
  const dispatch = useDispatch();
  // use search Params  чи э категорія, робим запит за цим фільтром
  //     якщл нема, робимо запит на всі товари
  // const { search } = window.location;
  // console.log(search);

  const [searchParams] = useSearchParams();
  const search = searchParams.get('categories');
  dispatch(changeFilterCategory(search));

  return (
    <div className={styles.container}>
      <Search />
      <Filter />
      <CardList />
    </div>
  );
}
export default Catalog;
