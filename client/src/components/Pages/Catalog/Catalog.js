import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Filter from '../../Filter/Filter';
import CardList from '../../CardList/CardList';
import { fetchCatalog } from '../../../store/slices/catalogSlices';
import styles from './Catalog.module.scss';

function Catalog() {
  const dispatch = useDispatch();
  // use search Params  чи э категорія, робим запит за цим фільтром
  //     якщл нема, робимо запит на всі товари
  // const { search } = window.location;
  // console.log(search);

  const [searchParams] = useSearchParams();
  const search = searchParams.get('categories');
  // console.log(search);
  // console.log(Boolean(search));

  useEffect(() => {
    dispatch(fetchCatalog(search));

    // dispatch(fetchCategory());
  }, [search]);

  return (
    <div className={styles.catalog}>
      <p>КATAЛОГ</p>
      <Filter />
      <CardList />
    </div>
  );
}
export default Catalog;
